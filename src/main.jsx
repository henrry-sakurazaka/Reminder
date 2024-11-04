import React from 'react';
import { createRoot } from 'react-dom/client';
import './firebaseInit'; // Firebase初期化のインポート
import App from './App'; // アプリケーションコンポーネントのインポート
import reportWebVitals from './reportWebVitals'; // パフォーマンス測定

const root = createRoot(document.getElementById('root')); // root DOM要素の取得
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// パフォーマンス測定の呼び出し
reportWebVitals();
