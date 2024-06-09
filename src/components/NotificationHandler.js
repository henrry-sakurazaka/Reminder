import { useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, query, where, getDocs, getDoc, onSnapshot, 
          doc } from 'firebase/firestore';
import { messaging } from '../firebase';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import useFCMToken from './useFCMtoken';



const NotificationHandler = ({ shouldHandleNotifications , completedDateTimeSetting}) => {
  
  useFCMToken();    // コンポーネントの初期化時にFCMトークンを取得

  useEffect(() => {
   if (completedDateTimeSetting && shouldHandleNotifications) {
    const fetchTimers = async () => {
      console.log('yes')
      const timersCollection = collection(firestore, 'notifications');
      const q = query(timersCollection, where('notificationTime', '>=', new Date()));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const timerData = doc.data();
        const notificationTime = timerData.notificationTime.toDate();

        if (isTimeApproaching(notificationTime)) {
          sendPushNotification(timerData);
        }
      });
    };

    
    const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot) => {
      fetchTimers();
    });

    return () => {
      unsubscribe(); // クリーンアップ
    };

   }
  }, [completedDateTimeSetting, shouldHandleNotifications]);

  const isTimeApproaching = (notificationTime) => {
    const currentTime = new Date();
    const timeDifference = notificationTime - currentTime;
    const timeThreshold = 5 * 60 * 1000; // 5分前

    return timeDifference <= timeThreshold && timeDifference > 0;
  };

  const sendPushNotification = async (timerData) => {
    try {
      const todoDocRef = doc(firestore, 'todoList3', timerData.id);
      const todoDocSnapshot = await getDoc(todoDocRef);

      if (todoDocSnapshot.exists()) {
        const todoData = todoDocSnapshot.data();
        const todoContent = todoData.content;

        const response = await fetch('https://reminder-b4527.web.app/get-token', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { token } = await response.json();

        const message = {
          title: 'Reminder',
          body: `Reminder: ${todoContent}`,
        };
        await sendPushNotificationToServer(token, message);

        const sendPushNotificationToServer = async (token, message) => {
          try {
            const response = await fetch('https://reminder-b4527.web.app/send-notification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token, message }),
            });
            if (response.ok) {
              console.log('Notification sent successfully');
            } else {
              console.error('Error sending notification');
            }
          } catch (error) {
            console.error('Error sending notification:', error);
          }
        };
      
        console.log('Push notification sent successfully:', todoContent);
      } else {
        console.error('Document does not exist');
      }
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };

  return null; 
};

export default NotificationHandler;

