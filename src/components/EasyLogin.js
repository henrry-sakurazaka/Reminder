import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
// import { getMessaging, getToken } from "firebase/messaging";
// import axios from "axios";
import "./logging.css";


// Firebase Messagingの初期化
// const messaging = getMessaging(app);

// const urlBase64ToUint8Array = (base64String) => {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };
 // 指定したユーザー情報
 const easyLoginUser = {
    email: process.env.REACT_APP_TEST_EMAIL,
    password: process.env.REACT_APP_TEST_PASSWORD
  };
// const vapidKey = process.env.REACT_APP_VAPID_KEY;

 const EasyLogin = () => {
  const navigate = useNavigate();
      const handleEasyLogin = async () => {
          
          const userCredential = await signInWithEmailAndPassword(
            auth,
            easyLoginUser.email,
            easyLoginUser.password
          );
          if(userCredential) {
            navigate('/Example');
          }
      }; 

    useEffect(() => {
      handleEasyLogin();
    }, []);

  return (
    <div className="login-container">
      <div className="logging-in">Logging in...</div>
    </div>
  )
 }


export default EasyLogin;
