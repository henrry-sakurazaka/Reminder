
import React, { useMemo } from "react";
import { createContext , useState, useRef, useEffect, useContext} from "react";
import { useDispatchTodos, useTodos } from "./TodoContext";
import { firestore} from "../firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import firebaseConfig from "../firebase";
import { collection, doc, setDoc, getDoc, addDoc} from 'firebase/firestore';
import TodoList from "../components/TodoList";

// const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);
const AsyncLogic = createContext();


const AsyncContextProvider = ({ children }) => {
    const {todos, todoList} = useTodos();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState();  
   
     console.log('first todos:', todos)
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
      return {
        fromFirestore: (snapshot, options) => {
          const data = snapshot.data(options);
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
     
    

//     const GetConverter = {
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         const dataArray = Object.values(data);
//         return dataArray;
//     }
// }

 // class TodosList {
  //   constructor(title, description, type, id, content, editing,
  //      completed, reserve, editingLock, editingColor, editingDateTime) {
  //       this.title = title;
  //       this.description = description;
  //       this.type = type;
  //       this.id = id;
  //       this.content = content;
  //       this.editing = editing;
  //       this.completed = completed;
  //       this.reserve = reserve;
  //       this.editingLock = editingLock;
  //       this.editingColor = editingColor;
  //       this.editingDateTime = editingDateTime;
  //   }
  //   toString() {
  //     return this.title + ',' +
  //       this.description + ',' +
  //       this.type + ',' +
  //       this.id + ',' +
  //       this.content + ',' +
  //       this.editing + ',' +
  //       this.completed + ',' +
  //       this.reserve + ',' +
  //       this.editingLock + ',' +
  //       this.editingColor + ',' +
  //       this.editingDateTime ;       
  //   } 
  
  // }

  // const newTaskConverter = {
  //   toFirestore: (TodosList) => {
  //       return {
  //           title: TodosList.title,
  //           description: TodosList.description,
  //           type: TodosList.type,
  //           id: TodosList.id,
  //           content: TodosList.content,
  //           editing: TodosList.editing,
  //           completed: TodosList.completed,
  //           reserve: TodosList.reserve,
  //           editingLock: TodosList.editingLock,
  //           editingColor: TodosList.editingColor,
  //           editingDateTime: TodosList.editingDateTime
  //       };
  //     } 
  // }

//  const GetConverter1 = {
//     fromFirestore: (snapshot, options) => {
//       const data = snapshot.data(options);

//     return new TodosList(data.title, data.description, data.type,
//       data.content, data.editing, data.completed, data.reserve,
//       data.editingLock, data.editingColor, data.editingDateTime);
    
//     }
//    }
    
    useEffect(() => {
    const fetchTodosFromFirestore = async () => {
        try {
        const todoCollectionRef = collection(firestore, 'todoList2');
        const todoDocRef = doc(todoCollectionRef, 'newTask');
        // const converter2 = todosConverter2.toFirestore(todos)
        // await addDoc(todoDocRef, converter2);
        const snapshot =  await getDoc(todoDocRef);
        // ドキュメントが存在する場合のみ処理を続行
        if (snapshot.exists()) {
          // console.log('snapshot',snapshot)
            const getData = GetConverter.fromFirestore(snapshot); 
            setData(todos)
            console.log('getData', getData)
            // getData がオブジェクトである場合、配列にラップする
            const newFetchedData = Array.isArray(getData) ? getData : [getData];    
            // fetchedData が null でないことを確認してから処理を続行
              console.log('newFetchedData:',newFetchedData)
              if (newFetchedData !== null && newFetchedData.length > 0) {
                  setFetchedData(newFetchedData);
                  setData(newFetchedData);
                  fetchedDataRef.current = newFetchedData;
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
      }, [GetConverter, dispatch]);



    // const todosConverter3 = useMemo(() => todosConverter2, [fetchedData]);

        useEffect(() => {
          const saveNewDataToFirestore = async () => {
                try {    
                    const todoCollectionRef = collection(firestore, 'todoList2');
                    const newDocRef = doc(todoCollectionRef, 'newTask');    
                    if(fetchedData !== null && fetchedData !== undefined && fetchedData.length !== 0) {
                        const converter = todosConverter2.toFirestore(todos);
                        console.log('converter:',converter)
                        await setDoc(newDocRef, converter);    
                        console.log('New data saved to Firestore:');   
                    }
              } catch (error) {
                console.error('Error saving new data to Firestore:', error);
              }
          };
          
          // 新しいデータがセットされた場合に Firestore に保存
          if (fetchedData !== null && fetchedData !== undefined && fetchedData.length !== 0) {
            saveNewDataToFirestore();
          }
      
        }, [todos, fetchedData, loading, todosConverter2 ]);
      
    
    console.log('fetchedData:', fetchedData)
    console.log('todos:', todos)
    console.log('data:',data)
    console.log('loading:' , loading)

     // const fetchedDataRef = useRef(null);
                
      // useEffect(() => {
      //   const saveTodoListToFirestore = async () => {
      //     try { 
      //       const todoCollectionRef = collection(firestore, 'todoList2');
      //       const todoDocRef = doc(todoCollectionRef);
      //       // const snapshot =  await getDoc(todoDocRef);
      //       // Firestoreのクエリを作成
      //       const q = query(collection(firestore, 'todoList2'), 
      //                 orderBy('newTask', 'desc'), limit(1));
      
      //       // クエリを実行して最新のドキュメントを取得
      //       const querySnapshot = await getDocs(q);
         
      //       const getData = GetConverter.fromFirestore(querySnapshot); 
        
      //       // const fetchData = querySnapshot.data();
            
      //       if (getData.empty) {
      //         getData.forEach(doc => {
      //               // ドキュメントのデータを取得
      //               const data = doc.data();
      //               console.log('Latest document:', data);
      //               // 特定のフィールドをログに出力
      //               console.log('SomeField:', data.newTask);
      //           });
      //       } else {
      //           console.log('No documents found.');
      //       }


            // console.log(snapshot)
            // const fetchedData = snapshot.data();
           
            
            // if (fetchedData && fetchedData.length > 0) {
            // const getData = snapshot.docs.map(doc => doc.data());
            // }
            // if (fetchedData !== fetchedDataRef.current) {
            //   setFetchedData(getData);
            //   fetchedDataRef.current = fetchedData; // fetchedDataを更新
            // }
        
      //       console.log(fetchedData)
      //       //データを状態に保存  
      //     } catch (error) {
      //       console.error('Error saving todoList to Firestore:', error);
      //     }
          
      //   }; 
      
      //  // 非同期関数を呼び出すため、関数を即時実行する必要があります
      //   saveTodoListToFirestore();
      // }, [todos]);
    
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


     
    
      // const todosConverter3 = useMemo(() => todosConverter2(todos), [todos, todosConverter2]);
      // return todosConverter3;

      // useEffect(() => {
      //   const saveNewDataToFirestore = async () => {
      //     try {
      //       const todoCollectionRef = collection(firestore, 'todoList2');
      //       const newDocRef = doc(todoCollectionRef, 'newTask');
      //       const todosConverter3 = useMemo(() => todosConverter2(), [todos]);
      //       const converter = todosConverter3.toFirestore(todos);
      //       await setDoc(newDocRef, converter);
            
      //       console.log('New data saved to Firestore:');
      //     } catch (error) {
      //       console.error('Error saving new data to Firestore:', error);
      //     }
      //   };
    
      //   // 新しいデータがセットされた場合に Firestore に保存
      //   if (fetchedData!== null && undefined) {
      //     saveNewDataToFirestore(todos);
      //   }
      // }, [todos, fetchedData, todosConverter2]);  
    
    
  

  // ここで todos の変更が発生する処理を実装し、dispatch 関数を使用して更新する


      // useEffect(() => {
      //   const saveTodoListToFirestore = async () => {
      //     try { 
      //       const todoCollectionRef = collection(firestore, 'todoList2');
      //       // Firestore に todoList を保存する非同期処理  
      //       if(todos && todos.length > 0 ) {
      //         console.log(todos)
      //         const todosConverter2 = todosConverter.toFirestore(todos);
      //         console.log(todosConverter2)

             
      //         const newTodoRef = await addDoc(todoCollectionRef, todosConverter2);
      //         // const documentID = newTodoRef.id; // 新しいドキュメントのIDを取得する
      //         // console.log(documentID)
      //         const todoDocRef = doc(todoCollectionRef, 'newTask');
      //         console.log(todoDocRef)
      //         await setDoc(todoDocRef, todosConverter2); // setDoc の引数は (ref, data) です 
      //         const snapshot =  await getDoc(todoDocRef);
      //         console.log(snapshot)
      //         // const fetchedData = snapshot.docs.map(doc => doc.data()); 
      //         const fetchedData = GetConverter.fromFirestore(snapshot); 
      //         // if (fetchedData && fetchedData.length > 0) {
      //         // const getData = snapshot.docs.map(doc => doc.data());
      //         // }
      //         if (fetchedData !== fetchedDataRef.current) {
      //           setFetchedData(fetchedData);
      //           fetchedDataRef.current = fetchedData; // fetchedDataを更新
      //         }
      //       }
      //         console.log(fetchedData)
      //         //データを状態に保存  
      //     } catch (error) {
      //       console.error('Error saving todoList to Firestore:', error);
      //     }
          
      //   }; 
      
      //   // 非同期関数を呼び出すため、関数を即時実行する必要があります
      //   saveTodoListToFirestore();
      // }, [todos]);
    
      // useEffect(() => {
      //   const AddTodos = async () => {
      //     try {
      //       const todoCollectionRef = collection(firestore, 'todoList2');
      //       const documentID = todoCollectionRef.id;
      //       const todoDocRef = doc(todoCollectionRef, documentID); 
      //       const snapshot =  await getDoc(todoDocRef);
      //       const getData = GetConverter.fromFirestore(snapshot); 
      //       console.log(getData)

      //           // setAddTodosExecuted(true); // データの取得が成功した後にステートを更新
              
      //           const Data = {
                
      //             title: enteredTodo,
      //             description: enteredTodo,
      //             type: "string",
      //             id: getData.id,
      //             content: enteredTodo,
      //             editing: true,
      //             completed: false,
      //             reserve: false,
      //             editingLock: false,
      //             editingColor: false,
      //             editingDateTime: false,
                  
                  
      //           };
      //           dispatch({ type: 'todo/add', todo: Data, editing: false });
      //           setTodosData(Data);
      //           console.log('Todos added to Firestore successfully');
          
      //     } catch (error) {
      //       console.error('Error adding todoList to Firestore:', error);
      //     }
      //   }
      //   if (AddTodosExecuted) {
      //     AddTodos();
          
      // }
      // },[AddTodosExecuted])
       
        
      
      
      
      //Todo追加
      // const AddTodos = async () => {
       
      //   try {
            
      //       const todoCollection = collection(firestore, 'todoList');
      //       // const newGetConverter = GetConverter.fromFirestore(newTask);
      //         // Firestore に保存するデータを作成
      //       // const newTaskData = todosConverter.toFirestore(todos);
        
      //       // const newTodoDocRef = doc(todoCollection, 'newTask'); // 新しいドキュメントの参照を取得
      //       // 新しいドキュメントにデータをセット
      //       const newTodoRef =  addDoc(todoCollection, { })

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
          fetchedData, setFetchedData, todoList
        }} >
            {children}
        </AsyncLogic.Provider>
    )
}


const useAsyncContext = () => useContext(AsyncLogic);
export { useAsyncContext , AsyncContextProvider };