import { defineConfig } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',  // テストファイルのディレクトリ
  timeout: 30000,  // テストのタイムアウト時間
  retries: 1,  // テストのリトライ回数
  use: {
    headless: true,  // ヘッドレスモードで実行（表示なし）
    viewport: { width: 1280, height: 720 },  // ビューポートの設定
    actionTimeout: 10000,  // アクションごとのタイムアウト
    ignoreHTTPSErrors: true,  // HTTPSエラーを無視
    video: 'retain-on-failure',  // テスト失敗時にビデオ記録を保持
  },
});

