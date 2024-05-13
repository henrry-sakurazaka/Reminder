import React, { Children, useContext } from 'react';
import { useEffect, createContext } from 'react';
import { firestore } from '../firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { firebase } from "../firebase";
import { onSnapshot, collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { app, auth, messaging } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTodos } from "./TodoContext";
import firebaseConfig from "../firebase";


const NotificationContext = createContext();

const NotificationProvier = ({children}) => {
  const { completedDateTimeSetting } = useTodos();

  useEffect(() => {
      const firebaseApp = initializeApp(firebaseConfig);
      const messaging = getMessaging(firebaseApp);
    
      
      const NotificationHandler = async () => {
        
        try {
          const currentToken = await getToken(messaging, {
            vapidKey: 'BFuJxY_z25hMpIZ-TczFvqh6OApOCYIhFoORSr79hYDDKK7TRjFSFHpsmOmCvknGAskQN7QKngak42SzPwTHalY'
          }); // 非同期関数としてgetToken()を使用
          // await getToken({
          //   vapidKey: 'BFuJxY_z25hMpIZ-TczFvqh6OApOCYIhFoORSr79hYDDKK7TRjFSFHpsmOmCvknGAskQN7QKngak42SzPwTHalY', 
          // })

            if (currentToken) {
              // デバイストークンを取得した後の処理
              console.log('Current token:', currentToken);
            } else {
              // デバイストークンを取得できなかった場合の処理
              console.log('No registration token available. Request permission to generate one.');
            }
        } catch (error) {
          // エラーが発生した場合の処理
          console.log('An error occurred while retrieving token. ', error);
        };


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
        }

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

    if(completedDateTimeSetting) {
      console.log('yes')
      NotificationHandler();
    }
  }, [completedDateTimeSetting]);

  return (
    <NotificationContext.Provider value= {{}}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotificationContext = () => useContext(NotificationContext);

export { useNotificationContext, NotificationProvier };
