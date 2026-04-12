const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const data = require('../testData.json');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(data.username, data.password);
        await use(loginPage);
    }
});
exports.expect = base.expect;