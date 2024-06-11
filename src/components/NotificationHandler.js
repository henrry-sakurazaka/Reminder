import { useEffect } from 'react';
// import { firestore } from '../firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, getDoc, onSnapshot, doc } from 'firebase/firestore';
import useFCMToken from './useFCMtoken';

const firebaseConfig = {
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting }) => {

  useFCMToken();

  useEffect(() => {
    if (completedDateTimeSetting && shouldHandleNotifications) {
      const fetchTimers = async () => {
        const timersCollection = collection(firestore, 'notifications');
        const q = query(timersCollection, where('notificationTime', '>=', new Date()));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const timerData = doc.data();
          
          // Firestore TimestampオブジェクトをDateオブジェクトに変換
          const notificationTime = timerData.notificationTime.toDate();

          // Dateオブジェクトの型チェック
          if (!notificationTime || !(notificationTime instanceof Date)) {
            console.error('Invalid notificationTime:', timerData.notificationTime);
            return;
          }

          // 5分前の時間を計算
          const notificationTimeMinus5Minutes = new Date(notificationTime.getTime() - 5 * 60 * 1000);

          if (isTimeApproaching(notificationTimeMinus5Minutes)) {
            sendPushNotification(timerData);
          }
        });
      };

      const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot) => {
        fetchTimers();
      });

      return () => {
        unsubscribe();
      };
    }
  }, [completedDateTimeSetting, shouldHandleNotifications]);

  const isTimeApproaching = (notificationTimeMinus5Minutes) => {
    const currentTime = new Date();
    const timeDifference = notificationTimeMinus5Minutes - currentTime;
    const timeThreshold = 5 * 60 * 1000; // 5 minutes

    console.log('Time Difference (ms):', timeDifference);

    return timeDifference <= timeThreshold && timeDifference > 0;
  };

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

  const sendPushNotification = async (timerData) => {
    try {
      console.log('Timer Data:', timerData);

      if (!timerData.id) {
        console.error('Invalid timer data:', timerData);
        return;
      }

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

// const app = initializeApp(firebaseConfig);

// // Firestoreインスタンスを取得
// const firestore = getFirestore(app);

// const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting }) => {
  
//   useFCMToken();    // コンポーネントの初期化時にFCMトークンを取得

//   useEffect(() => {
//     if (completedDateTimeSetting && shouldHandleNotifications) {
//       const fetchTimers = async () => {
//         console.log('yes');
//         try {
//           const timersCollection = collection(firestore, 'notifications');
//           const q = query(timersCollection, where('notificationTime', '>=', new Date()));
//           const querySnapshot = await getDocs(q);

//           if (querySnapshot.empty) {
//             console.log('No matching documents.');
//             return;
//           }

//           querySnapshot.forEach((doc) => {
//             const timerData = doc.data();
//             timerData.id = doc.id;  // doc.idをtimerDataに追加
//             const notificationTime = timerData.notificationTime.toDate();

//             if (timerData.notificationTime && timerData.notificationTime.toDate) {
            
//               if (isTimeApproaching(notificationTime)) {
//                 sendPushNotification(timerData);
//               } else {
//                 console.log('Notification time is not approaching:', notificationTime);
//               }
//             } else {
//               console.error('Invalid notificationTime format:', timerData.notificationTime);
//             }
//         });
//     } catch (error) {
//       console.error('Error fetching timers:', error);
//     }
//   };
     
//       const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot) => {
//         fetchTimers();
//       });

//       return () => {
//         unsubscribe(); // クリーンアップ
//       };
//     }
//   }, [completedDateTimeSetting, shouldHandleNotifications]);

//   const isTimeApproaching = (notificationTime) => {
//     const currentTime = new Date();
//     const timeDifference = notificationTimeMinus5Minutes - currentTime;
//     // const timeDifference = notificationTime - currentTime;
//     // const timeDifference = notificationTime.getTime() - currentTime.getTime();
//     const timeThreshold = 5 * 60 * 1000; // 5分前
//     console.log('Time Difference (ms):', timeDifference);

//     return timeDifference <= timeThreshold && timeDifference > 0;
//   };

//   const sendPushNotificationToServer = async (token, message) => {
    
//     try {
//       const response = await fetch('https://reminder-b4527.web.app/send-notification', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, message }),
//       });
//       if (response.ok) {
//         console.log('Notification sent successfully');
//       } else {
//         console.error('Error sending notification');
//       }
//     } catch (error) {
//       console.error('Error sending notification:', error);
//     }
//   };

//   const sendPushNotification = async (timerData) => {
//     try {
//       console.log('Timer Data:', timerData); // Debugging line

//       if (!timerData.notificationTime ||!(timerData.notificationTime instanceof Date)) {
//         console.error('Invalid notificationTime:', timerData.notificationTime);
//         return;
//       }
//       if (!timerData.id) {
//         console.error('Invalid timer data:', timerData);
//         return;
//       }

//       const todoDocRef = doc(firestore, 'todoList3', timerData.id);
//       const todoDocSnapshot = await getDoc(todoDocRef);

//       if (todoDocSnapshot.exists()) {
//         const todoData = todoDocSnapshot.data();
//         const todoContent = todoData.content;

//         const response = await fetch('https://reminder-b4527.web.app/get-token', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const { token } = await response.json();

//         const message = {
//           title: 'Reminder',
//           body: `Reminder: ${todoContent}`,
//         };
        
//         await sendPushNotificationToServer(token, message);

//         console.log('Push notification sent successfully:', todoContent);
//       } else {
//         console.error('Document does not exist');
//       }
//     } catch (error) {
//       console.error('Error sending push notification:', error);
//     }
//   };

//   return null; 
// };

// export default NotificationHandler;



