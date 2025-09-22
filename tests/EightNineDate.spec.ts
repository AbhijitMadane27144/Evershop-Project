import { test, expect ,} from '@playwright/test';
import { ENV } from "./utils/env";
import testData from "./data/testData.json";
import { getLocator, applocators } from "./locators/subscription.locator";




test("Looping Practice ", async ({ page }) => {

console.log("Hello guys")

const username="Abhijit";
let age=10;
let age1=12.3
let age2=age + age1;

console.log(age2, username);




})