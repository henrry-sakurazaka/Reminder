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
              const notificationTime = timerData.notificationTime.toDate();
              console.log('Converted notificationTime:', notificationTime);
            });
          };

          const fetchTasks = () => {
            const tasksCollection = collection(firestore, "notifications");
            onSnapshot(tasksCollection, (snapshot) => {
              const tasks = snapshot.docs.map((doc) => doc.data());
              localStorage.setItem("tasks", JSON.stringify(tasks));
            });
          };

          fetchTasks();
          fetchTimers();

          const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot) => {
            fetchTimers();
          });

          return () => {
            unsubscribe();
          };
        }
      }, [completedDateTimeSetting, shouldHandleNotifications, uid]);


  
      function monitorTimer() {
        const timerDatas = JSON.parse(localStorage.getItem('tasks'));
        if (timerDatas && timerDatas.length > 0) {
          timerDatas.forEach((timerData) => {
            const currentTime = new Date().getTime();
            const notificationTime = new Date(timerData.notificationTime).getTime();

            if (notificationTime > currentTime) {
              setTimeout(() => {
                showNotification(timerData);
                // 通知後にタスクを削除するなどの処理を追加することも検討してください
              }, notificationTime - currentTime);
            }
          });
        }
      }

      function showNotification(task) {
        if (Notification.permission === "granted") {
          new Notification("Reminder", {
            body: `Task: ${task.title}`,
          });
        }
      }

    useEffect(() => {
      monitorTimer();
    }, []);

 
  return null;
};

export default NotificationHandler;

