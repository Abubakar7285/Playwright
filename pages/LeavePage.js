const { expect } = require('@playwright/test');

class LeavePage {
    constructor(page) {
        this.page = page;
        this.menu = page.locator('a[href *= "leave"]');
        this.applylink = page.getByRole('link', { name: 'Apply' });
        this.success = page.locator('h6:has-text("Apply Leave")');
    }
    async open() {
        await this.menu.click();
    }
    async applyLeave() {
        await this.applylink.click();
    }
    async verifyLeaveApplied() {
        await expect(this.success).toBeVisible();
    }
}
module.exports = { LeavePage };