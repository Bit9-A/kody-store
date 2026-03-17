import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ScraperService } from './application/scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get()
  async scrapeProducts(
    @Query('store') store: string,
    @Query('query') query: string,
    @Query('pages') pages?: string,
  ) {
    if (!store || !query) {
      throw new BadRequestException('Los parámetros "store" y "query" son requeridos.');
    }

    const pagesCount = pages ? parseInt(pages, 10) : 1;
    const products = await this.scraperService.scrape(store, query, pagesCount);
    
    return {
      success: true,
      store,
      query,
      count: products.length,
      data: products,
    };
  }
}
