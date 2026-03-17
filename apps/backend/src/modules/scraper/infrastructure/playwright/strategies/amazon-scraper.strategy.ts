import { Injectable, Logger } from '@nestjs/common';
import { ScraperStrategy } from '../../../domain/interfaces/scraper-strategy.interface';
import { ScrapedProduct } from '../../../domain/models/scraped-product.model';
import { PlaywrightService } from '../playwright.service';
import { getClientScraperScript } from '../scripts';

@Injectable()
export class AmazonScraperStrategy implements ScraperStrategy {
  private readonly logger = new Logger(AmazonScraperStrategy.name);

  private readonly AMAZON_SCHEMA = {
    listSelector: 'div[data-component-type="s-search-result"]',
    fields: {
      title: { selector: '[data-cy="title-recipe"] h2, h2, a.a-link-normal.a-text-normal', attribute: 'innerText' },
      link: { selector: 'a.a-link-normal.s-no-outline, [data-cy="title-recipe"] a, h2 a', attribute: 'href' },
      image: { selector: 'img.s-image', attribute: 'src' },
      price: { selector: 'span.a-price span.a-offscreen', attribute: 'innerText' },
      rating: {
        selector: 'i[data-cy="reviews-ratings-slot"] span, i[class*="a-icon-star-small"] span',
        attribute: 'innerText',
      },
      ratingsCount: { selector: 'a[href*="#customerReviews"] span', attribute: 'innerText' },
    },
  };

  constructor(private readonly playwrightService: PlaywrightService) {}

  getStoreName(): string {
    return 'amazon';
  }

  async scrape(query: string, maxPages: number = 1): Promise<ScrapedProduct[]> {
    this.logger.log(`Iniciando Scraper Especializado: Amazon - Búsqueda: ${query}`);
    const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');
    const targetUrl = `https://www.amazon.com/s?k=${encodedQuery}`;
    
    // NOTA: Para Amazon solo hacemos 1 pagina de momento (como estaba configurado)
    
    const context = await this.playwrightService.getContext();
    const page = await context.newPage();
    let allProducts: ScrapedProduct[] = [];

    try {
      const clientScript = getClientScraperScript();
      await page.addInitScript(clientScript);

      await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector(this.AMAZON_SCHEMA.listSelector, { timeout: 10000 }).catch(() => null);

      await page.evaluate(async () => {
        if ((window as any).autoScrollToBottom) {
          await (window as any).autoScrollToBottom(4, 500);
        }
      });

      const products = await page.evaluate((schema) => {
        if (!(window as any).scrapeList) return [];
        return (window as any).scrapeList(schema);
      }, this.AMAZON_SCHEMA);

      if (products && products.length > 0) {
        allProducts = products.map((p: any) => {
          if (p.link && p.link.startsWith('/')) p.link = `https://www.amazon.com${p.link}`;
          if (p.price) {
            p.price = p.price.trim().replace(/\s+/g, '');
          }
          return { ...p, page: 1 };
        });
      }

    } catch (err) {
      this.logger.error('Error durante el scrapping de Amazon', err);
    } finally {
      await page.close();
    }

    return allProducts;
  }
}
