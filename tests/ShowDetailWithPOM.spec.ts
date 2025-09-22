import { test } from "@playwright/test"
import { ENV } from "./utils/env";
import { generateRandomEmail } from "./utils/helper";
import { SignupPage } from "../pages/SignupPages";
import testData from "../tests/data/testData.json";
import { AdminPage } from "../pages/Login";


test.describe("Subscription Flow POM Demo", () => {
    test("Signup form new user creation", async ({ page }) => {
        const signupPage = new SignupPage(page);
        const randomEmail = generateRandomEmail(testData.user.email);

        // Register New User
        await signupPage.navigate(ENV.baseURL);
        await signupPage.openNewCustomerForm();
        await signupPage.registerNewUser(
            testData.user.name,
            randomEmail,
            testData.user.password);
    });

    // Admin Login
    test.only("Admin Login", async ({ page }) => {

        const adminpage = new AdminPage(page);
        await adminpage.navigate(ENV.adminURL);

        await adminpage.loginAsAdmin(testData.admin.email, testData.admin.password)

    });
});