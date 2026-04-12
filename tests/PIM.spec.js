const {test}=require('../fixtures/fixture');
const data=require('../utilty/employees.json');

test.describe('PIM Module', () => {
  
  test('Add Employee', async ({ pimPage }) => {
    await pimPage.addEmployee(data.firstName,data.lastName);
    await pimPage.verifyEmployeeAdded();
  });

  test('Search Employee', async ({ pimPage }) => {
     await pimPage.searchEmployee(data.Name);
     await pimPage.verifySearchResult();
  });
});


