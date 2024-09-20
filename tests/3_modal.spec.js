const { test, expect } = require('@playwright/test');

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });

  test('タスクをフォームを入力して出力を確認', async ({ page }) => {

    await page.goto('https://reminder3-65e84.web.app/SignIn');  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example');

    const lastCircle = page.locator('span.circleI').last();
    await lastCircle.waitFor({timeout: 40000});
    await lastCircle.click();

    await expect(page.locator('div.modal')).toBeVisible();
    await expect(page.locator('h1.big-text')).toHaveCSS('rgba(40, 147, 247, 0.772)');

    await page.click('label.switch');
    await expect(page.locator('div.date-picker-container')).toBeVisible();

    await page.click('label.switch2');
    await expect(page.locator('div.time-picker-container')).toBeVisible();

    await page.fill('imput.MyTimePicker', '21:30');

    await page.click('button.set-btn');
    await expect(page.locator('div.modal')).toHaveCSS('background-color', 'transparent');
    await expect(page.locator('div.message-container')).toHaveCSS('background-color', 'rgb(8, 232, 158)');
    await expect(page.locator('btn.set-btn')).toHaveCSS('background-color', 'rgb(8, 232, 158)');
    await expect(page.locator('btn.set-btn')).toHaveText('DONE');
    await expect(page.locator('div.successful')).toHaveText('Completed Setting');  
});




