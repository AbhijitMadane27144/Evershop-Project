
import { test, expect } from '@playwright/test';
import { ENV } from "./utils/env";
import testData from "./data/testData.json";
import { getLocator, applocators } from "./locators/subscription.locator";




test("Login and Select file ", async ({ page }) => {

await page.goto(ENV.adminURL);

 await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
        await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
         await page.getByRole('button', { name: 'SIGN IN' }).click();

  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Striped Cotton Sweater' }).click();

  
await page.locator('label').filter({ hasText: 'Disabled' }).locator('span').first().click();
await page.locator('label').filter({ hasText: 'Enabled' }).locator('span').first().click();




await expect(page.getByRole('heading', { name: 'Attributes' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Color' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Size' })).toBeVisible();

  const option1 = 'Black'; 
await page.locator('select[name="attributes[0][value]"]').selectOption({ label: option1 });

const option2 = 'XL'; 
await page.locator('select[name="attributes[1][value]"]').selectOption({ label: option2 });

});





