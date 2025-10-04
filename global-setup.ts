import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('Running global setup...');
  // e.g. authenticate once and save storage state
  // const { chromium } = require('@playwright/test');
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
  // await page.goto('https://example.com/login');
  // await page.fill('#username', 'user');
  // await page.fill('#password', 'pass');
  // await page.click('button[type=submit]');
  // await page.context().storageState({ path: 'storageState.json' });
  // await browser.close();
}

export default globalSetup;
