import React from "react";
import { useState } from "react";
import { useDispatchTodos, useTodos } from "../context/TodoContext";
import Modal from "./Modal";


// import Todo2 from "../api/Todo2";


const Edit= ({todo}) => {
    const { modalOpen, setModalOpen,
        setIsDateChecked, setIsTimeChecked,
        setContainerTimeCheck, setContainerDateCheck,
      } = useTodos();
    const [editingContent, setEditingContent] = useState(todo.content);
    const dispatch = useDispatchTodos();
    // const { isTimeCheck, setIsTimeCheck, isDateCheck, setIsDateCheck} = useTodos();
  
        
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
        dispatch({type: "complete2", todo: neoTodo2 });
     }
    const toggleReseveMode = (_todo) => {  
        //   modalOpen ?  setModalOpen(false): setModalOpen(true); 
        //   const newEditingLock = !todo.editingLock; // editingLock をトグル 
        //   const newEditingDateTime = !todo.editingDateTime;
        const newEditingColor = !todo.editingColor; // editingColor をトグル 
        const neoTodo7 = {
            ...todo, 
            editingDateTime: true,
            editingColor: newEditingColor,
            editingLock: true
        }
        dispatch({type: "todo/reserve", todo: neoTodo7 });
        dispatch({type: "todo/reserveColor", todo: neoTodo7});
        dispatch({type: "todo/editingDateTime", todo: neoTodo7})
        setModalOpen(prev => !prev ); 
        !modalOpen && setIsDateChecked(false);
        !modalOpen && setIsTimeChecked(false);
        !modalOpen && setContainerDateCheck(false); 
        !modalOpen && setContainerTimeCheck(false);
    }
   
    

     return (
         <div key={todo.id} className="modalParent">
                <span className="circleI" onClick={() => toggleReseveMode()}
                style={{color: modalOpen && todo.editingColor && todo.editingDateTime && todo.editingLock ? 'yellow' :  !modalOpen && 'grey' }} >i</span> 
                
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

                {modalOpen ?(
                <div key={todo.id}>
                    <Modal todo={todo}/> 
                </div>    
                   
                )
                : false
            }
                           
        </div>      
    )     
 } 

export default Edit;


