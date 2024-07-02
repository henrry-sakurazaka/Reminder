
import { initializeApp } from "firebase/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Databaseをインポート
// import FirebaseMock from 'firebase-mock';
// import 'text-encoding';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // Realtime Databaseのインスタンスを取得
const firestore = getFirestore(app); // Firestoreのインスタンスを取得
const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();

const vapidKey = 'BEwsfQdJI6-6niIqi1XFnKAGVQlwBzU87syDndbmAkJQrXFxmBYgrT34QpEQl6zlYTElWGZAtqpasljODwMz9Po';

// トークンをサーバーに送信する関数
const sendTokenToServer = async (token) => {
  try {
    const response = await fetch('https://reminder-b4527.web.app/register-token', {
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

// サービスワーカーを登録し、トークンを取得する関数
const registerServiceWorkerAndRequestToken = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/worker.js', { type: 'module' });
      console.log('Service Worker registration successful with scope: ', registration.scope);
      const currentToken = await getToken(messaging, { serviceWorkerRegistration: registration, vapidKey });
      if (currentToken) {
        console.log('FCM Token:', currentToken);
        await sendTokenToServer(currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  }
};

// if ('serviceWorker' in navigator) {

//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//       for (let registration of registrations) {
//           registration.unregister();
//       }
//     });

//     navigator.serviceWorker.register('/worker.js', { type: 'module' })
//       .then((registration) => {
//         console.log('Service Worker registration successful with scope: ', registration.scope);
        
//         const vapidKey = 'BEwsfQdJI6-6niIqi1XFnKAGVQlwBzU87syDndbmAkJQrXFxmBYgrT34QpEQl6zlYTElWGZAtqpasljODwMz9Po';
//         return getToken(messaging, { serviceWorkerRegistration: registration, vapidKey });
//       })
    
//       .then((currentToken) => {
//           if (currentToken) {
//             console.log('FCM Token:', currentToken);
//             return sendTokenToServer(currentToken); // トークンをサーバーに送信する処理
//           } else {
//             console.log('No registration token available. Request permission to generate one.');
//           }
//         })
//         .catch ((err) => {
//           console.log('An error occurred while retrieving token. ', err);
//       });
// }

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // 通知の表示コードをここに追加
  // ブラウザが通知を表示する許可を持っているかを確認
  if (Notification.permission === 'granted') {
    // 通知のオプションを設定
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };

    // 通知を表示
    new Notification(payload.notification.title, notificationOptions);
  } else {
    // 許可をリクエストする
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // 通知のオプションを設定
        const notificationOptions = {
          body: payload.notification.body,
          icon: payload.notification.icon
        };

        // 通知を表示
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

// サービスワーカーを登録し、トークンを取得
registerServiceWorkerAndRequestToken();



export { app, auth, db, firestore, ref, set, messaging, provider }; // dbもエクスポートする
export default firebaseConfig;
