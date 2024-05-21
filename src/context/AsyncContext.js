
import React from "react";
import { useCallback } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext , useState, useRef, useEffect, useContext, useMemo} from "react";
import { useDispatchTodos, useTodos } from "./TodoContext";
import { firestore, auth } from "../firebase";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';


const firebaseApp = initializeApp(firebaseConfig);
const AsyncLogic = createContext();


const AsyncContextProvider = ({ children }) => {

    const { todos, todoList, AddTodosExecuted } = useTodos();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]); 
    const  dispatch  = useDispatchTodos();
    const user = auth.currentUser;
    const [uid, setUid] = useState(); // uidの初期化
    
    // const todosArray = todos && Object.values(todos);
    const fetchedDataRef = useRef(null);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('User is signed in:', user);
          console.log('uid:', user.uid);
          setUid(user.uid); 
        } else {
          console.log('No user is signed in');
        }
      });
    
      return () => unsubscribe();
    }, []);
    
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       console.log('uid:', user.uid); 
    //       const todoDocRef = doc(firestore, 'todoList3', user.uid);
    //       // ここでtodoDocRefを使用してFirestoreにアクセスする他のコードを実行する
    //     }
    //   });
    
    //   return () => unsubscribe();
    // }, []);
     
    
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
      return {
        fromFirestore: (snapshot, options) => {
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
            editingDateTime: item.editingDateTime
          }));
          return dataArray;
        }
      };
    }, []);
     
    
    // const GetConverter = useMemo(() => {
    //   return {
    //     fromFirestore: (snapshot, options) => {
    //       const data = snapshot;
    //       const dataArray = Object.values(data).map(item => {
    //         // titleがnullでないことを確認してからプロパティを読み取る
    //         if (item.title !== null) {
    //           return {
    //             title: item.title,
    //             description: item.description,
    //             type: item.type,
    //             id: item.id,
    //             content: item.content,
    //             editing: item.editing,
    //             completed: item.completed,
    //             reserve: item.reserve,
    //             editingLock: item.editingLock,
    //             editingColor: item.editingColor,
    //             editingDateTime: item.editingDateTime
    //           };
    //         } else {
    //           // titleがnullの場合はデフォルトの値などを設定するか、適切に処理する
    //           return {
    //             title: 'Default Title',
    //             description: '',
    //             type: '',
    //             id: '',
    //             content: '',
    //             editing: false,
    //             completed: false,
    //             reserve: '',
    //             editingLock: false,
    //             editingColor: '',
    //             editingDateTime: ''
    //           };
    //         }
    //       });
    //       return dataArray;
    //     }
    //   };
    // }, []);
    
//     const GetConverter = {
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         const dataArray = Object.values(data);
//         return dataArray;
//     }
// }



useEffect(() => {
    
  const fetchTodosFromFirestore = async () => {
    // if(user.uid) {
    //   console.log('UID is null, fetchTodosFromFirestore will not execute');
    //   return;
    // }
   
      try {
          // const todoCollectionRef = collection(firestore, 'todoList3');
          const todoDocRef = doc(firestore, 'todoList3',user.uid);
          // const converter2 = todosConverter2.toFirestore(todos)
          // await addDoc(todoDocRef, converter2);
          const snapshot =  await getDoc(todoDocRef);
          console.log(snapshot)
          // ドキュメントが存在する場合のみ処理を続行
          if (snapshot.exists()) {
            const data2 = snapshot.data();
            const datatodos = data2.todos || []; // todos配列にアクセス

              const getData = GetConverter.fromFirestore(datatodos); 
              setData(true)
              // getData がオブジェクトである場合、配列にラップする
              const newFetchedData = Array.isArray(getData) ? getData : [getData];    
              // fetchedData が null でないことを確認してから処理を続行
                console.log('newFetchedData:',newFetchedData)
                if (newFetchedData !== null && newFetchedData.length > 0) {
                    setFetchedData(newFetchedData);
                    setData(true);
                    fetchedDataRef.current = newFetchedData;
                    dispatch({ type: 'FETCH_TODOS', payload: newFetchedData || []});
                  } 
              }
            } catch (error) {
              console.error('Error saving todoList to Firestore:', error);
            } finally {
              setLoading(false);
            }  
        }
      fetchTodosFromFirestore();  
    }, [GetConverter, dispatch]);


  
useEffect(() => {
  
  const AddTodos = async () => {

        try {
          // const todoCollectionRef = collection(firestore, 'todoList3');
          const todoDocRef = doc(firestore, 'todoList3', user.uid);
          const convertedData = todosConverter2.toFirestore(todos);
          const dataWithUid = { uid: user.uid, todos: convertedData };
          await setDoc(doc(firestore, "todoList3", user.uid), dataWithUid);
          console.log('add')
          console.log('Todos added to Firestore successfully');
        
        } catch (error) {
          console.error('Error adding todoList to Firestore:', error);
        } finally {
          setLoading(false);
        }
    }
      if (AddTodosExecuted) {
        console.log('addTodo')
        AddTodos();  
      }
},[AddTodosExecuted, dispatch, todos, GetConverter, todosConverter2]);






    // // const todosConverter3 = useMemo(() => todosConverter2, [fetchedData]);

    //     useEffect(() => {
    //       const saveNewDataToFirestore = async () => {
    //         console.log('yes')
    //             try {    
    //                 const todoCollectionRef = collection(firestore, 'todoList3');
    //                 const newDocRef = doc(todoCollectionRef, user.uid);    
    //                 if(fetchedData !== null && fetchedData !== undefined && fetchedData.length !== 0) {
    //                     const converter = todosConverter2.toFirestore(todos);
    //                     console.log('converter:',converter)
    //                     await setDoc(newDocRef, converter);    
    //                     console.log('New data saved to Firestore:');   
    //                 }
    //           } catch (error) {
    //             console.error('Error saving new data to Firestore:', error);
    //           }
    //       };
          
    //       // 新しいデータがセットされた場合に Firestore に保存
    //       if (fetchedData !== null && fetchedData !== undefined && fetchedData.length !== 0) {
    //         saveNewDataToFirestore();
    //       }
      
    //     }, [todos, fetchedData, loading, todosConverter2 ]);
      
    
    console.log('fetchedData:', fetchedData)
    console.log('todos:', todos)
    console.log('data:',data)
    console.log('loading:' , loading)

     
      // useEffect(() => {
      //   const saveTodoListToFirestore = async () => {
      //     try { 
      //       const todoCollectionRef = collection(firestore, 'todoList2');
        
      //         const todoDocRef = doc(todoCollectionRef, 'newTask');
      //         const snapshot =  await getDoc(todoDocRef);
      //         // console.log(snapshot)
      //         // const fetchedData = snapshot.docs.map(doc => doc.data()); 
      //         const fetchedData = GetConverter.fromFirestore(snapshot); 
      //         // if (fetchedData && fetchedData.length > 0) {
      //         // const getData = snapshot.docs.map(doc => doc.data());
      //         // }
      //         if (fetchedData !== fetchedDataRef.current) {
      //           const dataArray = [fetchedData];
      //           setFetchedData(dataArray);
      //           fetchedDataRef.current = fetchedData; // fetchedDataを更新
      //         }
      //         //データを状態に保存  
      //         dispatch({type: 'SET_TODOS', todo: fetchedData })
      //     } catch (error) {
      //       console.error('Error saving todoList to Firestore:', error);
      //     } 
      //   }
      //   // 非同期関数を呼び出すため、関数を即時実行する必要があります
      //   saveTodoListToFirestore();
      // }, [todos]);

      
      // useEffect(() => {
      //   const fetchTodosFromFirestore = async () => {
      //     try {
      //       const todoCollectionRef = collection(firestore, 'todoList2');
        
      //       const todoDocRef = doc(todoCollectionRef, 'newTask');
      //       const snapshot =  await getDoc(todoDocRef);
      //       // ドキュメントが存在する場合のみ処理を続行
      //       if (snapshot.exists()) {
      //         const getData = GetConverter.fromFirestore(snapshot); 
      //         // getData がオブジェクトである場合、配列にラップする
      //        const newFetchedData = Array.isArray(getData) ? getData : [getData];    
      //         // fetchedData が null でないことを確認してから処理を続行
      //         // console.log(newFetchedData)
      //         if (newFetchedData !== null && newFetchedData.length > 0) {
      //             setFetchedData(newFetchedData);
      //             fetchedDataRef.current = newFetchedData;
      //             // console.log(fetchedData)
      //             dispatch({ type: 'FETCH_TODOS', payload: newFetchedData });
      //           } 
      //       }
      //     } catch (error) {
      //       console.error('Error saving todoList to Firestore:', error);
      //     } 
      //   }
      //   // 非同期関数を呼び出すため、関数を即時実行する必要があります
      //   fetchTodosFromFirestore();
      // }, []);

  
      // const AddTodos = async () => {
       
      //   try {
            
      //       const todoCollection = collection(firestore, 'todoList');
      //       // const newGetConverter = GetConverter.fromFirestore(newTask);
      //         // Firestore に保存するデータを作成
      //       // const newTaskData = todosConverter.toFirestore(todos);
        
      //       // const newTodoDocRef = doc(todoCollection, 'newTask'); // 新しいドキュメントの参照を取得
      //       // 新しいドキュメントにデータをセット
      //       const newTodoRef =  await addDoc(todoCollection, { })

      //       const snapshot = await getDoc(newTodoRef);
      //       const todosData = [snapshot.data()];
      //       const dataTodo = { 
      //         id: todosData.id, 
      //         content: todosData.content,
      //         completed: false }; 
      //       dispatch({ type: 'set-snap', todo: dataTodo, editing: false });
      

      //     console.log('Todos added to Firestore successfully');
      //   } catch (error) {
      //     console.error('Error adding todoList to Firestore:', error);
      //   }
      // };

      
    
   
   
      // // Todo削除
      // const deleteTodo = async todoId => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await deleteDoc(todoDocRef);
      //   dispatch({ type: 'todo/delete', payload: todoId });
      // };
    
      // // Todo更新
      // const updateTodo = async (todoId, updatedFields) => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await updateDoc(todoDocRef, updatedFields);
      //   dispatch({ type: 'todo/update', payload: { id: todoId, updatedFields } });
      // };
      // // Todoリセット
      // const resetTodo = async (todoId, updatedFields) => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await updateDoc(todoDocRef, updatedFields);
      //   dispatch({ type: 'todo/reset', payload: { id: todoId, updatedFields } });
      // };
      // // タイマー予約
      // const reserveTodo = async (todoId, updatedFields) => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await updateDoc(todoDocRef, updatedFields);
      //   dispatch({ type: 'todo/reserve', payload: { id: todoId, updatedFields } });
      // };
      // // Todo予約色
      // const reserveColor = async (todoId, updatedFields) => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await updateDoc(todoDocRef, updatedFields);
      //   dispatch({ type: 'todo/reserveColor', payload: { id: todoId, updatedFields } });
      // };
      // // Todo日時編集
      // const editingDateTime = async (todoId, updatedFields) => {
      //   const todoDocRef = doc(firestore, 'todoList', todoId);
      //   await updateDoc(todoDocRef, updatedFields);
      //   dispatch({ type: 'todo/editingDateTime', payload: { id: todoId, updatedFields } });
      // };
    
    return (
        <AsyncLogic.Provider value={{data, setData, loading, setLoading,
          fetchedData, setFetchedData, todoList, user, uid, firestore
        }} >
            {children}
        </AsyncLogic.Provider>
    )
}


const useAsyncContext = () => useContext(AsyncLogic);
export { useAsyncContext , AsyncContextProvider } 
