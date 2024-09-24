
import { initializeApp, getApps, getApp} from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Databaseをインポート
// import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // Realtime Databaseのインスタンスを取得
const firestore = getFirestore(app); // Firestoreのインスタンスを取得
// const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();


const vapidKey = process.env.REACT_APP_VAPID_KEY;
;

// // トークンをサーバーに送信する関数
// const sendTokenToServer = async (token) => {
//   try {
//     const response = await fetch('https://us-central1-reminder3-65e84.cloudfunctions.net/registerToken', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ token }),
//       mode: 'cors'
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

// // サービスワーカーを登録し、トークンを取得する関数
// const registerServiceWorkerAndRequestToken = async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register('/worker.js', { type: 'module', scope: '/' });
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

//  // 古いService Workerの解除
//        const registrations = await navigator.serviceWorker.getRegistrations();
//        for (let registration of registrations) {
//          await registration.unregister();
//          console.log('Old Service Worker unregistered');
//        }


// // トークンを取得する関数（手動トリガー用）
// export const requestForToken = () => {
//   getToken(messaging, { vapidKey: vapidKey}).then((currentToken) => {
//     if (currentToken) {
//       console.log('FCM Token:', currentToken);
//       // ここでトークンをサーバーに送信するなどの処理を行う
//       sendTokenToServer(currentToken);
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//   });
// };


// // サービスワーカーを登録し、トークンを取得
// registerServiceWorkerAndRequestToken();



export { app, auth, db, firestore, ref, set, provider }; // dbもエクスポートする
export default firebaseConfig;
