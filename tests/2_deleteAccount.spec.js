const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });


  test('アカウント削除のテスト', async ({ page }) => {

    await page.route('**/deleteAccount', (route) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({ success: true }),
        });
    });
    await page.goto('https://reminder3-65e84.web.app/UserAuth');

    await page.click('span#DA'); 
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/DeleteAccount');
    await expect(page.locator('h2')).toHaveText('アカウント削除中...');

    // アカウント削除後、UserAuthページにリダイレクトされることを確認
    await expect(page.locator('.message')).toHaveText('ユーザーアカウントが削除されました');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth').waitFor({timeout: 10000});

    await page.click('span#DA');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/DeleteAccount');
    await expect(page.locator('.message')).toHaveText('サインインしているユーザーがいません');
});




