import { useEffect, useId, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { collection, query, where, getDocs, onSnapshot, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { firestore } from '../firebase';
import firebaseConfig from '../firebase';


// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

initializeApp(firebaseConfig);

const auth = getAuth();
const user = auth.currentUser;

const NotificationHandler = ({ shouldHandleNotifications, completedDateTimeSetting , todo}) => {
  const [uid, setUid] = useState(); 
  const [usedId, setUsedId] = useState();
  
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
              const q = query(timersCollection, where('notificationTime', '>=', Timestamp.now()));
              const querySnapshot = await getDocs(q);
    
              const tasks = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                notificationTime: doc.data().notificationTime.toDate(), // タイムスタンプをDate型に変換 
              }));
              localStorage.setItem('tasks', JSON.stringify(tasks)); // ローカルストレージに保存
              // const ids = querySnapshot.docs.map(doc => doc.id);
              // setUsedId(ids);
            } catch (error) {
              console.error("Error fetching notifications: ", error);
            }
          };
    
          fetchAndStoreNotifications();
    
          // Firestoreのデータ変更を監視し、ローカルストレージを更新
          const unsubscribe = onSnapshot(collection(firestore, 'notifications'),(snapshot) => {
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
        const monitorTimer = async () => {
          try {
            const timersCollection = collection(firestore, 'notifications');
            const q = query(timersCollection, where('notificationTime', '<', Timestamp.now()));
            const querySnapshot = await getDocs(q);
      
            // querySnapshot.docs はドキュメントの配列です
            for (const snapshot of querySnapshot.docs) {
              const docID = snapshot.id;
              const docData = snapshot.data();
              const notificationTime = docData.notificationTime.toDate(); // Firestore の Timestamp を Date に変換
              const currentTime = new Date().getTime();
              const setTime = new Date(notificationTime).getTime();
              const oneDayAfterNotification = new Date(notificationTime).getTime() + 24 * 60 * 60 * 1000;
      
              if (oneDayAfterNotification <= currentTime) {
                await deleteDoc(doc(firestore, 'notifications', docID));
                console.log(`Notification with ID ${docID} deleted from Firestore.`);
              }
            }
          } catch (error) {
            console.error("Error fetching or deleting notifications from Firestore: ", error);
          }
        };
      
        monitorTimer();
      }, []);
      
    //   useEffect(() => {
    //   const monitorTimer = () => {
    //     const timerDatas = JSON.parse(localStorage.getItem('tasks'));
    //     if (timerDatas && timerDatas.length > 0) {
    //       timerDatas.forEach((timerData) => {
    //         const currentTime = new Date().getTime();
    //         const notificationTime = new Date(timerData.notificationTime).getTime();

    //         if (notificationTime > currentTime) {
    //           setTimeout(async () => {
    //             showNotification(timerData);

    //             // 通知が表示された後にFirestoreから削除
    //           try {
    //             await deleteDoc(doc(firestore, 'notifications', timerData.id));
    //             console.log(`Notification with ID ${timerData.id} deleted from Firestore.`);
    //           } catch (error) {
    //             console.error("Error deleting notification: ", error);
    //           }

    //           // ローカルストレージからも削除
    //           const updatedTasks = timerDatas.filter(task => task.id !== timerData.id);
    //           localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    //           }, notificationTime - currentTime);
    //         }
    //       });
    //     }
    //   }

    //   monitorTimer();
    // }, []);
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
