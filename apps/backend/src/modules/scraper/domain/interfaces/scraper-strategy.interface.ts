import { ScrapedProduct } from '../models/scraped-product.model';

export interface ScraperStrategy {
  scrape(query: string, maxPages?: number): Promise<ScrapedProduct[]>;
  getStoreName(): string;
}
