const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('ログアウトテスト', async ({page}) => {
    await page.goto('https://reminder3-65e84.web.app/SignIn');

    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password);
    
    await page.goto('https://reminder3-65e84.web.app/UserAuth')
    await page.click('li.sign-out');

    const messageSelector = '.sign-out2 h2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/UserAuth');

    });