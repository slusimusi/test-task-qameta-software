import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://allurereport.org');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Allure Report/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://allurereport.org');

  // Click the get started link.
  await page.getByRole('link', { name: 'View documentation' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Allure Report Documentation ' })).toBeVisible();
});
