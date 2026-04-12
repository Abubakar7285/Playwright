const {test,expect}=require('../fixtures/fixture');

test('verify dashboard loads after login', async ({ loginPage }) => {
  await expect(loginPage.dashboardHeader).toHaveText('Dashboard');
});

test('navigate to PIM module', async ({ loginPage }) => {
  await loginPage.page.click('a[href*="pim"]');
  await expect(loginPage.page.locator('h6')).toHaveText('PIM');
});

