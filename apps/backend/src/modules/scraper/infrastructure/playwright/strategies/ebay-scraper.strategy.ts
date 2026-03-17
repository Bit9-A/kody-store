import { Injectable, Logger } from '@nestjs/common';
import { ScraperStrategy } from '../../../domain/interfaces/scraper-strategy.interface';
import { ScrapedProduct } from '../../../domain/models/scraped-product.model';
import { PlaywrightService } from '../playwright.service';
import { getClientScraperScript } from '../scripts';

@Injectable()
export class EbayScraperStrategy implements ScraperStrategy {
  private readonly logger = new Logger(EbayScraperStrategy.name);

  // Esquema tal cual fue definido para eBay
  private readonly EBAY_SCHEMA = {
    title: { selector: '.s-card__title span', attribute: 'innerText' },
    link: { selector: 'a.s-card__link', attribute: 'href' },
    image: { selector: 'img.s-card__image', attribute: 'src' },
    price: { selector: '.s-card__price', attribute: 'innerText' },
    condition: { selector: '.s-card__subtitle', attribute: 'innerText' },
    seller: {
      selector: '.su-card-container__attributes__secondary .s-card__attribute-row:first-child',
      attribute: 'innerText',
    },
  };

  constructor(private readonly playwrightService: PlaywrightService) {}

  getStoreName(): string {
    return 'ebay';
  }

  async scrape(query: string, maxPages: number = 2): Promise<ScrapedProduct[]> {
    this.logger.log(`Iniciando Scraper de eBay para: "${query}" (Máx ${maxPages} páginas)...`);
    const targetUrl = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
    
    const context = await this.playwrightService.getContext();
    const page = await context.newPage();
    const allProducts: ScrapedProduct[] = [];

    try {
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

      for (let currentPage = 1; currentPage <= maxPages; currentPage++) {
        this.logger.log(`Procesando Página ${currentPage}`);
        await page.waitForTimeout(3000);

        const clientScript = getClientScraperScript();
        await page.addScriptTag({ content: clientScript });

        await page.evaluate(async () => {
          if ((window as any).autoScrollToBottom) {
            await (window as any).autoScrollToBottom(3, 500);
          }
        });

        const products = await page.evaluate((schema) => {
          if (!(window as any).scrapeList) return [];
          return (window as any).scrapeList({
            listSelector: 'ul.srp-results li.s-item, ul.srp-results li.s-card',
            fields: schema,
          });
        }, this.EBAY_SCHEMA);

        // Limpieza
        const cleanProducts = products
          .filter((p: any) => p.title && p.price)
          .map((p: any) => ({
            ...p,
            title: typeof p.title === 'string' ? p.title.replace(/Opens in a new window or tab/g, '').trim() : p.title,
            price: typeof p.price === 'string' ? p.price.trim() : p.price,
            seller: typeof p.seller === 'string' ? p.seller.replace(/\n/g, ' - ').trim() : 'Unknown',
            page: currentPage,
          }));

        allProducts.push(...cleanProducts);

        if (currentPage < maxPages) {
          const nextButton = await page.$('a.pagination__next');
          if (nextButton) {
            await Promise.all([
              page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 }),
              nextButton.click(),
            ]);
          } else {
            break;
          }
        }
      }
    } catch (err) {
      this.logger.error('Error crítico extrayendo eBay', err);
    } finally {
      await page.close();
      // Solo cerramos la pagina, el contexto se reutiliza
    }

    return allProducts;
  }
}
