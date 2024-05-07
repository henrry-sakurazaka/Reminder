// tests/testEntry.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Firebaseの設定
const firebaseConfig = {
  // your firebase config here
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Firebaseの各機能を取得
const auth = getAuth(app);
const db = getDatabase(app);

// Firebase関連の初期化を行うファイルをインポート
import '././firebaseInit';

// テストを行うファイルをインポート
import '././src/components/FirstAuth.test';
