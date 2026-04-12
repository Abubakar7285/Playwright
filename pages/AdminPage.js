const { expect } = require('@playwright/test');

class AdminPage {
    constructor(page) {
        this.page = page;
        this.menu = page.locator('a[href *= "admin"]');
        this.title = page.locator('h6:has-text("Admin")');
    }
    async open() {
        await this.menu.click();
    }
    async searchUser() {
        await console.log("admin page ....")
    }
}
module.exports = { AdminPage };