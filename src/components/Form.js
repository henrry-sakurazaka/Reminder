import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatchTodos , useTodos , FirestoreContext } from "../context/TodoContext";
import { collection, setDoc, addDoc, doc, deleteDoc, updateDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db, app, firestore} from "../firebase";
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/app"; // firebaseモジュールをインポート


const Form = () => {
    
    const dispatch = useDispatchTodos();
    const dispatch2 = useDispatchTodos();
    const { todos, task,
            enteredTodo, setEnteredTodo,
            
    } = useTodos();
   
    const addTodo = () => {
        const newTodo = {
            title: enteredTodo,
            description: enteredTodo,
            type: "string",
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
            editing: false,
            completed: false,
            reserve: false,
            editingLock: false,
            editingColor: false,
            editingDateTime: false
        };
        dispatch2({ type: "todo/add", todo: newTodo, editing: false });
        setEnteredTodo("");
    }

    const allComplete = () => {
        const neoTodo = {
            completed: true
        };
        dispatch({type: "todo/reset", todo: neoTodo, editing: false });   
    }
   
   
    
    return(
        <div>  
            <input type="text" value={enteredTodo} id="task" name="task" 
            onChange={(e) => {
                setEnteredTodo(e.target.value)}}/>
                <div className="flex-box">
                    <button className="add" onClick={() => addTodo()}>
                        <div className="plus">
                            <span className="gif1"></span>
                            <span className="gif2"></span>
                        </div>
                    </button>
                    <button className="reset2" onClick={() => allComplete()}>
                        <div className="reset">
                            <img src="/icon_007476_32.png" alt="reset"></img>
                        </div>
                    </button>
                </div>       
        </div>

    );
       
}

export default Form;