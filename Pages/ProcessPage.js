
import { portalProcess } from "../Constants/Urls.js";
import { expect } from "@playwright/test";
import selector from "../Constants/selectors.js";

class ProcessPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.processTitle = this.page.locator(selector.processHeadr);
    }

    // Navigate to Process page
    async navigateToProcessPage() {
        await this.page.goto(portalProcess);
    }

    // Verify Process page is displayed
    async verifyProcessPage() {
        await expect(this.processTitle).toBeVisible();
    }

    // Launch Process
    async launchProcess(data) {

        const {
            entityName,
            listName,
            sessionName,
            scriptName,
            profilesNams
        } = data;

        // Select entity, list, session and script
        this.entityName = this.page.locator(selector.entitySelect(entityName));

        this.listName = this.page.locator( selector.listSelect(listName));

        this.sessionName = this.page.locator(selector.sessionSelect(sessionName));

        this.scriptName = this.page.locator(selector.scriptSelect(scriptName));

        await this.entityName.click();
        await this.listName.click();
        await this.sessionName.click();
        await this.scriptName.click();

        // Insert profiles
        await this.page.locator(selector.toInsertProfiels).click();

        for (const profileName of profilesNams) {
            await this.page.locator(selector.insertProfiels).fill(profileName);
        }

        // Launch process
        await this.page.locator(selector.lunch).click();
    }

    // Verify process exists
    async verifyProcessExists(name) {
        await expect(this.page.getByText(name)).toBeVisible();
    }

    // Cancel process
    async cancelProcess() {
        // await this.page.locator(selector.cancelButton).click();
    }
}

export default ProcessPage;


















