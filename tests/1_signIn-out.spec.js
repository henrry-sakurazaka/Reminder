const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
  browserName: 'chromium',
  channel: 'chrome' // PlaywrightでChromeを使用するように指定
});

  test('ログインテスト', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.goto(`http://localhost:3000/SignIn`);  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/Example`);
    await page.click('span.back');
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/UserAuth`)

    await page.click('span#SO'); 
    const messageSelector = 'div.sign-out2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    
  });
  
  


