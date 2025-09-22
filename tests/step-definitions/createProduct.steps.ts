import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page } from "@playwright/test";
import { generateRandomCoupen, generateRandomEmail } from ".././utils/helper";

import { AdminProductPage } from "../../Page/CreateProductPage";
import testData from "../data/testData.json";
import { ENV } from "../utils/env";

let page: Page;
let adminProductPage: AdminProductPage;

Given('the admin logs in manually using locators', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  adminProductPage = new AdminProductPage(page);

  await page.goto(ENV.adminURL);

  // 👇 Directly using locators from POM
  await adminProductPage.Locators.emailInput.fill(testData.admin.email);
  await adminProductPage.Locators.passwordInput.fill(testData.admin.password);
  await adminProductPage.Locators.signInButton.click();
});

When('the admin fills in product details using locators', async () => {
  const pd = testData.ProductData;

  await adminProductPage.Locators.productsLink.click();
  await adminProductPage.Locators.newProductLink.click();

  await adminProductPage.Locators.nameInput.fill(pd.Name);
  await adminProductPage.Locators.skuInput.fill(pd.SKU);
  await adminProductPage.Locators.priceInput.fill(pd.Price);
  await adminProductPage.Locators.weightInput.fill(pd.Weight);
  await adminProductPage.Locators.urlKeyInput.fill(pd.URLkey);
  await adminProductPage.Locators.metaTitleInput.fill(pd.metaTitle);
  await adminProductPage.Locators.metaKeywordsInput.fill(pd.metaKeywords);
  await adminProductPage.Locators.metaDescriptionInput.fill(pd.metaDescription);
});

When('the admin uploads image and selects attributes', async () => {
  const pd = testData.ProductData;

  await adminProductPage.Locators.fileInput.setInputFiles(pd.filePath);
  await adminProductPage.Locators.colorSelect.selectOption({ label: pd.colorselection });
  await adminProductPage.Locators.sizeSelect.selectOption({ label: pd.sizeselection });
});

Then('the admin saves the product', async () => {
  // Handle confirmation dialog
  page.on("dialog", async dialog => {
    await dialog.accept();
  });

  await adminProductPage.Locators.saveButton.click();
});



 
