import React from 'react';
// import { BrowserRouter } from 'react-router-dom'; // BrowserRouterをインポート
import { createRoot } from 'react-dom/client';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// Firebase関連の初期化を行うファイルをインポート
import './firebaseInit';
// import FirstAuth from '../src/components/FirstAuth';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'text-encoding';


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
//   authDomain: "reminder-b4527.firebaseapp.com",
//   databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reminder-b4527",
//   storageBucket: "reminder-b4527.appspot.com",
//   messagingSenderId: "968555995295",
//   appId: "1:968555995295:web:42d909b7393394b85502aa"
// };

// Firebaseの初期化
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const root = createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
