import 'dotenv/config';
import { test, expect } from '@playwright/test';

if (process.env.CI !== 'true') {

}
  
  test('サインアップ機能のテスト', async ({ page }) => {
    const baseUrl = process.env.VITE_REACT_APP_API_URL;
    const email = process.env.VITE_REACT_APP_TEST2_EMAIL;
    const password = process.env.VITE_REACT_APP_TEST2_PASSWORD; 

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
    await page.waitForTimeout(7000); 
    await page.goto(`${baseUrl}/UserAuth`, {
      waitUntil: 'networkidle',
      timeout: 60000,
      ignoreHTTPSErrors: true, // これで証明書エラーを無視します
    });
    await page.click('span#SU', { timeout: 30000 });
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.waitForTimeout(7000); // 必要に応じて時間を調整

    await page.waitForSelector('li.terms', { timeout: 30000 });
    await page.click('li.terms')

    await page.waitForTimeout(5000); // 必要に応じて時間を調整

    await expect(page).toHaveURL(`${baseUrl}/Terms`);

    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.waitForSelector('li.terms2', { timeout: 30000 });
    await page.click('li.terms2') 
    await expect(page).toHaveURL(`${baseUrl}/Terms2`);

    await page.click('nav');
    await expect(page).toHaveURL(`${baseUrl}/SignUp`);

    await page.waitForSelector('#name', { timeout: 30000 });
    await page.fill('#name', 'Clara')

    await page.waitForSelector('#email', { timeout: 30000 });
    await page.fill('#email', email); 

    await page.waitForSelector('#password', { timeout: 30000 });
    await page.fill('#password', password); 

    //利用規約に同意した場合の動作のテスト
    await page.click('input.agree-check');
    await expect(page.locator('span.important')).toHaveText('Agreed');
 
    await page.click('button.form-button'); 
    await expect(page).toHaveURL(`${baseUrl}/Example`, {timeout: 30000}); 
    
});






