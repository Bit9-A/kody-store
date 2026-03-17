import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { chromium, Browser, BrowserContext } from 'playwright';

@Injectable()
export class PlaywrightService implements OnModuleDestroy {
  private readonly logger = new Logger(PlaywrightService.name);
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;

  async getContext(): Promise<BrowserContext> {
    if (!this.browser) {
      this.logger.log('Lanzando el navegador Playwright...');
      this.browser = await chromium.launch({ headless: true });
    }
    
    if (!this.context) {
      this.context = await this.browser.newContext({
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      });
    }

    return this.context;
  }

  async closeBrowser() {
    if (this.context) {
      await this.context.close();
      this.context = null;
    }
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.logger.log('Navegador cerrado');
    }
  }

  async onModuleDestroy() {
    await this.closeBrowser();
  }
}
