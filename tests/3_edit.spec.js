
const { test, expect } = require('@playwright/test');
require('dotenv').config();

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
      const lastSpan = page.locator('span.content').last(); 
      await lastSpan.waitFor({timeout: 40000});  
      await expect(lastSpan).toHaveText('test');
      const lastBtn = page.locator('button.compBtn').last();
      await lastBtn.waitFor({timeout: 40000});
      await lastBtn.click();
      
      await expect(lastBtn).toHaveText('Completed');
      await expect(lastBtn).toHaveCSS('color', 'rgb(8, 232, 158)');
      await expect(lastSpan).toHaveCSS('text-decoration', 'line-through solid rgb(8, 232, 158)');
      await expect(lastBtn).toHaveCSS('color', 'rgb(8, 232, 158)');

      const lastSpanBeforeDelete = page.locator('span').last();
      await lastSpanBeforeDelete.dblclick();
      await expect(lastSpanBeforeDelete).toHaveCount(0);

      const refresh = page.locator('button.reset2');
      await refresh.click();
      const content = page.locator('span.content');
      await expect(content).toHaveCount(0);

  });



