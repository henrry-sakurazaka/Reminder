import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { auth, loadController } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import './firebaseInit.js'; // Firebase初期化のインポート
import reportWebVitals from './reportWebVitals';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    await loadController();
  } else {
    console.log('No user is logged in');
  }
});

loadController().then(() => {
  const root = createRoot(document.getElementById('root')); // root DOM要素の取得

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// パフォーマンス測定の呼び出し
reportWebVitals();
