const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PIMPage } = require('../pages/PIMPage');
const { LeavePage } = require('../pages/LeavePage');
const { AdminPage}=require('../pages/AdminPage');

const userData=require('../utilty/users.json');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login(userData.username, userData.password);
        await use(page);

        await page.context().clearCookies();
    },
   
     pimPage:async({loginPage},use)=>{
        const pim=new PIMPage(loginPage);
        await pim.open();
        await use(pim);
     },

     leavePage:async({loginPage},use)=>{
        const leave=new LeavePage(loginPage);
        await leave.open();
        await use(leave);
     },

     adminPage:async({loginPage},use)=>{
        const admin=new AdminPage(loginPage);
        await admin.open();
        await use(admin);
     }
});
exports.expect = base.expect;