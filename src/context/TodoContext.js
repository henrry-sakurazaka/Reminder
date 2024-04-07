import React from "react";
import { createContext, useContext, useReducer, useState } from "react";

 const todoList = [
    {
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
        id: 3,
        content: "buy flowers",
        editing: false,
        completed: false,
        reserve: false,
        editingLock: false,
        editingColor: false,
        editingDateTime: false
        
    },
];


 const TodoContext = createContext();
 const TodoDispatchContext = createContext();
 

 const todoReducer = (todos, action ) => {
   
    switch( action.type ) {

        case 'todo/add':
            return [...todos, action.todo ];

        case 'todo/delete':
            return todos.filter((todo) => {
                return todo.id !== action.todo.id;
            })
    
        case 'todo/update':
            return todos.map(_todo => {
                return _todo.id === action.todo.id ? 
                {..._todo, ...action.todo} : {..._todo};
            })

        case 'todo/complete':
            return todos.map(todo => {
                return todo.id === action.todo.id ?
                {...todo, ...action.todo} : {...todo};
            }) 
        case 'todo/reset':
            return todos.filter((todo) => {
                return null;
            })
        case 'todo/reserve':
            return todos.map(_todo => {
                return _todo.id === action.todo.id ?
                 { ..._todo, editingLock: true} 
                 : { ..._todo, editingLock: false };
            })
        case 'todo/reserveColor':
            return todos.map(_todo => {
                return _todo.editingDateTime ?
                 { ..._todo, editingColor: true} 
                 : { ..._todo, editingColor: false};
            })
         case 'todo/editingDateTime':
            return todos.map(_todo => {
                return _todo.editingLock ?
                 { ..._todo, editingDateTime: true} 
                 :{..._todo, editingDateTime: false}
                 
            })  
            
        

        default : return todos; 
    }   
 }



 const TodoProvider = ({ children }) => {
 
    const [ todos, dispatch ] = useReducer(todoReducer, todoList);
    const [modalOpen, setModalOpen ] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDateChecked, setIsDateChecked] = useState(false);
    const [isTimeChecked, setIsTimeChecked] = useState(false);
    const [isContainerDateCheck, setContainerDateCheck] = useState(false);
    const [isContainerTimeCheck, setContainerTimeCheck] = useState(false);
    const [selectedTime, setSelectedTime] = useState("12:00");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleTimeChange = (event) => {    
        setSelectedTime(event.target.value);
      };
      
    return (
        <TodoContext.Provider value=
            {{ todos, handleDateChange, 
            isDateChecked, setIsDateChecked, isTimeChecked , setIsTimeChecked, 
            isContainerTimeCheck, setContainerTimeCheck, isContainerDateCheck, 
            setContainerDateCheck, modalOpen, setModalOpen, selectedDate, setSelectedDate,
            handleTimeChange, selectedTime, setSelectedTime
            }} >

        <TodoDispatchContext.Provider value={dispatch}>
            {children}
        </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )

 }

 const useTodos = () => useContext(TodoContext);
 const useDispatchTodos = () => useContext(TodoDispatchContext);
 
 export { useTodos , useDispatchTodos , TodoProvider};