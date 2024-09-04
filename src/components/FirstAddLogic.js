import React from "react";
import { useEffect, useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthentication } from './checkAuthentication';
import { createContext, useContext} from "react";
import { firestore} from "../firebase";
import { collection, doc, addDoc} from 'firebase/firestore';



const todoList = [
    {
      title: "Make a restaurant reservation",
      description: "user tasks",
      type: "string",
      id: 1,
      content: "Make a restaurant reservation",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false
    },
    { 
      title: "send a letter",
      description: "user tasks",
      type: "string",
      id: 2,
      content: "send a letter",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false
    },
    {
      title: "buy flowers",
      description: "user tasks",
      type: "string",
      id: 3,
      content: "buy flowers",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false
    }
  ]

const FirstAddLogic = createContext();

const FirstAddTodosProvider = ({ childeren }) => {

  const navigate = useNavigate(); 
  const [authenticated, setAuthenticated] = useState(false); // authenticatedを状態として宣言
  const [savedToDatabase, setSavedToDatabase] = useState(false); // 初回保存フラグ
  
  
  

  const todosConverter2 = useMemo(() => {
    return {
      toFirestore: (todoList) => {
        const todosArray = Object.values(todoList);
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
  
 
  useEffect(() => {
    checkAuthentication().then((authenticated) => {
      if (!authenticated) {
        navigate('/UserAuth'); // ログインしていない場合は認証ページにリダイレクト
        
      } else {
        // 初回のみデータベースに保存する条件を設定
        if (!savedToDatabase) {
          // データベースに保存する処理を実行
          saveNewDataToFirestore();
          // 初回保存フラグを立てる
          setSavedToDatabase(true);
        }
        if(savedToDatabase) {
            navigate('/Example');
        }
        setAuthenticated(true);
      }
    });
  }, [navigate]);

  // データベースにtodosを保存する関数
       const saveNewDataToFirestore =  async () => {
          console.log('yes')
              try {    
                  const todoCollectionRef = collection(firestore, 'todoList2');
                  const newDocRef = doc(todoCollectionRef, 'newTask');    
                  
                  const converter = todosConverter2.toFirestore(todoList);
                  await addDoc(newDocRef, converter);
             //   await setDoc(newDocRef, converter);    
                  console.log('First data saved to Firestore:');   
            
            } catch (error) {
              console.error('Error saving First data to Firestore:', error);
            }
        };
    return (
        <FirstAddTodosProvider value= { todoList }>
            { childeren }
        </FirstAddTodosProvider>
    )
}

const useFirstAddLogic = () => useContext(FirstAddLogic);

export { useFirstAddLogic , FirstAddTodosProvider };
