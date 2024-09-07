import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import FirstAuth from "./components/FirstAuth";
import UserAuth from "./components/UserAuth";
import SignOut from "./components/ SignOut";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EasyLogin from "./components/EasyLogin";
import DeleteAccount from "./components/DeleteAccount";
import PrivacyPolicy from "./components/PrivacyPolycy";
import Terms from "./components/Terms";
import { getMessaging, getToken, onMessage } from "firebase/messaging"; // Firebase関連のインポートを追加

export default function App() {
  // useEffect(() => {
  //   const messaging = getMessaging(); // メッセージングインスタンスを取得

  //   // 通知の許可を求める
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       console.log('Notification permission granted.');
  //     } else {
  //       console.log('Unable to get permission to notify.');
  //     }
  //   });

  //   onMessage(messaging, (payload) => {
  //     console.log('Message received. ', payload);
  //     // 通知の表示コードをここに追加
  //     if (Notification.permission === 'granted') {
  //       const notificationOptions = {
  //         body: payload.notification.body,
  //         icon: payload.notification.icon
  //       };
  //       new Notification(payload.notification.title, notificationOptions);
  //     } else {
  //       Notification.requestPermission().then((permission) => {
  //         if (permission === 'granted') {
  //           const notificationOptions = {
  //             body: payload.notification.body,
  //             icon: payload.notification.icon
  //           };
  //           new Notification(payload.notification.title, notificationOptions);
  //         }
  //       });
  //     }
  //   });
  // }, []);

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
          <Route path="/DeleteAccount" element={<DeleteAccount/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/Terms" element={<Terms/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

