const selector  = {

    username : "input[name='login']", 
    password : "input[name='password']",
    submit : "#submit",
    processHeadr : "//a[contains(., 'WebAutomat')]",

    entitySelect : (value)=>{
        return `//li[@class="ms-elem-selectable ui-selectee"]//span[contains(text(), '${value}')]`
    }, 

    listSelect  : (value)=>{
        return `//li[@class="ms-elem-selectable"]//span[contains(text(), '${value}')]`
    }, 

    sessionSelect  : (value)=>{
        return `//li[@class="ms-elem-selectable"]//span[contains(text(), '${value}')]`
    }, 

    scriptSelect  : (value)=>{
        return `//span[contains(text(), '${value}')]`
    }, 

    toInsertProfiels : "//div[@class='popover-container pull-left']//a",
    insertProfiels : 'textarea[class="form-control spec-profiles"]',

    lunch : "#submit",


}

export default selector ; 