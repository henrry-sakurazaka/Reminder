const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });

  test('タスクをフォームを入力して出力を確認', async ({ page }) => {
    await page.waitForTimeout(5000); 
    await page.goto(`http://localhost:3000/SignIn`);  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 
   

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL(`http://localhost:3000/Example`);

    
    const lastCircle = page.locator('span.circleI').last();
    await lastCircle.waitFor({timeout: 40000});
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
    await expect(page.locator('h1.big-text')).toHaveCSS('color', "rgba(40, 147, 247, 0.773)");

    await page.click('label.switch');
    await expect(page.locator('div.date-picker-container')).toBeVisible();

    await page.click('label.switch2');
    await expect(page.locator('div.time-picker-container')).toBeVisible();

    await page.fill('input.MyTimePicker', '21:30');

    await page.click('button.set-btn');
    await expect(page.locator('div.modal')).toHaveCSS('background-color', "rgba(0, 0, 0, 0)");
    await expect(page.locator('div.time-picker-container')).toHaveCSS('border', '1px solid rgb(8, 232, 158)');
    await expect(page.locator('button.set-btn')).toHaveCSS('color', 'rgb(8, 232, 158)');
    await expect(page.locator('button.set-btn')).toHaveText('DONE');
    await expect(page.locator('div.successful')).toHaveText('Completed Setting');  
});




