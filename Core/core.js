import { chromium } from "playwright";

let context;
let page;

export async function getPage() {

    if (!context) {

        context = await chromium.launchPersistentContext( 'C:/Users/user.lahcini/AppData/Local/Google/Chrome/User Data/Default',
            {
                channel: 'chrome',
                headless: false,
                args: ['--profile-directory=Default'], 
                baseURL : 'https://www.typescriptlang.org/fr/docs/handbook/typescript-in-5-minutes.html'
            }
        );

        page = context.pages()[0] || await context.newPage();

    }

    return page;
}

await  getPage(); 