# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM.spec.js >> PIM Module >> Add Employee
- Location: tests\PIM.spec.js:6:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /viewPersonalDetails/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Demo Source
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e147]:
      - heading "Add Employee" [level=6] [ref=e148]
      - separator [ref=e149]
      - generic [ref=e150]:
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e157]:
              - button "Choose File"
              - generic [ref=e158]:
                - img "profile picture" [ref=e160]
                - button "" [ref=e161] [cursor=pointer]:
                  - generic [ref=e162]: 
            - paragraph [ref=e163]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=e164]:
            - generic [ref=e165]:
              - generic [ref=e168]:
                - generic [ref=e170]: Employee Full Name*
                - generic [ref=e171]:
                  - textbox "First Name" [ref=e174]: John
                  - textbox "Middle Name" [ref=e177]
                  - textbox "Last Name" [ref=e180]: Doe
              - generic [ref=e183]:
                - generic [ref=e185]: Employee Id
                - textbox [ref=e187]: "0609"
            - separator [ref=e188]
            - generic [ref=e189]:
              - paragraph [ref=e190]: Create Login Details
              - checkbox [ref=e193]
        - separator [ref=e195]
        - generic [ref=e196]:
          - paragraph [ref=e197]: "* Required"
          - button "Cancel" [ref=e198] [cursor=pointer]
          - button "Save" [active] [ref=e199] [cursor=pointer]
    - generic [ref=e200]:
      - paragraph [ref=e201]: OrangeHRM OS 5.9
      - paragraph [ref=e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e203] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class PIMPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.menu = page.getByRole('link', { name: 'PIM' });
  7  |         this.addButton=page.getByRole('button',{name:"Add"});
  8  |         this.firstName = page.locator('input[placeholder="First Name"]');
  9  |         this.lastName = page.locator('input[placeholder="Last Name"]');
  10 |         this.saveBtn = page.locator('button[type="submit"]');
  11 |         this.empDetails = page.locator('h6:has-text("Personal Details")');
  12 | 
  13 |         this.inputField = page.locator('input[placeholder *= "Type for hints"]').first();
  14 |         this.searchBtn = page.getByRole('button', { name: 'submit' });
  15 |         this.resultTable = page.locator('.oxd-table-body');
  16 | 
  17 |     }
  18 |     async open() {
  19 |         await this.menu.click();
  20 |     }
  21 |     async addEmployee(firstName, lastName) {
  22 |         await this.addButton.click();
  23 |         await this.firstName.fill(firstName);
  24 |         await this.lastName.fill(lastName);
  25 |         await this.saveBtn.click();
  26 |     }
  27 |     async verifyEmployeeAdded() {
> 28 |         await expect(this.page).toHaveURL(/viewPersonalDetails/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  29 |         await expect(this.empDetails).toBeVisible()
  30 |     }
  31 |     async searchEmployee(searchName) {
  32 |         await this.inputField.fill(searchName);
  33 |     }
  34 |     async verifySearchResult() {
  35 |         await expect(this.resultTable).toBeVisible();
  36 |     }
  37 | }
  38 | module.exports = { PIMPage };
```