import { defineConfig } from '@playwright/test';
import {config as dotenvConfig } from 'dotenv';
import path from 'path';
if (process.env.CI !== 'true') {
  dotenvConfig(); 
}

export default defineConfig({
  // testDir: './tests',  // テストファイルのディレクトリ
  timeout: 30000,  // テストのタイムアウト時間
  retries: 1,  // テストのリトライ回数
  // reporter: [],
  reporter: [
    ['json', { outputFile: 'playwright-report/output.json' }],
    ['html', { outputFolder: path.resolve(__dirname, 'playwright-test-results')}],
    ['list'],
    ['html', { outputFolder: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/test-results' }],
  ],
  // //動画キャプチャを無効にする
  // webServer: {
  //   command: 'npm run dev',
  //   url: process.env. VITE_REACT_APP_API_URL || 'https://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  // reporter: 'list',
  use: {
    headless: true,  // ヘッドレスモードで実行（表示なし）
    viewport: { width: 1280, height: 720 },  // ビューポートの設定
    actionTimeout: 10000,  // アクションごとのタイムアウト
    baseURL: process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000',
    ignoreHTTPSErrors: true,  // HTTPSエラーを無視
    // trace: 'on-first-retry',
    // video: 'off',  
    video: 'retain-on-failure',  // テスト失敗時にビデオ記録を保持
    // screenshot: 'off',
    //証明書の設定を追加
    // outputDir: './custom-test-results', // 保存先を変更
    launchOptions: {
      args: [
        '--ignore-certificate-errors', // 証明書エラーを無視
      ],
    },
  },
});




