import React from "react";
import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";




const Form = () => {
    const [enteredTodo, setEnteredTodo ] = useState("");  
    const dispatch = useDispatchTodos();

    const addTodo = () => {
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        };
        dispatch({ type: "todo/add", todo: newTodo, editing: false });
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
            <input type="text" value={enteredTodo} onChange={(e) => {
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