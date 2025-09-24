//import { test } from "@playwright/test"
import { test } from "../fixtures/POMfixture"
import { ENV } from "./utils/env";
import { generateRandomCoupen, generateRandomEmail } from "./utils/helper";
import { SignUpPage } from "../Page/SignUpPage";
import testData from "../tests/data/testData.json";
//import { AdminPage } from "../Page/AdminLogin";
import { CoupenPage1 } from "../Page/CoupenPage1";
import { AdminProductPage } from "../Page/CreateProductPage";


test.describe("Subscription Flow POM Demo", () => {
    test("Signup form new user creation", async ({ page }) => {
        const signupPage = new SignUpPage(page);
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
    test("Admin Login", async ({ page, AdminLogin }) => {

        //const adminpage = new AdminPage(page);
        await AdminLogin.navigate(ENV.adminURL);

        await AdminLogin.loginAsAdmin(testData.admin.email,
            testData.admin.password)

    });

    test("New Coupen Creation Page", async ({ page, AdminLogin }) => {

        const randomCoupen = generateRandomCoupen(testData.CoupenData.Code);

        //const adminpage = new AdminPage(page);
        await AdminLogin.navigate(ENV.adminURL);

        await AdminLogin.loginAsAdmin(testData.admin.email,
            testData.admin.password)

        const couponpage = new CoupenPage1(page);
        await couponpage.createCoupon(randomCoupen,
            testData.CoupenData.Description,
            testData.CoupenData.amount,
            testData.CoupenData.StartDate,
            testData.CoupenData.EndDate,
            testData.CoupenData.minpurchaseamount,
            testData.CoupenData.minpurchaseqty);

    })

    test("New Product Creation Page", async ({ page, AdminLogin }) => {
        await AdminLogin.navigate(ENV.adminURL);
        await AdminLogin.loginAsAdmin(testData.admin.email,
        testData.admin.password)
        const productPage = new AdminProductPage(page);
        await productPage.openNewProductForm();
        await productPage.fillProductDetails(testData.ProductData.Name,
            testData.ProductData.SKU,
            testData.ProductData.Price,
            testData.ProductData.Weight,
            testData.ProductData.URLkey,
            testData.ProductData.metaTitle,
            testData.ProductData.metaKeywords,
            testData.ProductData.metaDescription,

        );
        await productPage.uploadImage(testData.ProductData.filePath);
        await productPage.validateAttributesVisible();
        await productPage.selectAttributes(testData.ProductData.colorselection,
            testData.ProductData.sizeselection);
        await productPage.handleDialogOnSave();
        await productPage.saveProduct();

    })
});