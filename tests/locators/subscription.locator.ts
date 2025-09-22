import { Locator, Page } from "@playwright/test";
 
type RoleLocator= {
  role : Parameters<Page["getByRole"]>[0];
  name?: string;
  exact?: boolean;
};
 
export const applocators = {
  // Navigation
  navSignup: ".self-center",
 
  // Signup
  linkCreateAccount: { role: "link" , name: "Create an account" } as RoleLocator,
  fullNameInput: { role: "textbox" as const, name: "Full Name" }as RoleLocator,

  
  emailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  passwordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  signupButton: { role: "button" as const, name: "SIGN UP" }as RoleLocator,
 
  // Admin login
  adminEmailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  adminPasswordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  adminSigninButton: { role: "button" as const, name: "SIGN IN" }as RoleLocator,
  nextButton:".next",
  coupon : {role:"link", name: "Coupons"} as RoleLocator,

  // Coupen Creater

  enterCouponCode: { role: "textbox" as const, name: "Enter coupon code" }as RoleLocator,
  descriptionInput: { role: "textbox" as const, name: "Description" }as RoleLocator,
  discountAmountInput: { role: "textbox" as const, name: "Discount amount" }as RoleLocator,
  startDateInput: { role: "textbox" as const, name: "Start date" }as RoleLocator,
  endDateInput: { role: "textbox" as const, name: "End date" }as RoleLocator,

  startDateLabel: { label: "September 12," },
  endDateLabel: { label: "September 22," },
  fixedDiscountCheckbox: {labelText: "Fixed discount to specific"},

  quantityInput: { role: "textbox" as const, name: "QuantityInput" }as RoleLocator,

  minPurchaseAmountInput: {role: "textbox" as const,name: "Enter minimum purchase amount"}as RoleLocator,
  minPurchaseQtyContainerText: /^Minimum purchase qty$/, 

  minPurchaseQtyInput: {role: "textbox" as const,name: "Enter minimum purchase qty"},

  saveButton: { role: "button" as const, name: "Save" },



  /*await page.getByRole('link', { name: 'Coupons' }).click();
  await page.locator('div').filter({ hasText: /^New Coupon$/ }).getByRole('link').click();
  await page.getByRole('textbox', { name: 'Enter coupon code' }).click();
  await page.getByRole('textbox', { name: 'Enter coupon code' }).fill('Coup789');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Product Description');
  await page.getByRole('textbox', { name: 'Discount amount' }).click();
  await page.getByRole('textbox', { name: 'Discount amount' }).fill('1000');
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByLabel('September 12,').first().click();
  await page.getByRole('textbox', { name: 'Start date' }).fill('2025-09-12');
  await page.getByRole('textbox', { name: 'End date' }).click();
  await page.getByLabel('September 22,').nth(1).click();
  await page.getByRole('textbox', { name: 'End date' }).fill('2025-09-22');
  await page.locator('label').filter({ hasText: 'Fixed discount to specific' }).locator('span').first().click();
  await page.getByRole('textbox', { name: '10' }).click();
  await page.getByRole('textbox', { name: '10' }).fill('01');

  await page.getByRole('textbox', { name: 'Enter minimum purchase amount' }).click();
  await page.getByRole('textbox', { name: 'Enter minimum purchase amount' }).fill('900');
  await page.locator('div').filter({ hasText: /^Minimum purchase qty$/ }).locator('div').nth(1).click();
  await page.getByRole('textbox', { name: 'Enter minimum purchase amount' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter minimum purchase qty' }).fill('01');
  await page.getByRole('button', { name: 'Save' }).click();*/



















  
  // Customers page
  customersLink: { role: "link" as const, name: "Customers" }as RoleLocator,
  customerStatus: "text=StatusEnabled",
  startDate: {role:"textbox", name: "Start date" }as RoleLocator,
  endDate: {role:"textbox", name: "End date" }as RoleLocator,
   newCouponLink: (page:Page) =>
   page.locator('div').filter({ hasText: /^New Coupon$/ }).getByRole('link'),
 
// Dynamic data for random email
dynamicCustomerEmailCell: (email: string): RoleLocator => ({
  role: "cell",     
  name: email,
  exact: true,
}),
 
};
 
export function getLocator(page: Page,locator:RoleLocator| string): Locator {
  if(typeof locator==="string")
  {
    return page.locator(locator);
  }
  const {role,name,exact}=locator;
  return page.getByRole(role,{name,exact});
}
 
 
//1. Evershop installation
//2. Folder structure of test case
//3. Testcase for
   //a. Table handle
   //b. pagination
   //c. Dates handle
   //d. multiple tabs and windows
   //e. File upload and system alert
 
//4. Writing locators.   
 