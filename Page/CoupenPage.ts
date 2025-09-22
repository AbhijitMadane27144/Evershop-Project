import { Page, expect } from "@playwright/test";
import { BasePages } from "../Page/BasePage";

export class CoupenPage extends BasePages {
    constructor(page: Page) {
        super(page);
    }

    private get Locators() {
        return {
            couponsLink: this.page.getByRole("link", { name: "Coupons" }),

            newCouponLink: this.page
                .locator("div")
                .filter({ hasText: /^New Coupon$/ })
                .getByRole("link"),

            couponCodeInput: this.page.getByRole("textbox", { name: "Enter coupon code" }),
            descriptionInput: this.page.getByRole("textbox", { name: "Description" }),
            discountAmountInput: this.page.getByRole("textbox", { name: "Discount amount" }),
            startDateInput: this.page.getByRole("textbox", { name: "Start date" }),
            startDateLabel: this.page.getByLabel("September 12,").first(),
            endDateInput: this.page.getByRole("textbox", { name: "End date" }),
            endDateLabel: this.page.getByLabel("September 22,").nth(1),

            fixedDiscountRadio: this.page
                .locator("label")
                .filter({ hasText: "Fixed discount to specific" })
                .locator("span")
                .first(),

            quantityBox: this.page.getByRole("textbox", { name: "10" }),

            minPurchaseAmountInput: this.page.getByRole("textbox", { name: "Enter minimum purchase amount" }),
            minPurchaseQtyBox: this.page
                .locator("div")
                .filter({ hasText: /^Minimum purchase qty$/ })
                .locator("div")
                .nth(1),
            minPurchaseQtyInput: this.page.getByRole("textbox", { name: "Enter minimum purchase qty" }),

            saveButton: this.page.getByRole("button", { name: "Save" }),


        } as const;
    }




    async openCouponSection() {
        await this.Locators.couponsLink.click();
        await this.Locators.newCouponLink.click();
    }

    async enterCouponDetails(code: string,
        description: string,
        amount: string) {
        await expect(this.Locators.couponCodeInput).toBeVisible();

        await this.Locators.couponCodeInput.click();
        await this.Locators.couponCodeInput.fill(code);
        await expect(this.Locators.descriptionInput).toBeVisible()

        await this.Locators.descriptionInput.click();
        await this.Locators.descriptionInput.fill(description);
        await this.Locators.discountAmountInput.click();
        await this.Locators.discountAmountInput.fill(amount);
    }

    async selectStartDateManual(startDate: string) {
        await this.Locators.startDateInput.click();
        await this.Locators.startDateLabel.fill(startDate);
    }

    async selectEndDate(EmdDate: string) {
        await this.Locators.endDateInput.click();
        await this.Locators.endDateLabel.click();
        await this.Locators.endDateInput.fill(EmdDate); 
    }

    async applyFixedDiscount(quantity: string) {
        await this.Locators.fixedDiscountRadio.click();
        await this.Locators.quantityBox.click();
        await this.Locators.quantityBox.fill(quantity);
    }

    async setMinPurchaseDetails(amount: string, qty: string) {
        await this.Locators.minPurchaseAmountInput.click();
        await this.Locators.minPurchaseAmountInput.fill(amount);
        await this.Locators.minPurchaseQtyBox.click();
        await this.Locators.minPurchaseAmountInput.press("Tab");
        await this.Locators.minPurchaseQtyInput.fill(qty);
    }

    async saveCoupon() {
        await expect(this.Locators.saveButton).toBeVisible()
        await this.Locators.saveButton.click();
    }
}





