import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from "../firebase";
import { useDispatchTodos, useTodos } from "./TodoContext";

const AsyncLogic2 = createContext();

const AsyncContext2Provider = ({ children }) => {
  const { todos, AddTodosExecuted } = useTodos();
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const auth = getAuth();
  const dispatch = useDispatchTodos();


  const todosConverter2 = useMemo(() => ({
    toFirestore: (todos) => {
      const todosArray = Object.values(todos);
      const firestoreData = {};
      todosArray.forEach((todo, index) => {
        firestoreData[index.toString()] = { ...todo };
      });
      return firestoreData;
    }
  }), []);

  const GetConverter = useMemo(() => ({
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return Object.values(data).map(item => ({ ...item }));
    }
  }), []);

  const fetchTodosFromFirestore = useCallback(async (uid) => {
    console.log('Fetching todos from Firestore for user:', uid);
    setLoading(true);
    try {
      const todoDocRef = doc(firestore, 'todoList3', uid);
      const snapshot = await getDoc(todoDocRef);
      if (snapshot.exists()) {
        const getData = GetConverter.fromFirestore(snapshot);
        setFetchedData(getData);
        dispatch({ type: 'FETCH_TODOS', payload: getData });
        console.log('Fetched todos:', getData);
      } else {
        console.log('No document found for user:', uid);
      }
    } catch (error) {
      console.error('Error fetching todos from Firestore:', error);
    } finally {
      setLoading(false);
    }
  }, [GetConverter, dispatch]);

  const addTodos = useCallback(async (uid) => {
    console.log('Adding todos to Firestore for user:', uid);
    setLoading(true);
    try {
      const todoDocRef = doc(firestore, 'todoList3', uid);
      const converter2 = todosConverter2.toFirestore(todos);
      const dataWithUid = { uid, ...converter2 };
      await setDoc(todoDocRef, dataWithUid);
      console.log('Todos added to Firestore successfully');
    } catch (error) {
      console.error('Error adding todoList to Firestore:', error);
    } finally {
      setLoading(false);
    }
  }, [todosConverter2, todos]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchTodosFromFirestore(user.uid);
      }
    });
    return () => unsubscribe();
  }, [auth, fetchTodosFromFirestore]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user && AddTodosExecuted) {
      addTodos(user.uid);
    }
  }, [AddTodosExecuted, addTodos, auth.currentUser]);

  return (
    <AsyncLogic2.Provider value={{ data, setData, loading, setLoading, fetchedData, setFetchedData }}>
      {children}
    </AsyncLogic2.Provider>
  );
};

const useAsyncContext2 = () => useContext(AsyncLogic2);
export { useAsyncContext2, AsyncContext2Provider};
