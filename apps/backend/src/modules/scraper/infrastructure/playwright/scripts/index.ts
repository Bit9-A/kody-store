import * as fs from 'fs';
import * as path from 'path';

/**
 * Returns the client-scraper.js script content as a string
 * so it can be injected via Playwright.
 */
export const getClientScraperScript = (): string => {
  try {
    const scriptPath = path.join(__dirname, 'client-scraper.js');
    return fs.readFileSync(scriptPath, 'utf8');
  } catch (err) {
    console.error('No se pudo encontrar el script cliente', err);
    return '';
  }
};
