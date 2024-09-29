
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { collection, query, where, getDocs, onSnapshot, deleteDoc, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import firebaseConfig from '../firebase';
import PropTypes from 'prop-types';
import { all } from 'axios';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

const NotificationHandler = ({ shouldHandleNotifications = false, completedDateTimeSetting = false, todo = {}}) => {

  NotificationHandler.propTypes = {
    todo: PropTypes.object,
  };
  

  NotificationHandler.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      editing: PropTypes.bool,
      editingColor: PropTypes.bool,
      completed: PropTypes.bool,
      editingDateTime: PropTypes.bool,
      editingLock: PropTypes.bool,
    }).isRequired,
    children: PropTypes.node,
    shouldHandleNotifications: PropTypes.bool,
    completedDateTimeSetting: PropTypes.bool,
  };

  localStorage.clear();

  const [uid, setUid] = useState(); 
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user.getIdToken(true)
        }});

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUid(user.uid); 
          } 
        });
      
        return () => unsubscribe();
      }, []);

      const updateNotificationStatus = async (docID) => {
        
          await updateDoc(doc(firestore, 'notifications', docID), { isNotified: true }); 
      };

      useEffect(() => {
        if (completedDateTimeSetting && shouldHandleNotifications && todo) {
        
          const fetchAndStoreNotifications = async () => {
            
              const timersCollection = collection(firestore, 'notifications');
              const q = query(timersCollection, where('notificationTime', '>=', Timestamp.now()), where('isNotified', '==', false));
              const querySnapshot = await getDocs(q);
              const tasks = querySnapshot.docs.map((doc) => {
                return {
                  ...doc.data(),
                  id: doc.id,
                  notificationTime: doc.data().notificationTime.toDate(), // タイムスタンプをDate型に変換
                  isNotified: doc.data().isNotified,
                }  
              });
              for (const task of tasks) {
                if(!task.isNotified) {
                  await updateNotificationStatus(task.id);
                  localStorage.setItem('tasks', JSON.stringify(tasks)); // ローカルストレージに保存
                }
              }     
          }

          // Firestoreのデータ変更を監視し、ローカルストレージを更新
          const unsubscribe = onSnapshot(collection(firestore, 'notifications'),(snapshot) => {
            const tasks = snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
                notificationTime: doc.data().notificationTime.toDate(), // タイムスタンプをDate型に変換
                isNotified: doc.data().isNotified,
              }
            });
            const unNotifiedTask = tasks.filter(task => !task.isNotified);
              localStorage.setItem('tasks', JSON.stringify(unNotifiedTask)); // ローカルストレージを更新
          });

          fetchAndStoreNotifications();
          
          return () => unsubscribe();
        }  
      }, [completedDateTimeSetting, shouldHandleNotifications, uid, todo]);



      useEffect(() => {
        const monitorTimer = async () => {
          
            const timersCollection = collection(firestore, 'notifications');
            const q = query(timersCollection, where('notificationTime', '<', Timestamp.now()));
            const querySnapshot = await getDocs(q);
      
            // querySnapshot.docs はドキュメントの配列です
            for (const snapshot of querySnapshot.docs) {
              const docID = snapshot.id;
              const docData = snapshot.data();
              const notificationTime = docData.notificationTime.toDate(); // Firestore の Timestamp を Date に変換
              const currentTime = new Date().getTime();
              const oneDayAfterNotification = new Date(notificationTime).getTime() + 24 * 60 * 60 * 1000;
              
              if(oneDayAfterNotification <= currentTime) {
                await deleteDoc(doc(firestore, 'notifications', docID));
                // console.log(`Notification with ID ${docID} deleted from Firestore.`);
              }
            }
        };
      
        monitorTimer();
      }, []);

  return null;
};

export default NotificationHandler;
