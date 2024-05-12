import { useEffect } from 'react';
import { firestore } from '../firebase';
import { getFirestore } from 'firebase/firestore';
import { firebase } from "../firebase";
import { onSnapshot, collection, query, where, getDocs, getDoc } from 'firebase/firestore';
import { app, auth, messaging } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTodos } from "../context/TodoContext";

import firebaseConfig from "../firebase";

const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);
const messaging = app.messaging();
const { completedDateTimeSetting } = useTodos();

messaging
  .getToken({
    vapidKey: 'BFuJxY_z25hMpIZ-TczFvqh6OApOCYIhFoORSr79hYDDKK7TRjFSFHpsmOmCvknGAskQN7QKngak42SzPwTHalY', // オプション。Webプッシュ通知を使用する場合に必要なVAPIDキーを指定します。
  })
  .then((currentToken) => {
    if (currentToken) {
      // デバイストークンを取得した後の処理
      console.log('Current token:', currentToken);
    } else {
      // デバイストークンを取得できなかった場合の処理
      console.log('No registration token available. Request permission to generate one.');
    }
  })
  .catch((err) => {
    // エラーが発生した場合の処理
    console.log('An error occurred while retrieving token. ', err);
  });

const NotificationHandler = () => {
  useEffect(() => {
    const fetchTimers = async () => {
      const timersCollection = collection(firestore, 'notifications');
      const q = query(timersCollection, where('notificationTime', '>=', new Date())); // 未来のタイマーのみ取得
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const timerData = doc.data();
        const notificationTime = timerData.notificationTime.toDate();

        // 現在時刻とタイマーの設定を比較
        if (isTimeApproaching(notificationTime)) {
          // プッシュ通知を送信
          sendPushNotification(timerData);
        }
      });
    };

    const timerSubscription = onSnapshot(collection(firestore, 'notifications'), () => {
      fetchTimers();
    });

    return () => {
      timerSubscription(); // クリーンアップ
    };
  }, []);

  const isTimeApproaching = (notificationTime) => {
    const currentTime = new Date();
    const timeDifference = notificationTime - currentTime;
    const timeThreshold = 5 * 60 * 1000; // 5分前

    return timeDifference <= timeThreshold && timeDifference > 0;
  };

  const sendPushNotification = async (timerData) => {
    try {
      // FirestoreからtodoListコレクション内のドキュメントを取得
      const todoDocRef = doc(firestore, 'todoList', timerData.id);
      const todoDocSnapshot = await getDoc(todoDocRef);
  
      // ドキュメントが存在する場合はcontentの値を取得し、プッシュ通知を送信
      if (todoDocSnapshot.exists()) {
        const todoData = todoDocSnapshot.data();
        const todoContent = todoData.content;
  
        // プッシュ通知の送信
        await messaging.send({
          data: {
            title: 'Reminder',
            body: `Reminder: ${todoContent}`, // タイマーに関連するメッセージとしてcontentを使用
          },
        });
        console.log('Push notification sent successfully:', todoContent);
      } else {
        console.error('Document does not exist');
      }
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };
};
console.log('completedDateTimeSetting', completedDateTimeSetting)
if(completedDateTimeSetting) {
  console.log('yes')
  NotificationHandler();
  isTimeApproaching();
  sendPushNotification();
}

export default NotificationHandler;
