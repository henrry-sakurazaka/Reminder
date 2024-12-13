import { defineConfig } from '@playwright/test';
import {config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url'; 
import path from 'path';

if (process.env.CI !== 'true') {
  dotenvConfig(); 
}

// ESモジュールスコープでの __dirname 再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './tests',  // テストファイルのディレクトリ
  outputDir: path.resolve(process.cwd(), 'test-results'), // 書き込み可能なディレクトリを指定
  timeout: 30000,  // テストのタイムアウト時間
  retries: 1,  // テストのリトライ回数
  // reporter: [],
  reporter: [
    ['json', { outputFile: 'playwright-report/output.json' }],
    ['html', { outputFolder: path.resolve(__dirname, 'playwright-test-results')}],
    ['list'],
    ['html', { outputFolder: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/test-results' }],
  ],
 
  use: {
    headless: true,  // ヘッドレスモードで実行（表示なし）
    viewport: { width: 1280, height: 720 },  // ビューポートの設定
    actionTimeout: 10000,  // アクションごとのタイムアウト
    baseURL: process.env.VITE_REACT_APP_API_URL || 'https://localhost:3000',
    ignoreHTTPSErrors: true,  // HTTPSエラーを無視
    video: 'retain-on-failure',  // テスト失敗時にビデオ記録を保持
    //証明書の設定を追加
    // outputDir: './custom-test-results', // 保存先を変更
    launchOptions: {
      args: [
        '--ignore-certificate-errors', // 証明書エラーを無視
      ],
    },
  },
});




