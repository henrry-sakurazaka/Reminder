// import logo from './logo.svg';
// import './App.css';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import FirstAuth from "./components/FirstAuth";
import UserAuth from "./components/UserAuth";
import SignOut from "./components/ SignOut";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EasyLogin from "./components/EasyLogin";
import { messaging , requestForToken} from "./firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging"; // Firebase関連のインポートを追加



export default function App() {
  useEffect(() => {
    const messaging = getMessaging(); // メッセージングインスタンスを取得

    // 通知の許可を求める
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // FCM トークンを取得する
      getToken(messaging, { vapidKey: 'BEwsfQdJI6-6niIqi1XFnKAGVQlwBzU87syDndbmAkJQrXFxmBYgrT34QpEQl6zlYTElWGZAtqpasljODwMz9Po' })
          .then((currentToken) => {
            if (currentToken) {
              console.log('FCM Token:', currentToken);
              // サーバーにトークンを送信する処理を追加
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }, []);

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
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstAuth/>} />
          <Route path="/Example" element={<Example/>} />
          <Route path="/UserAuth" element={<UserAuth/>} />
          <Route path="/SignOut" element={<SignOut/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/EasyLogin" element={<EasyLogin/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}


