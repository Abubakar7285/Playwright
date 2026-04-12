const { expect } = require('@playwright/test');

class PIMPage {
    constructor(page) {
        this.page = page;
        this.menu = page.getByRole('link', { name: 'PIM' });
        this.addButton=page.getByRole('button',{name:"Add"});
        this.firstName = page.locator('input[placeholder="First Name"]');
        this.lastName = page.locator('input[placeholder="Last Name"]');
        this.saveBtn = page.locator('button[type="submit"]');
        this.empDetails = page.locator('h6:has-text("Personal Details")');

        this.inputField = page.locator('input[placeholder *= "Type for hints"]').first();
        this.searchBtn = page.getByRole('button', { name: 'submit' });
        this.resultTable = page.locator('.oxd-table-body');

    }
    async open() {
        await this.menu.click();
    }
    async addEmployee(firstName, lastName) {
        await this.addButton.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.saveBtn.click();
    }
    async verifyEmployeeAdded() {
        await expect(this.page).toHaveURL(/viewPersonalDetails/);
        await expect(this.empDetails).toBeVisible()
    }
    async searchEmployee(searchName) {
        await this.inputField.fill(searchName);
    }
    async verifySearchResult() {
        await expect(this.resultTable).toBeVisible();
    }
}
module.exports = { PIMPage };