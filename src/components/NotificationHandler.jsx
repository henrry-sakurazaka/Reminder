import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useTodos } from '../context/TodoContext';
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  Timestamp,
  updateDoc,
  orderBy,
  collectionGroup,
  addDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase';
import firebaseConfig from '../firebase';
import PropTypes from 'prop-types';
import { all } from 'axios';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

const NotificationHandler = ({
  shouldHandleNotifications = false,
  completedDateTimeSetting = false,
  todo = {},
}) => {
  NotificationHandler.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      editing: PropTypes.bool,
      editingColor: PropTypes.bool,
      completed: PropTypes.bool,
      editingDateTime: PropTypes.bool,
      editingLock: PropTypes.bool,
      docId: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
    shouldHandleNotifications: PropTypes.bool,
    completedDateTimeSetting: PropTypes.bool,
  };

  const {
    docId,
    Todo2,
    setTodo2,
    completedTask,
    completedTask2,
    setCompletedTask2,
  } = useTodos();

  localStorage.clear();

  const [uid, setUid] = useState();
  const [authUser, setAuthUser] = useState(null);
  const [shouldNotificaion, setShouldNotification] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      user.getIdToken(true);
    }
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = auth.currentUser;
        setAuthUser(currentUser);
        setUid(user.uid);
        setTodo2(todo);
        setShouldNotification(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const updateNotificationStatus = async () => {
    await updateDoc(doc(firestore, 'notifications', docId), {
      isNotified: true,
    });
  };

  useEffect(() => {
    const updateUidFunctions = async () => {
      await updateDoc(doc(firestore, 'notifications', docId), {
        docId: docId,
      });
    };
    return () => updateUidFunctions();
  }, [completedDateTimeSetting, shouldHandleNotifications]);

  useEffect(() => {
    if (shouldNotificaion) {
      const unsubscribe2 = onAuthStateChanged(auth, (user) => {
        if (user) {
          const fetchAndStoreNotifications = async () => {
            const timersCollection = collectionGroup(
              firestore,
              'notifications'
            );
            const q = query(
              timersCollection,
              where('todoId', '==', uid),
              // where('docId', '==', docId),
              where('isNotified', '==', false),
              where('notificationTime', '>=', Timestamp.now()),
              orderBy('notificationTime'),
              orderBy('__name__')
            );
            const querySnapshot = await getDocs(q);
            const tasks = querySnapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
                notificationTime: doc.data().notificationTime?.toDate(), // タイムスタンプをDate型に変換
                isNotified: doc.data().isNotified,
              };
            });
            const unNotifiedTasks = tasks.filter((task) => !task.isNotified);
            const setNotifications = () => {
              const existingTasks = localStorage.getItem('tasks') || [];
              unNotifiedTasks.forEach((task) => {
                const alreadeyExists = existingTasks.some(
                  (t) => t.id === task.id
                );
                if (!alreadeyExists) {
                  existingTasks.push(task);
                  localStorage.setItem('tasks', JSON.stringify(existingTasks));
                }
              });
            };
            setNotifications();
          };
          fetchAndStoreNotifications(user);
        }
      });
      return () => unsubscribe2();
    }
  }, [
    shouldNotificaion,
    Todo2,
    completedTask2,
    completedDateTimeSetting,
    shouldHandleNotifications,
  ]);

  useEffect(() => {
    const monitorTimer = async () => {
      const timersCollection = collection(firestore, 'notifications');
      const q = query(
        timersCollection,
        where('notificationTime', '<', Timestamp.now()),
        orderBy('notificationTime'),
        orderBy('__name__')
      );
      const querySnapshot = await getDocs(q);

      // querySnapshot.docs はドキュメントの配列です
      for (const snapshot of querySnapshot.docs) {
        const docID = snapshot.id;
        const docData = snapshot.data();
        const notificationTime = docData.notificationTime?.toDate(); // Firestore の Timestamp を Date に変換
        const currentTime = new Date().getTime();
        const oneDayAfterNotification =
          new Date(notificationTime).getTime() + 24 * 60 * 60 * 1000;

        if (notificationTime > currentTime || completedTask) {
          updateNotificationStatus();
          setCompletedTask2(true);
        }
        if (oneDayAfterNotification >= currentTime) {
          await deleteDoc(doc(firestore, 'notifications', docID));
        }
      }
    };
    monitorTimer();
  }, [
    completedDateTimeSetting,
    shouldHandleNotifications,
    Todo2,
    completedTask,
  ]);
  return null;
};

export default NotificationHandler;
