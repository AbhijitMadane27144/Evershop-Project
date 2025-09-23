import { test, expect ,} from '@playwright/test';
import { ENV } from "./utils/env";
import testData from "./data/testData.json";
import { getLocator, applocators } from "./locators/subscription.locator";
//import {testfixture} from "../fixtures/login";



test("Login and Select file ", async ({page}) => {

    await page.goto(ENV.adminURL);

    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await page.getByRole('button', { name: 'SIGN IN' }).click();

    await page.getByRole('link', { name: 'Products', exact: true }).click();
    await page.locator('div').filter({ hasText: /^New Product$/ }).getByRole('link').click();

    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill(testData.ProductData.Name);
    await page.getByRole('textbox', { name: 'SKU' }).click();
    await page.getByRole('textbox', { name: 'SKU' }).fill(testData.ProductData.SKU);
    await page.getByRole('textbox', { name: 'Price' }).click();
    await page.getByRole('textbox', { name: 'Price' }).fill(testData.ProductData.Price);
    await page.getByRole('textbox', { name: 'Weight' }).click();
    await page.getByRole('textbox', { name: 'Weight' }).fill(testData.ProductData.Weight);
    await page.locator('#urlKey').click();
    await page.locator('#urlKey').fill('123');
    await page.locator('#metaTitle').click();
    await page.locator('#metaTitle').fill(testData.ProductData.metaTitle);
    await page.locator('#metaKeywords').click();
    await page.locator('#metaKeywords').fill('key123');
    await page.getByRole('textbox', { name: 'Meta description' }).click();
    await page.getByRole('textbox', { name: 'Meta description' }).fill('cool');


    const fileInput = page.locator('input[type="file"]');
 
      await fileInput.setInputFiles("D:/Training Framework/Playwright-Abhijit-Lannister/tests/Fileopload/figma.jpg");
 
      const uploaded = page.locator("#images div").first();
      await expect(uploaded).toBeVisible();
    
    await expect(page.getByRole('heading', { name: 'Attributes' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Color' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Size' })).toBeVisible();


    
    const option1 = 'Black';
    await page.locator('select[name="attributes[0][value]"]').selectOption({ label: `${option1}` });

    const option2 = 'XL';
    await page.locator('select[name="attributes[1][value]"]').selectOption({ label: option2 });



    await page.getByRole('button', { name: 'Save' }).click();
    //await testfixture


    page.on('dialog', async dialog=>{

      await dialog.accept()

    })

    test("Login and Select file1 ", async ({}) => {

    })

})








