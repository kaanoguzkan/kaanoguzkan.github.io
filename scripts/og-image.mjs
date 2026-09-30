// Renders scripts/og-image.html to public/og-image-2026.png (1200x630) using the system Chrome.
// Run with: npm run og-image
// When you change the design, bump the file name (and the two meta tags in index.html) so
// social networks, which cache previews by URL, pick up the new image.
import { chromium } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(resolve(here, 'og-image.html')).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(here, '../public/og-image-2026.png') });
await browser.close();
console.log('wrote public/og-image-2026.png');
