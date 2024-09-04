import React from "react";
import { useState, useEffect, useCallback} from "react";
import { useDispatchTodos , useTodos } from "../context/TodoContext";
import { doc, updateDoc } from 'firebase/firestore';
import { auth } from "../firebase";


    

const Form = () => {
    const dispatch = useDispatchTodos(); 
    const { enteredTodo, setEnteredTodo,
            setAddTodosExecuted       
    } = useTodos();
    // const user = auth.currentUser;
    // const [uid, setUid] = useState(); // uidの初期化
    
   
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
            editingDateTime: false,
            notification: false
        };
        dispatch({ type: "todo/add", todo: newTodo, editing: false });
        setEnteredTodo("");
        setAddTodosExecuted(true);
    }

    const allComplete = () => {
        const neoTodo = [];
        dispatch({type: "todo/reset", todo: neoTodo });   
    }

    

// const UseMidleTodos = (todoList, uid, firestore) => {

    
//     const handleResetTodos = useCallback(async () => {
//       try {
//         const todoDocRef = doc(firestore, 'todoList3', uid);
//         await updateDoc(todoDocRef, { todos: [] });
//         console.log('Todos successfully reset');
//       } catch (error) {
//         console.error('Error resetting todos:', error);
//       }
//     }, [firestore, uid]);
  
//     // Effect to watch for reset action
//     useEffect(() => {
//       if (todos.length === 0) {
//         handleResetTodos();
//       }
//     }, [todos, handleResetTodos]);
  
//     return [todos, dispatch];
//   };
   
    
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