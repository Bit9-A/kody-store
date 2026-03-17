// file: client-scraper.js
(function (window) {
  const Utils = {
    // Extrae el valor basado en el tipo de atributo solicitado
    getValue: (el, attr) => {
      if (!el) return null;
      if (attr === 'innerText') return el.innerText?.trim();
      if (attr === 'href' || attr === 'src') return el[attr];
      return el.getAttribute(attr);
    },
    // Penetra Shadow DOMs e iframes si es necesario (sintaxis 'padre >> hijo', 'iframe >> hijo')
    deepQuery: (selector, root = document) => {
      if (!selector || selector.trim() === '') return root;
      
      const parts = selector.split(' >> ');
      let current = root;
      for (const part of parts) {
        if (!current) return null;
        
        // Manejo de iframes
        if (current.tagName === 'IFRAME' || current.tagName === 'FRAME') {
          try {
            const frameDoc = current.contentDocument || current.contentWindow?.document;
            if (!frameDoc) return null;
            current = frameDoc.querySelector(part);
            continue;
          } catch (e) {
            return null; // Cross-origin object exception
          }
        }

        // Manejo de Shadow DOM vs normal
        current = current.shadowRoot ? current.shadowRoot.querySelector(part) : current.querySelector(part);
      }
      return current;
    }
  };

  window.scrapeSchema = function(schema) {
    const result = {};
    for (const [key, config] of Object.entries(schema)) {
      const el = Utils.deepQuery(config.selector);
      result[key] = Utils.getValue(el, config.attribute || 'innerText');
    }
    return result;
  };

  window.scrapeList = function({ listSelector, fields }) {
    const containers = document.querySelectorAll(listSelector);
    return Array.from(containers).map(container => {
      const item = {};
      for (const [key, config] of Object.entries(fields)) {
         const el = Utils.deepQuery(config.selector, container);
         item[key] = Utils.getValue(el, config.attribute || 'innerText');
      }
      return item;
    });
  };

  // Función mágica para hacer Auto-Scroll en páginas de scroll infinito
  window.autoScrollToBottom = async function(maxScrolls = 10, delayMs = 500) {
    let currentScroll = 0;
    while (currentScroll < maxScrolls) {
      const previousHeight = document.body.scrollHeight;
      window.scrollTo(0, document.body.scrollHeight);
      
      // Esperar a que la red cargue los nuevos elementos
      await new Promise(resolve => setTimeout(resolve, delayMs));
      
      const newHeight = document.body.scrollHeight;
      if (newHeight === previousHeight) {
        // Se ha llegado al verdadero final
        break;
      }
      currentScroll++;
    }
  };

  /**
   * --- HEURÍSTICA Y AUTO-DESCUBRIMIENTO ---
   */

  function getElementXPath(element) {
    if (element.id !== '')
        return 'id("' + element.id + '")';
    if (element === document.body)
        return element.tagName.toLowerCase();
    var ix = 0;
    var siblings = element.parentNode?.childNodes;
    if(!siblings) return '';
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element)
            return getElementXPath(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
            ix++;
    }
  }

  // Detectar la lista principal del documento mediante similitud de nodos hijos
  function discoverMainList() {
    // 1. Recolectar candidatos (Nodos que tienen múltiples hijos similares)
    const elements = document.querySelectorAll('*');
    let bestContainer = null;
    let bestScore = -1;
    let bestChildTag = null;
    let bestChildClass = null;

    elements.forEach(el => {
      // Ignorar contenedores invisibles o de diagramación pura
      if (['HEAD', 'SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT', 'IFRAME', 'HEADER', 'FOOTER'].includes(el.tagName)) return;
      if (el.offsetWidth === 0 || el.offsetHeight === 0) return;

      const children = Array.from(el.children).filter(child => {
          return !['SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT'].includes(child.tagName) && child.offsetHeight > 10;
      });

      if (children.length < 3) return; // Las listas suelen tener al menos 3 items

      // Contar ocurrencias de tag + primer clase para encontrar la estructura predominante
      const signatureCounts = {};
      children.forEach(child => {
        const cls = child.className && typeof child.className === 'string' ? child.className.split(' ')[0] : '';
        const sig = `${child.tagName}|${cls}`;
        signatureCounts[sig] = (signatureCounts[sig] || 0) + 1;
      });

      // Encontrar la firma más repetida entre sus hijos
      let maxCount = 0;
      let dominantSig = '';
      for (const [sig, count] of Object.entries(signatureCounts)) {
        if (count > maxCount) {
          maxCount = count;
          dominantSig = sig;
        }
      }

      // Si la firma estructural dominante abarca a más de 3 hijos
      if (maxCount >= 3) {
        // El puntaje se basa en la cantidad de elementos, el área en pantalla y la densidad de texto
        const area = el.offsetWidth * el.offsetHeight;
        let textDensity = 0;
        children.forEach(c => textDensity += (c.innerText || '').length);

        const score = (maxCount * 50) + (area * 0.001) + textDensity;

        if (score > bestScore) {
          bestScore = score;
          bestContainer = el;
          const [tag, cls] = dominantSig.split('|');
          bestChildTag = tag;
          bestChildClass = cls;
        }
      }
    });

    if (!bestContainer) return null;

    // 2. Construir los selectores CSS heurísticos
    // Intentamos conseguir un selector local robusto usando clases o id de la estructura padre
    let parentSelector = bestContainer.id ? `#${bestContainer.id}` : '';
    if (!parentSelector && bestContainer.className && typeof bestContainer.className === 'string') {
        const pClassStr = bestContainer.className.trim().replace(/\s+/g, '.');
        parentSelector = pClassStr ? `${bestContainer.tagName.toLowerCase()}.${pClassStr}` : bestContainer.tagName.toLowerCase();
    }
    if (!parentSelector) {
        parentSelector = getElementXPath(bestContainer); // fallback
    }

    let childSelector = bestChildTag.toLowerCase();
    if (bestChildClass) {
        childSelector += `.${bestChildClass}`;
    }

    const fullContainerSelector = parentSelector; // Representa el contenedor
    const fullListSelector = `${parentSelector} > ${childSelector}`; // Representa las filas

    let countFound = 0;
    try {
        countFound = document.querySelectorAll(fullListSelector).length;
    } catch (e) {
        // Fallback robusto por si XPath generó algo inválido para querySelector (ej: id("hnmain")/tbody[1] > tr)
        console.warn(`[Auto-Scraper] Selector generado inválido para CSS: ${fullListSelector}. Usando evaluación manual.`);
        return null;
    }

    return {
        container: bestContainer,
        listSelector: fullListSelector,
        count: countFound
    };
  }

  // Infiriere automáticamente los campos disponibles (título, links, imágenes) dentro de UNA tarjeta/fila
  function generateSchemaForChild(childElement) {
    const schema = {};
    let textCounter = 1;
    let linkCounter = 1;
    let imgCounter = 1;

    // Recorre internamente el elemento hijo
    const traverse = (el, currentPath) => {
        if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
        if (['SVG', 'SCRIPT', 'STYLE'].includes(el.tagName)) return;

        let myPath = currentPath;
        if(currentPath !== '') {
            const tagName = el.tagName.toLowerCase();
            const firstClass = typeof el.className === 'string' && el.className ? `.${el.className.split(' ')[0]}` : '';
            myPath += ` > ${tagName}${firstClass}`;
        } else {
             // Raíz del hijo (ejem: no necesita prefijo en la query)
             myPath = '';
        }

        const selectorStr = myPath === '' ? '*' : myPath.substring(3); // remueve el ' > ' inicial si existe

        // Solo procesamos Nodos Hoja (leaf nodes) o cosas que tengan texto directo sin envolver más HTML complejo
        const isLeaf = el.children.length === 0;
        
        // Analizar Texto
        const text = el.innerText?.trim();
        if (text && text.length > 0 && isLeaf) { 
           schema[`text_${textCounter}`] = { selector: selectorStr === '*' ? 'self' : selectorStr, attribute: 'innerText' };
           textCounter++;
        }

        // Analizar Link
        if (el.tagName === 'A' && el.href) {
            schema[`link_${linkCounter}`] = { selector: selectorStr === '*' ? 'self' : selectorStr, attribute: 'href' };
            linkCounter++;
        }

        // Analizar Imagen
        if (el.tagName === 'IMG' && el.src) {
            schema[`image_${imgCounter}`] = { selector: selectorStr === '*' ? 'self' : selectorStr, attribute: 'src' };
            imgCounter++;
        }

        Array.from(el.children).forEach(c => traverse(c, myPath));
    };

    traverse(childElement, '');

    // Limpieza especial de self references para el Scraper Pro:
    for(const key in schema) {
        if(schema[key].selector === 'self') {
            schema[key].selector = ''; // el root del contenedor
        }
    }

    return schema;
  }

  window.autoScrapeList = function() {
    const listInfo = discoverMainList();
    
    if (!listInfo || listInfo.count === 0) {
        return { error: 'No se encontraron listas o patrones repetitivos en la página', data: [] };
    }

    // Tomar el primer hijo real de esa lista para analizar sus entrañas
    const firstItem = document.querySelector(listInfo.listSelector);
    if (!firstItem) return { error: 'Fallo al resolver selector heurístico', data: [] };

    // Generar Schema basado en ese primer nodo
    const autoSchema = generateSchemaForChild(firstItem);

    // Ejecutar nuestro scraper masivo con las heurísticas descubiertas
    const results = window.scrapeList({
        listSelector: listInfo.listSelector,
        fields: autoSchema
    });

    return {
        meta: {
            listSelectorGenerated: listInfo.listSelector,
            itemsFound: listInfo.count,
            autoSchemaGenerated: autoSchema
        },
        data: results
    };
  };

})(window);
