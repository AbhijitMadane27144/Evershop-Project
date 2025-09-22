
import { test, expect } from '@playwright/test';
import { ENV } from "./utils/env";
import testData from "./data/testData.json";
    import { getLocator, applocators } from "./locators/subscription.locator";




test("search data ", async ({ page }) => {

await page.goto(ENV.adminURL);

 await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
        await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
         await page.getByRole('button', { name: 'SIGN IN' }).click();

  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Striped Cotton Sweater' }).click();

/*await page.getByLabel('Disabled').check();
  await page.locator('Enabled').uncheck();

const disabledRadio = page.getByLabel('Disabled');
const enabledRadio = page.getByLabel('Enabled');*/

await expect(page.getByRole('heading', { name: 'Attributes' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Color' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Size' })).toBeVisible();

  const option1 = 'Black'; 
await page.locator('select[name="attributes[0][value]"]').selectOption({ label: option1 });

const option2 = 'XL'; 
await page.locator('select[name="attributes[1][value]"]').selectOption({ label: option2 });

});

test.only("Login page ", async ({ page }) => {

    await page.goto(ENV.adminURL);

  
  await expect(page).toHaveURL(/.*login/i);
  await expect(page).toHaveTitle(/.*login/i);


  await expect(getLocator(page, applocators.adminEmailInput)).toBeVisible();
  await expect(getLocator(page, applocators.adminPasswordInput)).toBeVisible();

  await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
  await getLocator(page, applocators.adminPasswordInput).pressSequentially(testData.admin.password);

  await expect(getLocator(page, applocators.adminEmailInput)).toHaveValue(testData.admin.email);

  const signInBtn = page.getByRole('button', { name: 'SIGN IN' });
  await expect(signInBtn).toBeVisible();
  await expect(signInBtn).toBeEnabled();
         await page.getByRole('button', { name: 'SIGN IN' }).click();

  await page.waitForURL(/.*admin/i); 
  await expect(page).toHaveURL(/.*admin/i);

    await page.getByRole('link', { name: 'A', exact: true }).click();


  await expect(page.getByText('Hello Abhijit!')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();


  // Document Rep

  /*await page.locator('li > div > svg').first().hover();
  await page.getByText('Document Repository').click();
  await expect(page.getByRole('heading', { name: 'Document Repository' })).toBeVisible({timeout:2000})
  await expect(page.getByRole('tab', { name: 'Documents Uploaded' })).toBeVisible({timeout:2000})
  await expect(page.getByRole('tab', { name: 'Reports Generated' })).toBeVisible({timeout:2000})
  await expect(page.getByRole('tab', { name: 'ZIPs Generated' })).toBeVisible({timeout:2000})
  await expect(page.getByText('Attachments can be added here')).toBeVisible({timeout:2000})*/





})
 