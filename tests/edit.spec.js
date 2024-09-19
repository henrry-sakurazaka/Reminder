
const { test, expect } = require('@playwright/test');

test.setTimeout(10000);

test('タスクをフォームを入力して出力を確認', async ({ page }) => {
   
    await page.goto('https://reminder3-65e84.web.app/Example');

    await page.fill('input#task','test');
    const lastSpan = page.locator('span').last(); 
    await page.click('button.add');
    await expect(lastSpan).toHaveText('test');
    const lastBtn = page.locator('button.compBtn').last();
    await page.click(lastBtn);
    await expect(page.locator(lastBtn)).toHaveText('Completed');
    await expect(page.locator(lastBtn)).toHaveCSS('color', 'rgb(8, 232, 158)');
    await expect(page.locator(lastSpan)).toHaveCSS('text-decoration', 'line-through');
    await expect(page.locator(lastSpan)).toHaveCSS('color', 'rgb(8, 232, 158)');

    const lastCircle = page.locator('span.circleI').last();
    await page.click(lastCircle);
    await expect(page.locator('div')).toBeVisible('div .modal')   
});