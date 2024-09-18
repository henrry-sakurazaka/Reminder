const { test, expect } = require('@playwright/test');

test('タスクをフォームを入力して出力を確認', async ({ page }) => {

    await page.goto('https://reminder3-65e84.web.app/Edit');

    await page.fill('input#task','test');
    await expect(page.locator('span')).toHaveText('test');

    await page.click('button.add');
    await expect(page.locator('span')).toHaveText('test');

    await page.click('button.compBtn');
    await expect(page.locator('button.compBtn')).toHaveText('Completed');
    await expect(page.locator('button.compBtn')).toHaveCSS('color', 'rgb(8, 232, 158)');
    await expect(page.locator('span')).toHaveCSS('text-decoration', 'line-through');
    await expect(page.locator('span')).toHaveCSS('color', 'rgb(8, 232, 158)');

    await page.click('span.circleI');
    await expect(page.locator('div')).toBeVisible('div .modal')   
});