import 'dotenv/config';

import { test, expect } from '@playwright/test';

// // 環境がローカルであれば.envを読み込む
// if (process.env.CI !== 'true') {
//     require('dotenv').config();
//   }


  test('アカウント削除のテスト', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.route('**/deleteAccount', (route) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({ success: true }),
        });
    });
    const baseUrl = process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000';
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 

    await page.goto(`${baseUrl}/SignIn`, {
        waitUntil: 'load',
        timeout: 60000,
        ignoreHTTPSErrors: true, // これで証明書エラーを無視します
      }); 
    
    await page.waitForSelector('#email', { timeout: 30000 });
    await page.fill('#email', email, { timeout: 30000 }); 
    await page.waitForSelector('#password', { timeout: 30000 });
    await page.fill('#password', password, { timeout: 30000 }); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL(`${baseUrl}/Example`);
    await page.click('span.back');
    await expect(page).toHaveURL(`${baseUrl}/UserAuth`)

    await page.click('span#DA'); 
    await expect(page).toHaveURL(`${baseUrl}/DeleteAccount`);
    await expect(page.locator('h2')).toHaveText('アカウント削除中...');

    // アカウント削除後、UserAuthページにリダイレクトされることを確認
    await expect(page.locator('.message')).toHaveText('ユーザーアカウントが削除されました');
    await expect(page).toHaveURL(`${baseUrl}/UserAuth`);

});




