const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
  browserName: 'chromium',
  channel: 'chrome' // PlaywrightでChromeを使用するように指定
});

  test('ログインテスト', async ({ page }) => {
    await page.goto('https://reminder3-65e84.web.app/SignIn');  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example');
    await page.click('span.back');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth')

    await page.click('span#SO'); 
    const messageSelector = 'div.sign-out2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    
  });
  
  


