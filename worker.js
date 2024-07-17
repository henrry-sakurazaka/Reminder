'use strict';

// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";


// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // Realtime Databaseのインスタンスを取得
const firestore = getFirestore(app); // Firestoreのインスタンスを取得
const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();

// const messaging = getMessaging(firebaseApp);

const vapidKey = 'BIfCYrmbPNygypGPf3dCGj-xaRnKmk2LVz_nfqVSW6CVS1S5suozQmm9oPE4sIhrDbW6eCNzyIZPvRSOWKs1IQ8';

// トークンをサーバーに送信する関数
const sendTokenToServer = async (token) => {
  try {
    const response = await fetch('https://reminder-b4527.web.app/registerToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    if (response.ok) {
      console.log('トークンがサーバーに送信されました');
    } else {
      console.error('トークンの送信に失敗しました');
    }
  } catch (error) {
    console.error('トークンの送信中にエラーが発生しました:', error);
  }
};

// // サービスワーカーを登録し、トークンを取得する関数
// const registerServiceWorkerAndRequestToken = async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register('/worker.js', { type: 'module' });
//       console.log('Service Worker registration successful with scope: ', registration.scope);
//       const currentToken = await getToken(messaging, { serviceWorkerRegistration: registration, vapidKey });
//       if (currentToken) {
//         console.log('FCM Token:', currentToken);
//         await sendTokenToServer(currentToken);
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//       }
//     } catch (err) {
//       console.log('An error occurred while retrieving token. ', err);
//     }
//   }
// };

// 通知メッセージを受け取る処理
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  if (Notification.permission === 'granted') {
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };
    new Notification(payload.notification.title, notificationOptions);
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notificationOptions = {
          body: payload.notification.body,
          icon: payload.notification.icon
        };
        new Notification(payload.notification.title, notificationOptions);
      }
    });
  }
});

// トークンを取得する関数（手動トリガー用）
export const requestForToken = () => {
  getToken(messaging, { vapidKey }).then((currentToken) => {
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      // ここでトークンをサーバーに送信するなどの処理を行う
      sendTokenToServer(currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
};


onBackgroundMessage(messaging,(payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body:  payload.notification.body || 'Background Message body.',
    icon: payload.notification.icon || '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// // サービスワーカーを登録し、トークンを取得
// registerServiceWorkerAndRequestToken();

export { app, auth, db, firestore, ref, set, messaging, provider };
export default firebaseConfig;
export {};