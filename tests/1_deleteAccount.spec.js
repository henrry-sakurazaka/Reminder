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
    await page.goto('https://reminder3-65e84.web.app/SignIn'); 

    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email);
    await page.fill('#password', password);

    await page.click('button.form-button[type="submit"]');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example');

    await page.click('span.logout');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth');

    await page.locator('span#SO').waitFor({timeout: 40000});
    await page.click('span#SO'); 
    await expect(page.locator('h2')).toHaveText('アカウント削除中...');

    // アカウント削除後、UserAuthページにリダイレクトされることを確認
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth'); 
    await expect(page.locator('.message')).toHaveText('ユーザーアカウントが削除されました');

    await page.goto('https://reminder3-65e84.web.app/SignIn');

    // 削除後、同じアカウントでログインを試み、エラーメッセージが表示されるか確認
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('span#SI');
    await expect(page.locator('.message')).toHaveText('サインインしているユーザーがいません');
});




