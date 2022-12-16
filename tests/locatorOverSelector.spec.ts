import { test, expect } from '@playwright/test';


test('1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const getStarted = page.locator('text=any');

  // Click the get started link.
  await getStarted.click();


});

test('2', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  // Click the get started link.
  await page.click('text=any');


});
