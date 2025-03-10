import { defineConfig, devices } from '@playwright/test';
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

if (process.env.CI !== 'true') {
  dotenvConfig();
}

// ESモジュールスコープでの __dirname 再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_URL = process.env.VITE_REACT_APP_API_URL || 'http://localhost:3000';

export default defineConfig({
  webServer: {
    command: 'docker-compose up -d app2',
    url: BASE_URL,
    timeout: 120000,
    reuseExistingServer: true,
    // reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true, // 証明書エラーを無視
  },

  testDir: './tests', // テストファイルのディレクトリ
  outputDir: path.resolve(process.cwd(), 'test-results'), // 書き込み可能なディレクトリを指定
  timeout: 30000, // テストのタイムアウト時間
  retries: process.env.CI ? 2 : 1,
  // reporter: [],
  reporter: [
    ['json', { outputFile: 'playwright-report/output.json' }],
    [
      'html',
      { outputFolder: path.resolve(__dirname, 'playwright-test-results') },
    ],
    ['list'],
    ['html', { outputFolder: 'playwright-test-results', open: 'never' }],
    // ['html', { outputFolder: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/test-results' }],
  ],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 }, // ビューポートの設定
    actionTimeout: 10000, // アクションごとのタイムアウト
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true, // HTTPSエラーを無視
    video: 'retain-on-failure', // テスト失敗時にビデオ記録を保持
    //証明書の設定を追加
    // outputDir: './custom-test-results', // 保存先を変更
    launchOptions: {
      args: [
        '--ignore-certificate-errors', // 証明書エラーを無視
      ],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
