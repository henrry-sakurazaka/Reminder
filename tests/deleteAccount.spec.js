const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('アカウント削除のテスト', async ({ page }) => {
    await page.goto('https://reminder3-65e84.web.app/UserAuth'); 

    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('span.delete-account'); 

    await expect(page).toHaveURL('https://reminder3-65e84.web.app/DeleteAccount'); 
    await expect(page.locator('h2')).toHaveText('アカウント削除中...');

    // アカウント削除後、UserAuthページにリダイレクトされることを確認
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth'); 
    await expect(page.locator('.message')).toHaveText('ユーザーアカウントが削除されました');

    // 削除後、同じアカウントでログインを試み、エラーメッセージが表示されるか確認
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('span.sign-in');
    await expect(page.locator('.message')).toHaveText('サインインしているユーザーがいません');
});
