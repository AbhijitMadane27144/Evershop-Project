import { test, expect } from "@playwright/test";

test("Edit / Delete / Details in table", async ({ page }) => {
  await page.goto("file:///C:/Users/AbhijitHanmant/Downloads/locator%20(4).html");

  // Expand details for row 1
  await page.click('[data-testid="details-1"]');
  await expect(page.locator("#rowDetails")).toBeVisible();

  // Delete row 2 → modal opens
  await page.click('[data-testid="delete-2"]');
  await expect(page.locator("#modalBackdrop")).toBeVisible({visible:false});
    await expect(page.locator("#modalBackdrop")).toBeEnabled({enabled:true,timeout:3000});
      await expect.soft(page.locator("#modalBackdrop")).toHaveText("Login")
            await expect(page.locator("#modalBackdrop")).toHaveAttribute('name','Login-Name')

            await expect(page).toHaveTitle('hbhb')
            await expect(page).toHaveTitle('jjn');






});


