import { useEffect } from 'react';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { messaging } from '../firebase';

const useFCMToken = () => {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const currentToken = await getToken(messaging, { vapidKey: 'BEwsfQdJI6-6niIqi1XFnKAGVQlwBzU87syDndbmAkJQrXFxmBYgrT34QpEQl6zlYTElWGZAtqpasljODwMz9Po' });
        if (currentToken) {
          console.log('FCMトークン:', currentToken);
          await sendTokenToServer(currentToken); // サーバーにトークンを送信
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      } catch (error) {
        console.error('An error occurred while retrieving token. ', error);
      }
    };

    fetchToken();
}, []);

useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // 通知の表示コードをここに追加
    });
  }, []);
};



const sendTokenToServer = async (token) => {
  try {
    const response = await fetch('https://reminder-b4527.web.app//register-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
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

// // サービスワーカーの登録
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch((err) => {
//       console.log('Service Worker registration failed:', err);
//     });
// }
export default useFCMToken;