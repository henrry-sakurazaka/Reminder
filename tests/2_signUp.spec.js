const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });

  test('サインアップ機能のテスト', async ({ page }) => {
    await page.goto('https://reminder3-65e84.web.app/SignUp'); 

    const email = process.env.REACT_APP_TEST2_EMAIL
    const password = process.env.REACT_APP_TEST2_PASSWORD; 
    
    await page.fill('#name', 'Niki')
    await page.fill('#email', email); 
    await page.fill('#password', password); 

    await page.click('li.terms')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Terms');
    await page.click('nav');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/SignUp');

    await page.locator('li.terms2').waitFor({timeout: 100000});
    await page.click('li.terms2')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Terms2')
    await page.click('nav');
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/SignUp');


    await page.click('li.policy')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/PrivacyPolicy')

    await page.goto('https://reminder3-65e84.web.app/SignUp');

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example').waitFor({timeout: 300000}); 
    
});






