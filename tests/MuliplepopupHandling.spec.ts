  
  import { test, expect, Page } from "@playwright/test";
   
  test("Handle keyboard events and interactions", async ({ page,context }) => {
  await page.goto("file:///C:/Users/AbhijitHanmant/Downloads/locator%20(4).html");


  const pagesBefore = context.pages();

  await page.getByRole('button', { name: 'Open Multiple Popups' }).click();

  await page.waitForTimeout(4000);

  const allPages = context.pages();
  const newPopups = allPages.filter(p => !pagesBefore.includes(p));

  if (newPopups.length !== 2) {
    throw new Error('Expected 2 popups to open');
  }

  let popup1: Page = newPopups[0];
  let popup2: Page = newPopups[1];

  const title1 = await popup1.title();
  const title2 = await popup2.title();

  if (!title1.includes('Wikipedia')) {
    [popup1, popup2] = [popup2, popup1];
  }

  await popup1.bringToFront();
  await expect(popup1.getByText('Wikipedia', { exact: true })).toBeVisible();

  if (!popup2.isClosed()) {
    await popup2.bringToFront();
    await expect(popup2.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  }



  
})

