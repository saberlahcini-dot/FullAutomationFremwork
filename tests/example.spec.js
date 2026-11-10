import { test, expect } from "@playwright/test";
import { getPage } from "../Core/core.js";

test('Check Process Portal', async () => {

    const page = await getPage();

    await page.goto('http://95.216.72.6:90/webautomat/process');

    await expect(page).toHaveURL(/webautomat\/process/);

});