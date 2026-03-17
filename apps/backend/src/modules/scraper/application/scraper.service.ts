import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { ScraperStrategy } from '../domain/interfaces/scraper-strategy.interface';
import { ScrapedProduct } from '../domain/models/scraped-product.model';
import { AmazonScraperStrategy } from '../infrastructure/playwright/strategies/amazon-scraper.strategy';
import { EbayScraperStrategy } from '../infrastructure/playwright/strategies/ebay-scraper.strategy';

@Injectable()
export class ScraperService {
  private strategies: Map<string, ScraperStrategy> = new Map();
  private readonly logger = new Logger(ScraperService.name);

  constructor(
    private readonly amazonStrategy: AmazonScraperStrategy,
    private readonly ebayStrategy: EbayScraperStrategy,
  ) {
    this.strategies.set(amazonStrategy.getStoreName(), amazonStrategy);
    this.strategies.set(ebayStrategy.getStoreName(), ebayStrategy);
  }

  async scrape(store: string, query: string, pages: number = 1): Promise<ScrapedProduct[]> {
    const strategy = this.strategies.get(store.toLowerCase());
    if (!strategy) {
      throw new BadRequestException(`Tienda no soportada: ${store}`);
    }

    this.logger.log(`Iniciando extraction en la tienda ${store} para el término: "${query}"`);
    return await strategy.scrape(query, pages);
  }
}
