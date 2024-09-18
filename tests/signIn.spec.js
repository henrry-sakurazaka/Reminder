test('ログインテスト', async ({ page }) => {
    await page.goto('https://reminder3-65e84.web.app/SignIn');  
    
    const email = process.env.REACT_APP_TEST_EMAIL
    const password = process.env.REACT_APP_TEST_PASSWORD; 

    await page.fill('#email', email); 
    await page.fill('#password', password); 
    await page.click('button.form-button[type="submit"]');
  
    await expect(page).toHaveURL('https://reminder3-65e84.web.app/Example');
  });
  