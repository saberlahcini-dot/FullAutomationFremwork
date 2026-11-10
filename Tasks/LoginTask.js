
import { loginUrl } from "../Constants/Urls.js";
// import {  page }   from "../Core/core.js"

import selector  from "../Constants/selectors.js";

export class LoginTaskProcess {

    page;
    User ; 
    Name ; 
    Password ; 

    constructor(page  , user  , password ) {
        this.page = page;
        this.Name = user;
        this.Password = password ; 
    }


    async handelTest() {

    await this.page.goto(loginUrl);
    await  this.page.locator(selector.username).fill(this.Name);
    await  this.page.locator(selector.password).fill(this.Password);
    await this.page.locator(selector.submit).click(); 

    }
}