import {expect, test as base} from '@playwright/test';

export const test = base.extend({
    page: async ({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await use(page);
    },
});

test.use({ baseURL: 'https://playwright.dev' });

test('1', async ({page}) => {
    // create a locator
    const getStarted = page.locator('text=Get started');

    // check text
    await expect(getStarted).toHaveText("Get started");
});

test('2', async ({page}) => {
    // create a locator
    const getStarted = page.locator('text=Get started');

    // check text
    await expect(getStarted).toHaveText("Info");
});