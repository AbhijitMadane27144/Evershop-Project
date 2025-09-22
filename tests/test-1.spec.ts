import { test, expect } from "@playwright/test";
 
test.only("Handle datalist dropdown", async ({ page }) => {
await page.goto("file:///C:/Users/AbhijitHanmant/Downloads/locator%20(3).html");
 
 
  // Step 1: Get all options inside datalist
  const allOptions = await page.locator("#courses option").all();
  console.log("Total options:", allOptions.length);
 
  // Step 2: Print each option value using a simple for loop
  for (let i = 0; i < allOptions.length; i++) {
    const text = await allOptions[i].getAttribute("value");
    console.log(`Option ${i + 1}: ${text}`);
  }
 
  // Step 3: Select an option by filling into input
  await page.locator("#courseInput").fill("Cypress");
 
  // Step 4: Verify the selected value in input field
  await expect(page.locator("#courseInput")).toHaveValue("Cypress");
});



test("handle drag and drop ", async ({ page }) => {
 
await page.goto('file:///C:/Users/AbhijitHanmant/Downloads/locator%20(3).html');
 
const sorce=page.locator("#dragBox");
const traget=page.locator("#dropZone");
//
await sorce.dragTo(traget);
await expect(page.locator("#dropResult")).toHaveText('Dropped successfully!');
});



