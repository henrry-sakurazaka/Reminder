import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFn-eJuAP2f2zYP4VxMvvwef15jzyW7bA",
  authDomain: "reminder3-65e84.firebaseapp.com",
  databaseURL: "https://reminder3-65e84-default-rtdb.firebaseio.com",
  projectId: "reminder3-65e84",
  storageBucket: "reminder3-65e84.appspot.com",
  messagingSenderId: "280162142902",
  appId: "1:280162142902:web:4fed1bc9d4b35e75963417",
  measurementId: "G-C0NL3GWNWZ"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // Realtime Databaseのインスタンスを取得
const firestore = getFirestore(app); // Firestoreのインスタンスを取得
const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();
const vapidKey = 'BGQ-lpzb0CU-TJkFizvdjn5rOCioZIi7cC571P27IFlU9JFU73O1l0zP_U3jF84An2y3kD1GWZgtSCns6-4LZiQ';

// トークンをサーバーに送信する関数
const sendTokenToServer = async (token) => {
  try {
    const response = await fetch('https://us-central1-reminder3-65e84.cloudfunctions.net/registerToken', {
    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
      mode: 'cors', // CORSリクエストを送信する設定
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
      const registration = await navigator.serviceWorker.register('/worker.js', { type: 'module' , scope: '/'});
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

export const requestForToken = () => {
  getToken(messaging, { vapidKey: 'BGQ-lpzb0CU-TJkFizvdjn5rOCioZIi7cC571P27IFlU9JFU73O1l0zP_U3jF84An2y3kD1GWZgtSCns6-4LZiQ'}).then((currentToken) => {
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      sendTokenToServer(currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
      // 必要に応じてUIを更新してユーザーに権限を要求する
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
};

// サービスワーカーを登録し、トークンを取得
registerServiceWorkerAndRequestToken();



export { app, auth, db, firestore, ref, set, messaging, provider }; // dbもエクスポートする
export default firebaseConfig;
