import 'dotenv/config';
import { test, expect } from '@playwright/test';

if (process.env.CI !== 'true') {
}

// require('dotenv').config();
// test.use({
//     browserName: 'chromium',
//     channel: 'chrome' // PlaywrightでChromeを使用するように指定
//   });

test('タスクをフォームに入力して出力を確認', async ({ page }) => {
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
  };
  await page.waitForTimeout(7000);
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
  await page.waitForSelector('#password', { timeout: 30000 });
  await page.fill('#password', password, { timeout: 30000 });
  await page.click('button.form-button[type="submit"]');

  await expect(page).toHaveURL(`${baseUrl}/Example`);

  const lastCircle = page.locator('span.circleI').last({ timeout: 30000 });
  await lastCircle.click();

  await expect(page.locator('div.modal')).toBeVisible();

  // const color = await page.locator('h1.big-text').evaluate(el => getComputedStyle(el).color);
  // // 取得した色と期待する値を比較する (許容誤差を設定)
  // const expectedColor = 'rgba(40, 147, 247)';

  // startsWith()メソッドを使って、文字列が指定された部分文字列で始まっているかを確認しています。
  //evaluateメソッドは、指定した要素に対してJavaScriptコードを実行するために使用されます。
  // elはpage.locator('h1.big-text')で取得した要素を指します。
  // getComputedStyle(el)は、指定した要素のスタイル（特にCSSによる最終的なスタイル）を取得するためのブラウザの組み込み関数です。
  // .colorはそのスタイルのうち、文字色（colorプロパティ）を取得します。

  //   if (!color.startsWith(expectedColor)) {
  //     throw new Error(`Color does not match. Expected something starting with ${expectedColor}, but got ${color}`);
  // }
  await expect(page.locator('h1.big-text')).toHaveCSS(
    'color',
    'rgba(40, 147, 247, 0.773)'
  );

  await page.waitForSelector('label.switch', { state: 'visible' });
  await page.click('label.switch');
  await expect(page.locator('div.date-picker-container')).toBeVisible();

  await page.waitForSelector('label.switch2', { state: 'visible' });
  await page.click('label.switch2');
  await expect(page.locator('div.time-picker-container')).toBeVisible();

  await page.fill('input.MyTimePicker', '21:30');

  await page.click('button.set-btn');
  await expect(page.locator('div.modal')).toHaveCSS(
    'background-color',
    'rgba(0, 0, 0, 0)'
  );
  await expect(page.locator('div.time-picker-container')).toHaveCSS(
    'border',
    '1px solid rgb(8, 232, 158)'
  );
  await expect(page.locator('button.set-btn')).toHaveCSS(
    'color',
    'rgb(8, 232, 158)'
  );
  await expect(page.locator('button.set-btn')).toHaveText('DONE');
  await expect(page.locator('div.successful')).toHaveText('Completed Setting');
});
