import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase"; 
import { getMessaging, getToken } from "firebase/messaging";
// import axios from "axios";
import "./SignIn.css";

const axios = require("axios");

// Firebase Messagingの初期化
const messaging = getMessaging(app);
const vapidKey = process.env.REACT_APP_VAPID_KEY;

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

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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
      const currentToken = await getToken(messaging, { vapidKey: vapidKey });
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
      const response = await axios.post("https://us-central1-reminder-b4527.cloudfunctions.net/saveTokens", {
        idToken: idToken,
        deviceToken: deviceToken
      }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
            'Access-Control-Allow-Origin': 'https://reminder-b4527.web.app',
        //     'Access-Control-Allow-Methods': "PUT, POST, GET, DELETE, HEAD, PATCH, OPTIONS"
        },
    });
      console.log("Server response:", response.data);
    } catch (error) {
      console.log("Error sending tokens to server:", error);
    }
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
  

      if (userCredential.user) {
        const idToken = await userCredential.user.getIdToken();
        const deviceToken = await getDeviceToken(); // デバイストークンを取得
        if (deviceToken) {
          await sendTokensToServer(idToken, deviceToken); // トークンをサーバーに送信
        }
        navigate("/Example");
      }
     
    } catch (error) {
      console.log(error);
    }
     
  };

  const getColor = () => "rgba(40, 147, 247, 0.772)";
  const spans = [1, 2, 3, 4, 5]; // spanの数だけ適当な配列を作成fi
  
  const navigationHandler = () => {
    navigate('/UserAuth')
}
  

  return (
    <>
      
      <div className="decoration">
          {spans.map((_, index) => (
          <span 
              key={index} 
              className="slash2" 
              style={{ backgroundColor: getColor() }}
          ></span>
          ))}
      </div>
      <span className="back-to-auth" onClick={navigationHandler}>Back To Auth</span>
  
      <div className="auth-container">
        <div className="outline-container">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              required
              onChange={onChange}
              className="form-input"
              autoComplete="email"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              required
              onChange={onChange}
              className="form-input"
              autoComplete="current-password"
            />
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
    
  );
}

export default SignIn;

