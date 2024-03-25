// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getFirestore(app);

export { auth , db};
