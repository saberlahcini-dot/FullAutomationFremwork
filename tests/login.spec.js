import { test, expect } from "@playwright/test";
import { LoginTaskProcess } from "../Tasks/LoginTask.js";

test("login Test", async ({ page }) => {

    const login = new LoginTaskProcess(page ,  "student", "Password123");
    await login.handelTest();

    const expectThisTest  =  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    console.log("expectThisTest" + expectThisTest); 

});