import { test } from '@playwright/test';
import   ProcessPage  from  '../Pages/ProcessPage';
import Login from '../Pages/LoginPage'; 

test.describe('Process Page Tests', () => {

    let processPage;
    let login ; 

    test.beforeEach(async ({ page }) => {
        processPage = new ProcessPage(page);
        login = new Login(page ); 
        await processPage.navigateToProcessPage();
        await login.loginProcess();

    });

    test('Verify Process page is displayed', async () => {

        await processPage.verifyProcessPage();

    });

    test('Create a new process', async () => {

    await processPage.launchProcess({
        entityName: "EMDS",
        listName: "CreationSeeds_test",
        sessionName: "admin_4",
        scriptName: "Connect",
        profilesNams: [1, 2, 3, 4]
    });

        await processPage.verifyProcessExists('Automation Process');

    });

});