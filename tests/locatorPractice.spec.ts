import { test, expect } from '@playwright/test';
import * as path from 'path';


test.describe('Playwright Abhijit Practice Tests', () => {

  const baseURL = 'http://localhost:3000/locator1.html';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  // Locator by Role
  test("locator by Role", async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright Locator Training' })).toBeVisible();
  });

});