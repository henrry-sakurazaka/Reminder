
const { test, expect } = require('@playwright/test');

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });

  test.setTimeout(1200000);

  test('タスクをフォームを入力して出力を確認', async ({ page }) => {

      await page.goto('https://reminder3-65e84.web.app/SignIn');  
        
      const email = process.env.REACT_APP_TEST_EMAIL
      const password = process.env.REACT_APP_TEST_PASSWORD; 

      await page.fill('#email', email); 
      await page.fill('#password', password); 
      await page.click('button.form-button[type="submit"]');
    
     await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example');
        
        
      await page.waitForTimeout(40000);
      await page.fill('input#task','test');
      await page.click('button.add');
      const lastSpan = page.locator('span').last(); 
      await lastSpan.waitFor({timeout: 40000});  
      await page.waitForSelector(lastSpan, {timeout: 40000});
      await expect(lastSpan).toHaveText('test');
      const lastBtn = page.locator('button.compBtn').last();
      await lastBtn.waitFor({timeout: 40000});
      await lastBtn.click();
      await expect(page.locator('h1.big-text')).toHaveCSS('color', 'rgba(40, 147, 247, 0.772)');
      await expect(page.locator(lastBtn)).toHaveText('Completed');
      await expect(page.locator(lastBtn)).toHaveCSS('color', 'rgb(8, 232, 158)');
      await expect(page.locator(lastSpan)).toHaveCSS('text-decoration', 'line-through');
      await expect(page.locator(lastSpan)).toHaveCSS('color', 'rgb(8, 232, 158)');

  });



