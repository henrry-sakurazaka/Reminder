import 'dotenv/config';
import { test, expect } from '@playwright/test';
 
if (process.env.CI !== 'true') {
  dotenv.config();
}

// test.use({
//   browserName: 'chromium',
//   channel: 'chrome' // PlaywrightでChromeを使用するように指定
// });

 

  test('ログインテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL || "http://app2:3000";
    const email = process.env.VITE_REACT_APP_TEST_EMAIL
    const password = process.env.VITE_REACT_APP_TEST_PASSWORD; 

    async ({ browser }) => {
      const context = await browser.newContext(); // 新しいコンテキストを生成
      const page = await context.newPage();
      await page.goto(`${baseUrl}/UserAuth`);
      await context.clearCookies();
      await context.clearPermissions();
      await page.evaluate(() => {
          localStorage.clear();
          sessionStorage.clear();     
      });
    }
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
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');

    await page.waitForTimeout(5000); 

    await expect(page).toHaveURL(`${baseUrl}/Example`);
    await page.click('span.back');

    await page.waitForTimeout(5000); 

    await expect(page).toHaveURL(`${baseUrl}/UserAuth`)

    await page.click('span#SO'); 
    const messageSelector = 'div.sign-out2';
    await expect(page.locator(messageSelector)).toHaveText('Signed Out successfully'); //メッセージが表示されたか確認
    
  });
  
  


