import { test, expect } from '@playwright/test';


test('1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const locator = page.locator('text=Star');

  // click
  await page.pause();
  await locator.click();
  await page.pause();

});

test('2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // click
  await page.pause();
  page.click('text=Star');
  await page.pause();

});

test('3', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // click
  await page.pause();
  page.click('text="Star"');
  await page.pause();

});

test('4', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const locator = page.locator('text="Star"');

  // click
  await page.pause();
  await locator.click();
  await page.pause();
});
