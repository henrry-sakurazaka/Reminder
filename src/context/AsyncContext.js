

import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext , useState, useRef, useEffect, useContext, useMemo} from "react";
import { useDispatchTodos, useTodos } from "./TodoContext";
import { firestore, auth } from "../firebase";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import PropTypes from "prop-types";

const AsyncLogic = createContext();


const AsyncContextProvider = ({ children }) => {

    const { todos, todoList, AddTodosExecuted } = useTodos();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]); 
    const [todosChanged, setTodosChanged] = useState(false);
    const [convertdedNotificationData, setComvertedNotificationData] = useState();
    const  dispatch  = useDispatchTodos();
    const user = auth.currentUser;
    const [uid, setUid] = useState(); // uidの初期化
    
    
    const fetchedDataRef = useRef(null);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid); 
        } else {
          console.log('No user is signed in');
        }
      });
    
      return () => unsubscribe();
    }, []);
    

    const todosConverter2 = useMemo(() => {
      return {
        toFirestore: (todos) => {
          const todosArray = Object.values(todos);
          const firestoreData = {};
          todosArray.forEach((todo, index) => {
            firestoreData[index.toString()] = {
              title: todo.title,
              description: todo.description,
              type: todo.type,
              id: todo.id,
              content: todo.content,
              editing: todo.editing,
              completed: todo.completed,
              reserve: todo.reserve,
              editingLock: todo.editingLock,
              editingColor: todo.editingColor,
              editingDateTime: todo.editingDateTime,
              notification: todo.notification
            };
          });
          return firestoreData;
        }
      };
    }, []);
   

    const GetConverter = useMemo(() => {
      return {
        fromFirestore: (snapshot) => {
          const data = snapshot;
          const dataArray = Object.values(data).map(item => ({
            title: item.title,
            description: item.description,
            type: item.type,
            id: item.id,
            content: item.content,
            editing: item.editing,
            completed: item.completed,
            reserve: item.reserve,
            editingLock: item.editingLock,
            editingColor: item.editingColor,
            editingDateTime: item.editingDateTime,
            notification: item.notification
          
          }));
          return dataArray;
        }
      };
    }, []);

 

    useEffect(() => {
      const setTodosToFirestore = async () => {
        if (!uid) {
          console.log('')
          return;
        }
            try {
              const convertedData = todosConverter2.toFirestore(todos);
              const dataWithUid = { todoId: user.uid, todos: convertedData };
              await setDoc(doc(firestore, "todoList3", user.uid), dataWithUid);
            
            } catch (error) {
              console.error('Error adding todoList to Firestore:', error);
            } finally {
              setLoading(false);
            }
      }
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setTodosToFirestore(todos, user.uid);
        } else {
          console.log("User signed out or not yet logged in");
        }
      });

    return () => unsubscribe();
    }, [dispatch, todos, firestore, todosConverter2])   
    
   

useEffect(() => {
  
  const fetchTodosFromFirestore = async (uid) => {
      try {
          const todoDocRef = doc(firestore, 'todoList3', uid);
          const snapshot =  await getDoc(todoDocRef);
          
          // ドキュメントが存在する場合のみ処理を続行
          if (snapshot.exists()) {
            const data2 = snapshot.data();
            const datatodos = data2.todos || []; // todos配列にアクセス
            const getData = GetConverter.fromFirestore(datatodos); 
              setData(true)
              // getData がオブジェクトである場合、配列にラップする
              const newFetchedData = Array.isArray(getData) ? getData : [getData];    
              // fetchedData が null でないことを確認してから処理を続行

                if (newFetchedData !== null && newFetchedData.length > 0) {
                    setFetchedData(newFetchedData);
                    setData(true);
                    fetchedDataRef.current = newFetchedData;
                    dispatch({ type: 'FETCH_TODOS', payload: newFetchedData || []});
                  } 
              }
            } catch (error) {
              console.error('Error fetching todoList to Firestore:', error);
            } finally {
              setLoading(false);
            }  
        }
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (!todosChanged) {
                fetchTodosFromFirestore(user.uid);
              } else {
                console.log("User signed out");
              }   
        });
        
        return () => unsubscribe();
  
    }, [GetConverter, dispatch]);




useEffect(() => {
  const AddTodos = async () => {

        try {
          const convertedData = todosConverter2.toFirestore(todos);
          const dataWithUid = { todoId: user.uid, todos: convertedData };
          await setDoc(doc(firestore, "todoList3", user.uid), dataWithUid);
        
        } catch (error) {
          console.error('Error adding todoList to Firestore:', error);
        } finally {
          setLoading(false);
        }
    }
      if (AddTodosExecuted) {
        AddTodos();  
      }
},[AddTodosExecuted, dispatch, todos, GetConverter, todosConverter2])    
    
   
 
    return (
        <AsyncLogic.Provider value={{data, setData, loading, setLoading,
          fetchedData, setFetchedData, todoList, user, uid, firestore,
          convertdedNotificationData, setComvertedNotificationData, setTodosChanged
        }} >
            {children}
        </AsyncLogic.Provider>
    )
}

AsyncContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAsyncContext = () => useContext(AsyncLogic);
export { useAsyncContext , AsyncContextProvider } 




