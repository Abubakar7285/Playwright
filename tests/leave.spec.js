const { test } = require('../fixtures/fixture');

test('Apply leave', async ({ leavePage }) => {
    await leavePage.applyLeave();
    await leavePage.verifyLeaveApplied();
})