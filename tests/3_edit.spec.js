
const { test, expect } = require('@playwright/test');

test.setTimeout(10000);

test('タスクをフォームを入力して出力を確認', async ({ page }) => {
   
    await page.goto('https://reminder3-65e84.web.app/Example');
    await page.waitForTimeout(10000);
    await page.fill('input#task','test');
    const lastSpan = page.locator('span').last(); 
    await lastSpan.waitFor({timeout: 20000});
    await page.click('button.add');
    await page.waitForSelector(lastSpan, {timeout: 20000});
    await expect(lastSpan).toHaveText('test');
    const lastBtn = page.locator('button.compBtn').last();
    await lastBtn.waitFor({timeout: 20000});
    await lastBtn.click();
    await expect(page.locator(lastBtn)).toHaveText('Completed');
    await expect(page.locator(lastBtn)).toHaveCSS('color', 'rgb(8, 232, 158)');
    await expect(page.locator(lastSpan)).toHaveCSS('text-decoration', 'line-through');
    await expect(page.locator(lastSpan)).toHaveCSS('color', 'rgb(8, 232, 158)');

    // const lastCircle = page.locator('span.circleI').last();
    await page.click('span.circleI');
    await expect(page.locator('div')).toBeVisible('div .modal')   
});