import React from 'react';
import { createRoot } from 'react-dom/client';
// import './firebaseInit.js'; // Firebase初期化のインポート
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // root DOM要素の取得

if (typeof window !== 'undefined') {
  console.log('🔥 クライアントで実行中');
  console.log(
    '🔑 Firebase config:',
    import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY
  );
} else {
  console.log('❄️ サーバーサイドで実行中');
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// パフォーマンス測定の呼び出し
reportWebVitals();
