import React from 'react';
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import { useDispatchTodos, useTodos } from './TodoContext';
import { firestore, auth } from '@/firebase';
import PropTypes from 'prop-types';

const AsyncLogic = createContext();

const AsyncContextProvider = ({ children }) => {
  const { todos, todoList, AddTodosExecuted } = useTodos();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [todosChanged, setTodosChanged] = useState(false);
  const [convertdedNotificationData, setComvertedNotificationData] = useState();
  const dispatch = useDispatchTodos();
  const user = auth.currentUser;
  const [uid, setUid] = useState(); // uidの初期化
  const [fetchTodos, setFetchTodos] = useState();
  const [todosArray, setTodosArray] = useState();
  const [render, setRender] = useState(false);
  const fetchedDataRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
      } else return;
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const sendTodosToApi = async (uid, todos) => {
      if (!uid || !todos) return;
      // const isLocal = import.meta.env.VITE_IS_LOCAL === 'true';
      // const apiUrl2 = isLocal
      //   ? `/api/todoList?uid=${uid}`
      //   : `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodolist/todoList?uid=${uid}`;
      const apiUrl2 = `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodoList/todoList?uid=${uid}`
      try {
        await fetch(apiUrl2, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid, todos }),
        });
      } catch (error) {
        console.error('🔥 Error sending todos:', error);
      } finally {
        setLoading(false);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (
        user &&
        todos.length > 0 &&
        todos.every((todo) => todo !== null && todo !== undefined)
      ) {
        await sendTodosToApi(uid, todos);
      } else return;
    });
    return () => unsubscribe();
  }, [todos, dispatch]);

  useEffect(() => {
    const fetchTodosFromFirestore = async (uid) => {
      if (!uid) return;
      // const isLocal = import.meta.env.VITE_IS_LOCAL === 'true';
      // const apiUrl = isLocal
      //   ? `/api/todoList?uid=${encodeURIComponent(uid)}`
      //   : `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodoList/todoList?uid=${encodeURIComponent(uid)}`;
      const apiUrl = `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodoList/todoList?uid=${encodeURIComponent(uid)}`;
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${await auth.currentUser.getIdToken(true)}`,
          },
        });
        const data = await response.json();
        const data2 = Object.values(data[0]?.todos || {});
        setFetchTodos(data2);

        const newFetchedData = Array.isArray(data2) ? data2 : [data2];

        if (newFetchedData.length > 0) {
          setFetchedData(newFetchedData);
          setData(true);
          fetchedDataRef.current = newFetchedData;

          dispatch({
            type: 'FETCH_TODOS',
            payload: newFetchedData.filter(
              (newFetch) => newFetch !== 'undefined'
            ),
          });
        }
      } catch (error) {
        console.error('Error fetching apiTodoList from Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && uid && !todosChanged) {
        await fetchTodosFromFirestore(uid);
      }
    });

    return () => unsubscribe();
  }, [dispatch, uid, todosChanged]);

  useEffect(() => {
    const AddTodos = async () => {
      // const isLocal = import.meta.env.VITE_IS_LOCAL === 'true';
      // const apiUrl2 = isLocal
      //   ? `/api/todoList?uid=${uid}`
      //   : `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodoList/todoList?uid=${uid}`;
      const apiUrl2 = `https://us-central1-reminder5-27ef0.cloudfunctions.net/apiTodoList/todoList?uid=${uid}`
      try {
        const filteredTodos = todos.filter((todo) => todo !== null);
        await fetch(apiUrl2, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid, todos: filteredTodos }),
        });
      } catch (error) {
        console.error('🔥 Error sending todos:', error);
      } finally {
        setLoading(false);
      }
    };
    if (AddTodosExecuted) {
      AddTodos();
    }
  }, [AddTodosExecuted, dispatch]);

  return (
    <AsyncLogic.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        fetchedData,
        setFetchedData,
        todoList,
        user,
        uid,
        firestore,
        convertdedNotificationData,
        setComvertedNotificationData,
        setTodosChanged,
      }}
    >
      {children}
    </AsyncLogic.Provider>
  );
};

AsyncContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAsyncContext = () => useContext(AsyncLogic);
export { useAsyncContext, AsyncContextProvider };
