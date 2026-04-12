const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole("button", { name: 'Login' });
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
    }
    async goto() {
        await this.page.goto('/');
    }
    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.dashboardHeader).toBeVisible();
    }
}
module.exports = { LoginPage };