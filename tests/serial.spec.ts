import {Page, test} from '@playwright/test';


test.describe.configure({mode: 'serial'});

let page: Page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
});

test.afterAll(async () => {
    await page.close();
});

test('1', async () => {
    await page.goto('https://playwright.dev/');
});

test('2', async () => {
    await page.locator('text=Get Started').click();
});
