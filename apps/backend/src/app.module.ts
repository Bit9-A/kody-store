import { Module } from '@nestjs/common';
import { ScraperModule } from './modules/scraper/scraper.module';

@Module({
  imports: [ScraperModule],
})
export class AppModule {
  constructor() {
    console.log('Hello World');
  }
}
