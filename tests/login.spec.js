const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../pages/LoginPage');
const data=require('../testData.json');

test('Login into OrangeHRM',async({page})=>{

    await page.pause();
    const login=new LoginPage(page);
    await login.goTo();
    await login.login(data.username,data.password);
})
