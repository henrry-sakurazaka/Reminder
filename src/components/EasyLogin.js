import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase"; 
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";
import "./logging.css";


// Firebase Messagingの初期化
const messaging = getMessaging(app);

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
 // 指定したユーザー情報
 const easyLoginUser = {
    email: process.env.REACT_APP_TEST_EMAIL,
    password: process.env.REACT_APP_TEST_PASSWORD
  };
const vapidKey = process.env.REACT_APP_VAPID_KEY;

 const EasyLogin = () => {
  const navigate = useNavigate();

  // デバイストークンを取得する関数
  const getDeviceToken = async () => {

    try {
      // Service Workerの準備ができるまで待つ
      const registration = await navigator.serviceWorker.ready;
  
      // PushManagerでのサブスクリプション
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey)
      });
      const pushManagerToken = subscription.endpoint;
      console.log('PushManager Subscription Token:', pushManagerToken);
  
      // Firebase Cloud Messagingのトークン取得
      const currentToken = await getToken(messaging, { vapidKey: vapidKey});
      console.log("FCM Token:", currentToken);
      

       
          return currentToken;
        } catch (error) {
          console.error('Error getting device token:', error);
          return null;
        }
      };
    
      // サーバーにトークンを送信する関数
      const sendTokensToServer = async (idToken, deviceToken) => {
        try {
          const response = await axios.post("https://us-central1-reminder3-65e84.cloudfunctions.net/saveTokens", {
            idToken: idToken,
            deviceToken: deviceToken
          }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`,
                
            },
        });
          console.log("Server response:", response.data);
        } catch (error) {
          console.log("Error sending tokens to server:", error);
        }
      };

  
      const handleEasyLogin = async () => {
            
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            easyLoginUser.email,
            easyLoginUser.password
          );

          if (userCredential.user) {
            const idToken = await userCredential.user.getIdToken();
            const deviceToken = await getDeviceToken(); // デバイストークンを取得
            if (deviceToken) {
              await sendTokensToServer(idToken, deviceToken); // トークンをサーバーに送信
            }
          }
          navigate('/Example')
        } catch (error) {
          console.error("簡単ログインエラー:", error);
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
