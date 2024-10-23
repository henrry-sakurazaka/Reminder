const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });

  test('サインアップ機能のテスト', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.goto(`http://localhost:3000/SignUp`); 

    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 
    
    await page.click('li.terms')
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/Terms`);
    await page.click('nav');
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/SignUp`);

    await page.locator('li.terms2').waitFor({timeout: 100000});
    await page.click('li.terms2')
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/Terms2`)
    await page.click('nav');
    await expect(page).toHaveURL(`${process.env.REACT_APP_API_URL}/SignUp`);

    await page.fill('#name', 'Clara')
    await page.fill('#email', email); 
    await page.fill('#password', password); 

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL(`http://localhost:3000/Example`); 
    
});






