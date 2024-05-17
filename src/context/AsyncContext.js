
import React, { useMemo } from "react";
import { createContext , useState, useRef, useEffect, useContext} from "react";
import { useDispatchTodos, useTodos } from "./TodoContext";
import { firestore} from "../firebase";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import firebaseConfig from "../firebase";
import { collection, doc, setDoc, getDoc, addDoc, onSnapshot, getDocs} from 'firebase/firestore';
import TodoList from "../components/TodoList";

// const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);
const AsyncLogic = createContext();


const AsyncContextProvider = ({ children }) => {
    const { todos, todoList, addTask } = useTodos();
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    const [task, setTask] = useState('');
    const [docId, setDocId] = useState(''); 
    const  dispatch  = useDispatchTodos();
    // const todosArray = todos && Object.values(todos);
    const fetchedDataRef = useRef(null);

  

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
              editingDateTime: todo.editingDateTime
            };
          });
          return firestoreData;
        }
      };
    }, []);
    
  
    const GetConverter = useMemo(() => {
      console.log('hey')
      return {
        fromFirestore: (snapshot, options) => {
          const dataArray = snapshot.docs.map(doc => {
            const data = doc.data(options);
            console.log('fromFirestore data', data)
            return {
              title: data.title,
              description: data.description,
              type: data.type,
              id: data.id,
              content: data.content,
              editing: data.editing,
              completed: data.completed,
              reserve: data.reserve,
              editingLock: data.editingLock,
              editingColor: data.editingColor,
              editingDateTime: data.editingDateTime
            };
          });
          return dataArray;
        }
      };
    }, []);

    // const GetConverter = useMemo(() => {
    //   console.log('hey');
    //   return {
    //     fromFirestore: (snapshot, options) => {
    //       const dataArray = snapshot.docs.map(doc => {
    //         // ドキュメントデータを取得
    //         const data = doc.data(options);
    //         // データの構造に合わせて適切なプロパティを取得する
    //         const { title, description, type, id, content, editing, completed, reserve, editingLock, editingColor, editingDateTime } = data;
    //         console.log('fromFirestore data', data);
    //         // 適切なプロパティを含むオブジェクトを返す
    //         return {
    //           title,
    //           description,
    //           type,
    //           id,
    //           content,
    //           editing,
    //           completed,
    //           reserve,
    //           editingLock,
    //           editingColor,
    //           editingDateTime
    //         };
    //       });
    //       return dataArray;
    //     }
    //   };
    // }, []);
    

  //   useEffect(() => {
  //     const addTodos = async () => {
  //       console.log('yes')
  //           try {
  //             const todoCollectionRef = collection(firestore, 'todoList3');
  //             const todoDocRef = doc(todoCollectionRef);
  //             // const todoDocRef = doc(collection(firestore, 'todoList3'), 'todoList3'); 
  //             const convertedData = todosConverter2.toFirestore(todos)
  //             // 新しいドキュメントのデータとして変換されたデータを渡す
  //             const setDocRef = await setDoc(todoDocRef, convertedData);
  //             // await addDoc(todoDocRef, convertedData);
  //             const setDocRefId = setDocRef.id;
  //             setDocId(setDocRefId);
  //             setData(true);
      
  //           } catch (error) {
  //             console.error('Error saving todoList to Firestore:', error);
  //           }  
  //       };

  //       const effect = async () => {
  //         await addTodos();
  //       }

  //     if(addTask) {
  //       effect();
  //     }
      
  // }, [ dispatch, todos, todosConverter2, addTask ]);

  
 
  //   useEffect(() => {
  //    const fetchTodosFromFirestore = async () => {

  //       try {
  //         const todoCollectionRef = collection(firestore, 'todoList3');
  //         const todoDocRef = doc(todoCollectionRef);
  //         // const todoDocRef = doc(collection(firestore, 'todoList3'), todoCollectionRef.id).withConverter(GetConverter);     
  //         const snapshot = await getDoc(todoDocRef);
  //         console.log('snapshot',snapshot)
          
  //         if (snapshot.exists()) {
  //             console.log('Calling fromFirestore method');
  //             const getData =  GetConverter.fromFirestore(snapshot);
  //             console.log('getData', getData)
  //             const newFetchedData = Array.isArray(getData) ? getData : [getData];    
  //               console.log('newFetchedData:',newFetchedData)

  //               if (newFetchedData !== null && newFetchedData.length > 0) {
  //                   setFetchedData(newFetchedData);
  //                   setData(newFetchedData);
  //                   fetchedDataRef.current = newFetchedData;
  //                   dispatch({ type: 'FETCH_TODOS', payload: newFetchedData });
  //                   setData(true)
  //                 } 
  //               } 
  //           } catch (error) {
  //             console.error('Error fetching data from Firestore', error);
  //           } finally {
  //             setLoading(false);
  //           }
  //        }
         
  //       fetchTodosFromFirestore();
  //     }, [ todos, dispatch ]);

  
  //   console.log('docId',docId)
     
      useEffect(() => {
        const fetchTodosFromFirestore = async () => {
          try {
            const todoCollectionRef = collection(firestore, 'todoList2');
            const todoDocRef = doc(todoCollectionRef, 'newTask');
             // const converter2 = todosConverter2.toFirestore(todos)
             // await addDoc(todoDocRef, converter2);
            const snapshot =  await getDoc(todoDocRef);
            // ドキュメントが存在する場合のみ処理を続行
            console.log('snapshot', snapshot)
            if (snapshot.exists()) {
              const getData = GetConverter.fromFirestore(snapshot); 
              setData(todos);
              // getData がオブジェクトである場合、配列にラップする
             const newFetchedData = Array.isArray(getData) ? getData : [getData];    
              // fetchedData が null でないことを確認してから処理を続行
              console.log(newFetchedData)
              if (newFetchedData !== null && newFetchedData.length > 0) {
                  setFetchedData(newFetchedData);
                  fetchedDataRef.current = newFetchedData;
                  // console.log(fetchedData)
                  dispatch({ type: 'FETCH_TODOS', payload: newFetchedData });
                } 
            }
          } catch (error) {
            console.error('Error saving todoList to Firestore:', error);
          } finally {
            setLoading(false);
          }
        }
        // 非同期関数を呼び出すため、関数を即時実行する必要があります
        fetchTodosFromFirestore();
      }, []);


      // 
    
    console.log('fetchedData:', fetchedData)
    console.log('todos:', todos)
    console.log('data:',data)
    console.log('loading:' , loading)

      
    return (
        <AsyncLogic.Provider value={{data, setData, loading, setLoading,
          fetchedData, setFetchedData, todoList
        }} >
            {children}
        </AsyncLogic.Provider>
    )
}


const useAsyncContext = () => useContext(AsyncLogic);
export { useAsyncContext , AsyncContextProvider };