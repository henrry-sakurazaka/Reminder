const { test, expect } = require('@playwright/test');

require('dotenv').config();

// // 環境がローカルであれば.envを読み込む
// if (process.env.CI !== 'true') {
//   require('dotenv').config();
// }

  test('サインアップ機能のテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000';
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 
    
    await page.waitForTimeout(5000); 
    await page.goto(`${baseUrl}/SignUp`); 

    await page.click('li.terms')
    await expect(page).toHaveURL(`${baseUrl}/Terms`);
    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.locator('li.terms2').waitFor({timeout: 100000});
    await page.click('li.terms2')
    await expect(page).toHaveURL(`${baseUrl}/Terms2`)
    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.fill('#name', 'Clara')
    await page.fill('#email', email); 
    await page.fill('#password', password); 

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL(`${baseUrl}/Example`); 
    
});






