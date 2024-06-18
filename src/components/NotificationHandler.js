import { useEffect, useMemo, useState} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging'; 
import { onMessage } from 'firebase/messaging/sw';
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
const messaging = getMessaging(app); // Messagingの初期化
const auth = getAuth();
const user = auth.currentUser;




const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting }) => {
  const [uid, setUid] = useState(); 

  useFCMToken();

  const GetConverter = useMemo(() => {
    return {
      fromFirestore: (snapshot, options) => {
        const data = snapshot.data();
        return {
          id: snapshot.id,
          content: data.content,
        } 
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid); 
      } 
    });
  
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    if (completedDateTimeSetting && shouldHandleNotifications) {
      const fetchTimers = async () => {
        const timersCollection = collection(firestore, 'notifications');
        const q = query(timersCollection, where('notificationTime', '>=', new Date()));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const timerData = doc.data();
          timerData.id = doc.id;
 
          // Firestore TimestampオブジェクトをDateオブジェクトに変換
          const notificationTime = timerData.notificationTime.toDate();
           console.log('Converted notificationTime:', notificationTime); // 3. デバッグ用のログを追加
          
          // Dateオブジェクトの型チェック
          if (!notificationTime || !(notificationTime instanceof Date)) {
            console.error('Invalid notificationTime:', timerData.notificationTime);
            return;
          }

          // 5分前の時間を計算
          const notificationTimeMinus5Minutes = new Date(notificationTime.getTime() - 5 * 60 * 1000);

          if (isTimeApproaching(notificationTimeMinus5Minutes)) {
            console.log('Time is approaching, sending push notification...');
            sendPushNotification(timerData);
          } else {
            console.log('Time is not approaching yet.');
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
  }, [completedDateTimeSetting, shouldHandleNotifications, uid]);

  const isTimeApproaching = (notificationTimeMinus5Minutes) => {
    const currentTime = new Date();
    const timeDifference = notificationTimeMinus5Minutes - currentTime;
    const timeThreshold = 5 * 60 * 1000; // 5 minutes

    console.log('Time Difference (ms):', timeDifference);

    return timeDifference <= timeThreshold && timeDifference > 0;
  };

  const sendPushNotificationToServer = async (token, message) => {
    try {
      const response = await fetch('https://us-central1-reminder-b4527.cloudfunctions.net/sendNotification', {

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
        let responseData;
      try {
        responseData = await response.json();
      } catch (error) {
        throw new Error('Invalid JSON response from server');
      }
        console.log('Notification response:', responseData); // レスポンスの内容をログに出力

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

      const todoDocRef = doc(firestore, 'notification', timerData.id);
      const todoDocSnapshot = await getDoc(todoDocRef);

      if (todoDocSnapshot.exists()) {
        const todoData = todoDocSnapshot.data();
        const getData = GetConverter.fromFirestore(todoDocSnapshot); 
        const todoContent = getData.content;

        if (!uid) {
          console.error('UID is not set');
          return;
        }

        const response = await fetch(`https://us-central1-reminder-b4527.cloudfunctions.net/sendNotification?uid=${uid}`, {
        // const response = await fetch(`https://us-central1-reminder-b4527.cloudfunctions.net/sendNotification?uid=${uid}`, {
          method: 'POST',
          // mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'https://reminder-b4527.web.app'  
           },
        });
      
        const responseData = await response.json();
        const token = responseData.token;  

        const message = {
          title: 'Reminder',
          body: `Reminder: ${todoContent}`,
        };

        await sendPushNotificationToServer(token, message);

        console.log('Push notification sent successfully:', todoContent);
      } else {
        console.error('Document does not exist', timerData.id);
      }
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };

  return null;
};

export default NotificationHandler;

