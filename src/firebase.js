/* eslint-disable no-console */

import { initializeApp, getApps, getApp} from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Databaseをインポート
import { getAnalytics,logEvent, isSupported } from 'firebase/analytics';



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

// Analyticsの初期化
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
     // イベントを記録する例
     logEvent(analytics, 'notification_received', {
      item: 'Welcome Notification',
    });
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
}).catch((error) => {
  console.error("Error checking analytics support: ", error);
});




export { app, auth, db, firestore, ref, set, provider }; // dbもエクスポートする
export default firebaseConfig;
