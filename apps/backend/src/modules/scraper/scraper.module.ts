import { Module } from '@nestjs/common';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './application/scraper.service';
import { PlaywrightService } from './infrastructure/playwright/playwright.service';
import { AmazonScraperStrategy } from './infrastructure/playwright/strategies/amazon-scraper.strategy';
import { EbayScraperStrategy } from './infrastructure/playwright/strategies/ebay-scraper.strategy';

@Module({
  controllers: [ScraperController],
  providers: [
    PlaywrightService,
    AmazonScraperStrategy,
    EbayScraperStrategy,
    ScraperService,
  ],
  exports: [ScraperService],
})
export class ScraperModule {}
