import { test as basetest } from "@playwright/test";
import {AdminPage} from "../Page/AdminLogin"
import {CoupenPage1} from "../Page/CoupenPage1"
import {AdminProductPage} from "../Page/CreateProductPage"


type myPOMFixture ={
AdminLogin:AdminPage
coupenpage:CoupenPage1
CreateProduct:AdminProductPage
}

export const test=basetest.extend<myPOMFixture>({
AdminLogin: async({page},use)=>{
const adminlogin=new AdminPage(page)
await use(adminlogin)
},

coupenpage: async({page},use)=>{
const coupenpage=new CoupenPage1(page)
await use(coupenpage)
},

CreateProduct: async({page},use)=>{
const createproduct=new AdminProductPage(page)
await use(createproduct)
},


})


