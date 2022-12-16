import { test, expect } from '@playwright/test';


test('1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // check text
  await expect(getStarted).toHaveText("Info");


});

test('2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // check text
  expect(await getStarted.innerText()).toEqual("Info");


});
