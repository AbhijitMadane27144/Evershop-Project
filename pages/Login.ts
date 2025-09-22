import { Page, expect } from "@playwright/test";
import { BasePages } from "./BasePages";
import { applocators } from "../tests/locators/subscription.locator";

export class AdminPage extends BasePages {
  constructor(page: Page) {
    super(page);
  }

  async loginAsAdmin(email: string, password: string) {

    await this.locate(applocators.adminEmailInput).fill(email);
    await this.locate(applocators.adminPasswordInput).fill(password);
    await this.locate(applocators.adminSigninButton).click();

    // Assertion: Verify admin is logged in
    await expect(this.locate(applocators.customersLink)).toBeVisible();
    await expect(this.page).toHaveURL(/.*\/admin/);
  }
}
