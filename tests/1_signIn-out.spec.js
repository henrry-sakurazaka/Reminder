import 'dotenv/config';

import { test, expect } from '@playwright/test';
 
// test.use({
//   browserName: 'chromium',
//   channel: 'chrome' // PlaywrightでChromeを使用するように指定
// });

  test('ログインテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000';
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 
    
    await page.waitForTimeout(5000); 
    await page.goto(`${baseUrl}/UserAuth`, {
      waitUntil: 'networkidle',
      timeout: 60000,
      ignoreHTTPSErrors: true, // これで証明書エラーを無視します
    });
    await page.waitForTimeout(60000); 
    await page.click('span#SI');
    await page.waitForTimeout(5000); 
    await expect(page).toHaveURL(`${baseUrl}/SignIn`);

    await page.waitForTimeout(5000); 

    await page.waitForSelector('#email', { timeout: 30000 });
    await page.fill('#email', email, { timeout: 30000 }); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');

    await page.waitForTimeout(5000); 

    await expect(page).toHaveURL(`${baseUrl}/Example`);
    await page.click('span.back');

    await page.waitForTimeout(5000); 

    await expect(page).toHaveURL(`${baseUrl}/UserAuth`)

    await page.click('span#SO'); 
    const messageSelector = 'div.sign-out2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    
  });
  
  


