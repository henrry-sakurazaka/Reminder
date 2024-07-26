import { useEffect, useMemo, useState} from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging'; 
import { onMessage } from 'firebase/messaging/sw';
import { useTodos } from '../context/TodoContext';
import { getFirestore, collection, query, where, getDocs, getDoc, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore';
import { app, firestore, db } from '../firebase'
import useFCMToken from './useFCMtoken';
import firebaseConfig from '../firebase';



// const firebaseConfig = {
//   apiKey: "AIzaSyCFn-eJuAP2f2zYP4VxMvvwef15jzyW7bA",
//   authDomain: "reminder3-65e84.firebaseapp.com",
//   databaseURL: "https://reminder3-65e84-default-rtdb.firebaseio.com",
//   projectId: "reminder3-65e84",
//   storageBucket: "reminder3-65e84.appspot.com",
//   messagingSenderId: "280162142902",
//   appId: "1:280162142902:web:4fed1bc9d4b35e75963417",
//   measurementId: "G-C0NL3GWNWZ"
// };

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// const messaging = getMessaging(app); // Messagingの初期化
const auth = getAuth();
const user = auth.currentUser;


const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting , todo}) => {
  const [uid, setUid] = useState(); 
  const { notificationDocId, isDocRef } = useTodos();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      user.getIdToken(true).then((idToken) => {
        // Send token to your backend via HTTPS
        console.log('Newly refreshed token: done');
      }).catch((error) => {
        // Handle error
        console.error('Error refreshing token:', error);
      });
    }
  });

  // useFCMToken();

  // const GetConverter = useMemo(() => {
  //   return {
  //     fromFirestore: (snapshot, options) => {
  //       const data = snapshot.data();
  //       return {
  //         id: snapshot.id,
  //         content: data,
  //       } 
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid); 
      } 
    });
  
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    if (completedDateTimeSetting && shouldHandleNotifications && todo) {
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


  const sendPushNotificationToServer = async (token, message, deviceToken) => {
    const User = auth.currentUser;
    const idToken = await User.getIdToken();

    try {
      const response = await fetch('https://us-central1-reminder3-65e84.cloudfunctions.net/sendNotification', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${idToken}`, // Firebase Authトークンをヘッダーに追加
        },
        mode: 'cors', // CORSリクエストを送信する設定
        body: JSON.stringify({ token, message, deviceToken }),
        
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

       // ドキュメントの存在確認と更新/作成処理
       const createOrUpdateDocument = async (docId, data) => {
        const docRef = doc(firestore, 'notifications', docId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          // ドキュメントが既に存在する場合は更新
          await updateDoc(docRef, data);
        } else {
          // ドキュメントが存在しない場合は作成
          await setDoc(docRef, data);
        }
      };
  const sendPushNotification = async (timerData) => {
    const User = auth.currentUser;
    const idToken = await User.getIdToken();
    const todoId = timerData.todoId;
    const notificationData = {
      notificationTime: timerData.notificationTime,
      todoId: timerData.todoId,
      content: timerData.content
    };
  
    try {
      console.log('Timer Data:', timerData);
      console.log(isDocRef)
      console.log('notificationDocId', notificationDocId);
  
      if (isDocRef) {
        const todoContent = isDocRef.content;
  
        if (uid === todoId) {
          console.log('match');
          
          const response = await fetch(`https://us-central1-reminder3-65e84.cloudfunctions.net/sendNotification?uid=${uid}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${idToken}`,  
            },
            mode: 'cors', // CORSリクエストを送信する設定
          });
          
          const responseData = await response.json();
          const token = responseData.token;  
  
          const message = {
            title: 'Reminder',
            body: `Reminder: ${timerData.content}`,
          };
  
          await sendPushNotificationToServer(token, message);
  
          // ドキュメントの存在確認と更新/作成処理の呼び出し
          await createOrUpdateDocument(timerData.id, notificationData);
  
          console.log('Push notification sent successfully:', timerData.content);
        }
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

