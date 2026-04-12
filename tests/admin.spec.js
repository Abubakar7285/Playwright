const {test,expect}=require('../fixtures/fixture');

test('open admin',async({adminPage})=>{
    await adminPage.searchUser();
});