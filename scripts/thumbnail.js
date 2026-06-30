/* Render an action thumbnail of Ocean Voyage by driving the game
 * through Playwright: launch headless Chromium, click Play, sail
 * the boat for a moment, and capture a PNG.
 */
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  // Silence audio context errors in headless
  page.on('pageerror', () => {});

  const url = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForSelector('#start-btn');
  await page.click('#start-btn');

  // Boat starts inside Home Island's detection range so the shop
  // auto-opens. Close it via the "Set Sail!" button, then sail away.
  await page.waitForTimeout(700);
  const sailBtn = page.locator('.shop-action.sail', { hasText: 'Set Sail' });
  if (await sailBtn.count() > 0) {
    await sailBtn.first().click();
    await page.waitForTimeout(400);
  }

  // Sail SE into open water and let items, NPCs, debris come into view
  await page.keyboard.down('d');
  await page.keyboard.down('s');
  await page.waitForTimeout(4200);
  await page.keyboard.up('d');
  await page.keyboard.up('s');

  // Briefly coast so the wake trail is dramatic in the frame
  await page.waitForTimeout(220);

  const out = path.resolve(__dirname, '..', 'docs', 'thumbnail.png');
  await page.screenshot({ path: out, type: 'png' });
  console.log('Saved:', out);

  await browser.close();
})();
