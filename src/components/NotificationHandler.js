import { useEffect, useMemo, useState} from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging'; 
import { onMessage } from 'firebase/messaging/sw';
import { useTodos } from '../context/TodoContext';
import { getFirestore, collection, query, where, getDocs, getDoc, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore';
import { app, firestore, db } from '../firebase';
import useFCMToken from './useFCMtoken';
import firebaseConfig from '../firebase';


if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const user = auth.currentUser;

const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting , todo}) => {
  const [uid, setUid] = useState(); 
  const { notificationDocId, isDocRef, setIsSubmitting2, isSubmitting } = useTodos();
  
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
          
          const fetchAndStoreNotifications = async () => {
            try {
              const timersCollection = collection(firestore, 'notifications');
              const q = query(timersCollection, where('notificationTime', '>=', new Date()));
              const querySnapshot = await getDocs(q);
    
              const tasks = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                notificationTime: doc.data().notificationTime.toDate(), // タイムスタンプをDate型に変換
              }));
              localStorage.setItem('tasks', JSON.stringify(tasks)); // ローカルストレージに保存
            } catch (error) {
              console.error("Error fetching notifications: ", error);
            }
          };
    
          fetchAndStoreNotifications();
    
          // Firestoreのデータ変更を監視し、ローカルストレージを更新
          const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot) => {
            const tasks = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
              notificationTime: doc.data().notificationTime.toDate(), // タイムスタンプをDate型に変換
            }));
    
            localStorage.setItem('tasks', JSON.stringify(tasks)); // ローカルストレージを更新
          });
    
          return () => unsubscribe();
        }
      }, [completedDateTimeSetting, shouldHandleNotifications, uid]);


      useEffect(() => {
      const monitorTimer = () => {
        const timerDatas = JSON.parse(localStorage.getItem('tasks'));
        if (timerDatas && timerDatas.length > 0) {
          timerDatas.forEach((timerData) => {
            const currentTime = new Date().getTime();
            const notificationTime = new Date(timerData.notificationTime).getTime();

            if (notificationTime > currentTime) {
              setTimeout(() => {
                showNotification(timerData);
              }, notificationTime - currentTime);
            }
          });
        }
      }

      monitorTimer();
    }, []);
  //タイマーセットが完了した時にiマークを点灯させる
    // const notificationComplete = () => {
    //   setIsSubmitting2(false);
    // }
    
    // useEffect(() => {
    //   if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.addEventListener('message', event => {
    //       console.log('yeah')
    //       if (event.data.type === 'NOTIFICATION_DISPLAYED') {
    //         notificationComplete();
    //       }
    //     });
    //   }
    // }, []);
    
    
  return null;
};

export default NotificationHandler;

