const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://production-url.com', // 本番環境のURL
    headless: true,
    screenshot: 'on',
    video: 'on',
  },
});
