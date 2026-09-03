# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM.spec.js >> PIM Module >> Search Employee
- Location: tests\PIM.spec.js:11:3

# Error details

```
TypeError: LoginPage is not a constructor
```

# Test source

```ts
  1  | const base = require('@playwright/test');
  2  | const  LoginPage  = require('../pages/LoginPage');
  3  | const { PIMPage } = require('../pages/PIMPage');
  4  | const { LeavePage } = require('../pages/LeavePage');
  5  | const { AdminPage}=require('../pages/AdminPage');
  6  | 
  7  | const userData=require('../utilty/users.json');
  8  | 
  9  | exports.test = base.test.extend({
  10 | 
  11 |     loginPage: async ({ page }, use) => {
> 12 |         const login = new LoginPage(page);
     |                       ^ TypeError: LoginPage is not a constructor
  13 |         await login.goto();
  14 |         await login.login(userData.username, userData.password);
  15 |         await use(page);
  16 |         await page.context().clearCookies();
  17 |     },
  18 |    
  19 |      pimPage:async({loginPage},use)=>{
  20 |         const pim=new PIMPage(loginPage);
  21 |         await pim.open();
  22 |         await use(pim);
  23 |      },
  24 | 
  25 |      leavePage:async({loginPage},use)=>{
  26 |         const leave=new LeavePage(loginPage);
  27 |         await leave.open();
  28 |         await use(leave);
  29 |      },
  30 | 
  31 |      adminPage:async({loginPage},use)=>{
  32 |         const admin=new AdminPage(loginPage);
  33 |         await admin.open();
  34 |         await use(admin);
  35 |      }
  36 | });
  37 | exports.expect = base.expect;
```