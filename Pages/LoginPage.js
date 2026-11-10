import selector  from "../Constants/selectors";

import data from "../DataTest/loginPageData.js"

class Login {

    constructor(page){
        this.page = page; 
    }

    async loginProcess(){
        await this.page.locator(selector.username).fill(data.name); 
        await this.page.locator(selector.password).fill(data.password); 
        await this.page.locator(selector.submit).click();
    }
}

export default Login; 