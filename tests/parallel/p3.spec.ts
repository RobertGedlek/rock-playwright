import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });


test('1', async ({ page }) => {
  expect(true).toEqual(true);
});

test('2', async ({ page }) => {
  expect(true).toEqual(true);
});

test('3', async ({ page }) => {
  expect(true).toEqual(true);
});

test('4', async ({ page }) => {
  expect(true).toEqual(true);
});
