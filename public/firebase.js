/* eslint-disable no-console */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, useDeviceLanguage } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ref, set } from 'firebase/database'; // Realtime Databaseをインポート
// import { getAnalytics, logEvent, isSupported, initializeAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
// console.log('Firebase config:', firebaseConfig);
// console.log('Apps:', getApps());
const auth = getAuth(app);
auth.useDeviceLanguage();

const firestore = getFirestore(app); // Firestoreのインスタンスを取得
// const messaging = getMessaging(app);

async function loadController() {
  const { getDocs, collection } = await import('firebase/firestore');
}
const provider = new GoogleAuthProvider();

// Analyticsの初期化
// isSupported().then((supported) => {
//   if (supported) {
//     const analytics = getAnalytics(app);
//      // イベントを記録する例
//      logEvent(analytics, 'notification_received', {
//       item: 'Welcome Notification',
//     });
//   } else {
//     console.warn("Firebase Analytics is not supported in this environment.");
//   }
// }).catch((error) => {
//   console.error("Error checking analytics support: ", error);
// });

function checkForNotificationsAndTrigger() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    const notificationTime = new Date(task.notificationTime).getTime();
    const currentTime = new Date().getTime();
    const unNotified = task.isNotified;

    if (notificationTime <= currentTime && !unNotified) {
      showNotification(task);
      // 通知後にタスクをローカルストレージから削除
      const updatedTasks = tasks.filter((t) => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  });
}

const showNotification = (task) => {
  if (Notification.permission === 'granted') {
    new Notification('Reminder', {
      body: `Task: ${task.content}`, // タスクの内容を表示
      icon: '/favicon.png', // アイコンを追加する場合の例
      tag: 'unique-notification-id', // 一意のタグを設定
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Reminder', {
          body: `Task: ${task.content}`,
          tag: 'unique-notification-id', // 一意のタグを設定
        });
      }
    });
  }
};
// タイマーで定期的にチェックする
setInterval(checkForNotificationsAndTrigger, 60000); // 1分ごとにチェック

// // トークンをサーバーに送信する関数
// const sendTokenToServer = async (token) => {
//   try {
//     const response = await fetch('https://us-central1-reminder3-65e84.cloudfunctions.net/registerToken', {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ token }),
//       mode: 'cors', // CORSリクエストを送信する設定
//     });
//     if (response.ok) {
//       console.log('トークンがサーバーに送信されました');
//     } else {
//       console.error('トークンの送信に失敗しました');
//     }

//   } catch (error) {
//     console.error('トークンの送信中にエラーが発生しました:', error);
//   }
// };

// export const registerServiceWorkerAndRequestToken = async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       navigator.serviceWorker.getRegistrations().then(function(registrations) {
//         for(let registration of registrations) {
//           registration.unregister().then(function() {
//             console.log('Old Service Worker unregistered');
//             navigator.serviceWorker.register('/worker.js', { type: 'module', scope: '/'}).then(function() {
//               console.log('New Service Worker registered');
//             });
//           });
//         }
//     });
//       const registration = await navigator.serviceWorker.register('/worker.js', { type: 'module' , scope: '/'});
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

// export const requestForToken = () => {
//   getToken(messaging, { vapidKey: vapidKey}).then((currentToken) => {
//     if (currentToken) {
//       console.log('FCM Token:', currentToken);
//       sendTokenToServer(currentToken);
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//       // 必要に応じてUIを更新してユーザーに権限を要求する
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//   });
// };

// サービスワーカーを登録し、トークンを取得
// registerServiceWorkerAndRequestToken();

export { app, auth, firestore, provider, ref, set, loadController }; // dbもエクスポートする
export default firebaseConfig;
