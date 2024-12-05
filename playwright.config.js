import { defineConfig } from '@playwright/test';
import {config as dotenvConfig } from 'dotenv';

if (process.env.CI !== 'true') {
  require('dotenv').config();
}

// // サーバー起動を待機
// await waitOn({
//   resources: [process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000'],
//   timeout: 30000, // 最大30秒待機
//   strictSSL: false, // HTTPSエラーを無視
// });


export default defineConfig({
  testDir: './tests',  // テストファイルのディレクトリ
  timeout: 30000,  // テストのタイムアウト時間
  retries: 1,  // テストのリトライ回数
  reporter: [],
  // reporter: [
  //   ['json', { outputFile: 'playwright-report/output.json' }],
  //   ['html', { outputFolder: 'playwright-report', open: 'never' }],
  //   ['list'],
  //   ['html', { outputFolder: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/test-results' }],
  // ],
  // 動画キャプチャを無効にする
  use: {
    headless: true,  // ヘッドレスモードで実行（表示なし）
    viewport: { width: 1280, height: 720 },  // ビューポートの設定
    actionTimeout: 10000,  // アクションごとのタイムアウト
    baseURL: process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000',
    ignoreHTTPSErrors: true,  // HTTPSエラーを無視
    video: 'off',  
    // video: 'retain-on-failure',  // テスト失敗時にビデオ記録を保持
    screenshot: 'off',
    // 証明書の設定を追加
    launchOptions: {
      args: [
        '--ignore-certificate-errors', // 証明書エラーを無視
      ],
    },
  },
});




