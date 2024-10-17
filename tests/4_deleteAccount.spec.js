const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });


  test('アカウント削除のテスト', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.route('**/deleteAccount', (route) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({ success: true }),
        });
    });
    
    await page.goto(`${process.env.REACT_APP_API_URL}/SignIn`);  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/Example`);
    await page.click('span.back');
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/UserAuth`)

    await page.click('span#DA'); 
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/DeleteAccount`);
    await expect(page.locator('h2')).toHaveText('アカウント削除中...');

    // アカウント削除後、UserAuthページにリダイレクトされることを確認
    await expect(page.locator('.message')).toHaveText('ユーザーアカウントが削除されました');
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/UserAuth`);

});




