const { test, expect } = require('@playwright/test');
require('dotenv').config();

// test.use({
//   browserName: 'chromium',
//   channel: 'chrome' // PlaywrightでChromeを使用するように指定
// });

  test('ログインテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 

    await page.waitForTimeout(5000); 
    await page.goto(`${baseUrl}/SignIn`);  
    
    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL(`${baseUrl}/Example`);
    await page.click('span.back');
    await expect(page).toHaveURL(`${baseUrl}/UserAuth`)

    await page.click('span#SO'); 
    const messageSelector = 'div.sign-out2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    
  });
  
  


