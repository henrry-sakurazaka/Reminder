
// tests/testEntry.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Firebaseの設定
const firebaseConfig = {
  // your firebase config here
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Firebaseの各機能を取得
const auth = getAuth(app);
const db = getDatabase(app);

// // Firebase関連の初期化を行うファイルをインポート
// import '../src/firebaseInit';

// // テストを行うファイルをインポート
// import '../src/components/FirstAuth.test';
