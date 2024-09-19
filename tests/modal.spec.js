const { test, expect } = require('@playwright/test');

test('タスクをフォームを入力して出力を確認', async ({ page }) => {

    await page.goto('https://reminder3-65e84.web.app/Example');

    await page.click('input.switch-date');
    await expect(page.locator('div.date-picker-container')).toBeVisible('.date-picker-container');

    await page.click('input.switch-time');
    await expect(page.locator('div.time-picker-container')).toHaveText('.time-picker-container');

    await page.click('button.set-btn');
    await expect(page.locator('div.modal')).toHaveCSS('background-color', 'transparent');
    await expect(page.locator('div.message-container')).toHaveCSS('background-color', 'rgb(8, 232, 158)');
    await expect(page.locator('btn.set-btn')).toHaveCSS('background-color', 'rgb(8, 232, 158)');
    await expect(page.locator('btn.set-btn')).toHaveText('DONE');
    await expect(page.locator('div.successful')).toHaveText('Completed Setting');  
});