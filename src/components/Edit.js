import React from "react";
import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

// import Todo2 from "../api/Todo2";


const Edit= ({todo}) => {
    const [editingContent, setEditingContent] = useState(todo.content);
    const dispatch = useDispatchTodos();

    
    const changeContent = (e) => {
        setEditingContent(e.target.value);
    }
    const toggleEditMode = () => {
        const newTodo = {...todo, editing: !todo.editing};
        dispatch({ type: "todo/update", todo: newTodo });
    }
    const confirmContent = (e) => {
        e.preventDefault();
        const neoTodo = {...todo, editing: !todo.editing ,content: editingContent };
        dispatch({ type: "todo/update", todo: neoTodo });
    }

    const complete = (todo) => {
        dispatch({ type: "todo/delete", todo });
    }

    const complete2 = (todo) => {
        const neoTodo2 = {...todo, completed: true };
        dispatch({type: "todo/complete", todo: neoTodo2 });
        
     }
    
    
    
     return (
        // completeTodo ? null :()
        <div key={todo.id}>
            <span className="circleI">i</span>
            <button className="compBtn" onClick={() => complete2(todo)} onDoubleClick={() => complete(todo)} style={{ color: todo.completed ? 'rgb(8, 232, 158)' : 'none' }}>
                {todo.completed ? 'Completed' : 'Complete'}
            </button>
            <form onSubmit={confirmContent} style={{ display: 'inline' }}>
                {todo.editing ? (
                    <input type="text"
                        value={editingContent}
                        onChange={changeContent} />)
                    :
                    <span onDoubleClick={toggleEditMode} style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'rgb(8, 232, 158)' : 'none' }}>
                        {todo.content}
                    </span>}
            </form>
        </div>
      
    )    
  
}
export default Edit;