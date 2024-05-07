// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database"; // Realtime Databaseをインポート

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

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

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(); // Realtime Databaseのインスタンスを取得

// (async () => {
//   try {
//     await app; // Firebaseアプリの初期化を待機
//     const db = getDatabase(app); // Firebase Realtime Databaseのインスタンスを取得
//     // ここでdbを使用してデータベースの操作を行う
//   } catch (error) {
//     console.error("Firebaseアプリの初期化に失敗しました:", error);
//   }
// })();
// export { auth , db};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as Api from '../service/api';
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Databaseをインポート
// import FirebaseMock from 'firebase-mock';
// import 'text-encoding';



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
const db = getDatabase(); // Realtime Databaseのインスタンスを取得
const firestore = getFirestore(); // Firestoreのインスタンスを取得
// const post = () => {
//   Api.addTodo(inputName, currentUser.currentUser.uid)
// }




export { app, auth, db, firestore, ref, set }; // dbもエクスポートする
export default firebaseConfig;
