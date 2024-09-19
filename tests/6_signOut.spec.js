const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
});

  test('ログアウトテスト', async ({page}) => {
    await page.goto('https://reminder3-65e84.web.app/UserAuth');

    await page.locator('span#SO.select-auth.sign-out').waitFor({timeout: 40000});
    await page.click('span#SO');

    const messageSelector = '.sign-out2 h2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認


});




