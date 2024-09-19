const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.setTimeout(120000);

test('サインアップ機能のテスト', async ({ page }) => {
    await page.goto('https://reminder3-65e84.web.app/SignUp'); 

    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#name', 'Crala')
    await page.fill('#email', email); 
    await page.fill('#password', password); 

    await page.click('li.terms')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Terms')

    await page.click('li.terms2')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Terms2')

    await page.click('li.policy')
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/PrivacyPolicy')

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example'); 
    
});

