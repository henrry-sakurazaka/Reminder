import 'dotenv/config';

import { test, expect } from '@playwright/test';

// // 環境がローカルであれば.envを読み込む
// if (process.env.CI !== 'true') {
//   require('dotenv').config();
// }

  test('サインアップ機能のテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000';
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 
    
    await page.waitForTimeout(5000); 
    await page.goto(`${baseUrl}/SignUp`, {
      waitUntil: 'load',
      timeout: 60000,
      ignoreHTTPSErrors: true, // これで証明書エラーを無視します
    });
    await page.waitForSelector('li.terms', { timeout: 15000 });
    await page.click('li.terms')
    await expect(page).toHaveURL(`${baseUrl}/Terms`);
    await page.waitForEvent({ timeout: 20000 }); 
    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.waitForSelector('li.terms2', { timeout: 15000 });
    await page.locator('li.terms2').waitFor({timeout: 100000});
    await page.click('li.terms2')
    await expect(page).toHaveURL(`${baseUrl}/Terms2`)
    await page.waitForEvent({ timeout: 20000 });
    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);
    await page.waitForEvent({ timeout: 20000 });
    await page.waitForSelector('#name', { timeout: 15000});
    await page.fill('#name', 'Clara')
    await page.waitForSelector('#email', { timeout: 15000});
    await page.fill('#email', email); 
    await page.waitForSelector('#password', { timeout: 15000});
    await page.fill('#password', password); 

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL(`${baseUrl}/Example`); 
    
});






