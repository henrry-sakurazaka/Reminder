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
import { doc, setDoc, getDoc } from 'firebase/firestore';
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
      try {
        await fetch('http://localhost:3001/api/todoList', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid, todos: filteredTodos }),
        });
        console.log('✅ Successfully sent todos to API');
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
        todos.forEach((todo) => todo !== null && todo !== undefined)
      ) {
        await sendTodosToApi(uid, todos);
        console.log('sendTodoApi');
      } else return;
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const fetchTodosFromFirestore = async (uid, todos) => {
      try {
        const fetchTodoList = async () => {
          if (!uid) return;
          const response = await fetch(
            `/api/todoList?uid=${encodeURIComponent(uid)}`
          );
          const data = await response.json();
          const data2 = Object.values(data[0].todos);
          setFetchTodos(data2);
          const newFetchedData = Array.isArray(data2) ? data2 : [data2];

          if (newFetchedData !== null && newFetchedData.length > 0) {
            setFetchedData(newFetchedData);
            setData(true);
            fetchedDataRef.current = newFetchedData;
            dispatch({
              type: 'FETCH_TODOS',
              payload: newFetchedData.filter(
                (newFetch) => newFetch !== 'undefind'
              ),
            });
          }
        };
        fetchTodoList();
      } catch (error) {
        console.error('Error fetching todoList to Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if ((uid, !todosChanged)) {
        await fetchTodosFromFirestore(user.uid);
      } else return;
    });

    return () => unsubscribe();
  }, [dispatch, uid]);

  useEffect(() => {
    const AddTodos = async () => {
      try {
        const filteredTodos = todos.filter((todo) => todo !== null);
        await fetch('/api/todoList', {
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
