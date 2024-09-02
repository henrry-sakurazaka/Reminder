import React from "react";
import { useState } from "react";
import { useDispatchTodos, useTodos } from "../context/TodoContext";
import Modal from "./Modal";


const Edit= ({todo}) => {
    const [isDate, setIsDate] = useState(new Date());
    const [isTime, setIsTime] = useState(new Date());
    const { setModalOpen,
        setReserveModeTodo, setReserveModeId,
        isDateChecked, isTimeChecked, 
        setIsDateChecked, setIsTimeChecked,
        isContainerDateCheck, setContainerDateCheck,
        isContainerTimeCheck, setContainerTimeCheck,
        modalOpen,
        displayDatePicker, displayTimePicker, 
        isTimeSet, isDateSet, setIsTimeSet, setIsDateSet,
        setSelectedDate, setSelectedTime,
        completedDateTimeSetting,  setCompletedDateTimeSetting,
        setNotificationDocId, isSubmitting, setIsSubmitting,
        setIsDocRef, reseveModeTodo, reserveModeId, Todo, setTodo,
        setShouldHandleNotifications, isSubmitting2, setIsSubmitting2

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
    const toggleReseveMode = (todo) => {  
      console.log(todo.content)
        //   modalOpen ?  setModalOpen(false): setModalOpen(true); 
        //   const newEditingLock = !todo.editingLock; // editingLock をトグル 
        //   const newEditingDateTime = !todo.editingDateTime;
        const newEditingColor = !todo.editingColor; // editingColor をトグル 
        const neoTodo7 = {
            ...todo, 
            editingDateTime: true,
            editingColor: newEditingColor,
            editingLock: true,
            id: todo.id,
            content: todo.content
        }
        dispatch({type: "todo/reserve", todo: neoTodo7 });
        dispatch({type: "todo/reserveColor", todo: neoTodo7});
        dispatch({type: "todo/editingDateTime", todo: neoTodo7})
        setModalOpen(prev => !prev ); 
        setReserveModeTodo(todo);
        setReserveModeId(todo.id);
        setTodo(todo);

        !modalOpen && setIsDateChecked(false);
        !modalOpen && setIsTimeChecked(false);
        !modalOpen && setContainerDateCheck(false); 
        !modalOpen && setContainerTimeCheck(false); 
        !modalOpen && setShouldHandleNotifications(false);  
    }

    
     return (
         <div key={todo.id} className="modalParent">
                <span className="circleI" onClick={() => toggleReseveMode(todo)}
                style={{color: isSubmitting2 && todo.editingColor && todo.editingDateTime && todo.editingLock ? 'yellow' :  !modalOpen && 'grey' }} >i</span> 
                
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

                {modalOpen && todo.id == Todo.id ?(
                <div key={todo.id}>
                    <Modal todo={Todo} /> 
                </div>    
                   
                )
                : null
            }
                           
        </div>      
    )     
 } 

export default Edit;


