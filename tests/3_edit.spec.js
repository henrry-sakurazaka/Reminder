import 'dotenv/config';
import { test, expect } from '@playwright/test';

if (process.env.CI !== 'true') {
  dotenv.config();
}

// test.use({
//     browserName: 'chromium',
//     channel: 'chrome' // PlaywrightでChromeを使用するように指定
//   });

  test.setTimeout(1200000);

  test('タスクをフォームを入力して出力を確認', async ({ page }) => {
      const baseUrl = process.env.VITE_REACT_APP_API_URL || "http://localhost:3000";
      const email = process.env.VITE_REACT_APP_TEST_EMAIL
      const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 
      
      await page.waitForTimeout(5000);   
      await page.goto(`${baseUrl}/UserAuth`, {
        waitUntil: 'networkidle',
        timeout: 60000,
        ignoreHTTPSErrors: true, // これで証明書エラーを無視します
      }); 
      await page.click('span#SI', { timeout: 30000 });
      await page.waitForTimeout(5000); 
      await expect(page).toHaveURL(`${baseUrl}/SignIn`);
      await page.waitForTimeout(5000); 

      await page.waitForSelector('#email', { timeout: 30000 });
      await page.fill('#email', email, { timeout: 30000 }); 

      await page.waitForTimeout(5000); 

      await page.waitForSelector('#password', { timeout: 30000 });
      await page.fill('#password', password, { timeout: 30000 }); 
      
      await page.click('button.form-button[type="submit"]');
    
      await expect(page).toHaveURL(`${baseUrl}/Example`);
        
        
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

      const thirdCompBtn = page.locator('button.compBtn').nth(3);
      await thirdCompBtn.dblclick();
      await expect(thirdCompBtn).toHaveCount(0);

      const refresh = page.locator('button.reset2');
      await refresh.click();
      const content = page.locator('span.content');
      await expect(content).toHaveCount(0);

  });



