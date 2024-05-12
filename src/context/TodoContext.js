import React from "react";
import { createContext, useContext, useReducer, useState } from "react";
import { useAsyncContext } from "./AsyncContext";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import firebaseConfig from "../firebase";


 const TodoContext = createContext();
 const TodoDispatchContext = createContext();
 const firebaseApp = initializeApp(firebaseConfig);
 const firestore = getFirestore(firebaseApp);

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


const todoReducer = (todos, action) => {

  switch (action.type) {
    case 'todo/add':
      return [...todos, action.todo];
    case 'todo/delete':
      return todos.filter(todo => todo.id !== action.todo.id);
    case 'todo/update':
      return todos.map(_todo =>
        _todo.id === action.todo.id ? { ..._todo, ...action.todo } : { ..._todo }
      );
    case 'todo/complete':
      return todos.map(todo =>
        todo.id === action.todo.id ? { ...todo, ...action.todo } : { ...todo }
      );
    case 'todo/reset':
      return []; // ここは正しくないので修正が必要

    case 'todo/reserve':
      return todos.map(_todo =>
        _todo.id === action.todo.id
          ? { ..._todo, editingLock: true }
          : { ..._todo, editingLock: false }
      );
    case 'todo/reserveColor':
      return todos.map(_todo =>
        _todo.editingDateTime
          ? { ..._todo, editingColor: true }
          : { ..._todo, editingColor: false }
      );
    case 'todo/editingDateTime':
      return todos.map(_todo =>
        _todo.editingLock
          ? { ..._todo, editingDateTime: true }
          : { ..._todo, editingDateTime: false }
      );
      case 'FETCH_TODOS':
        return  action.payload
     case 'complete2': 
      return todos.map(todo =>
        todo.id === action.todo.id 
        ? {...todo, completed: true }
        : {...todo}
      )
          
    default: 
      return todos 
  }
};


   

 const TodoProvider = ({ children }) => {

      const [ todos, dispatch ] = useReducer(todoReducer, todoList); 
      const [ todosData, setTodosData ] = useState([]);
      const [modalOpen, setModalOpen ] = useState(false);
      const [isDateSet, setIsDateSet] = useState(false);
      const [isDateChecked, setIsDateChecked] = useState(false);
      const [isTimeChecked, setIsTimeChecked] = useState(false);
      const [isContainerDateCheck, setContainerDateCheck] = useState(false);
      const [isContainerTimeCheck, setContainerTimeCheck] = useState(false);
      const [isTimeSet, setIsTimeSet] = useState(false);
      const [displayTimePicker, setDisplayTimePicker] = useState(false);
      const [displayDatePicker, setDisplayDatePicker] = useState(false);
      const [enteredTodo, setEnteredTodo] = useState(""); 
      const [fireTodo, setFireTodo] = useState("");
      const [selectedDate, setSelectedDate] = useState(false);
      const [selectedTime, setSelectedTime] = useState(false);
      const [completedDateTimeSetting, setCompletedDateTimeSetting] = useState(false);
      
    
     
   
    
    
    return (
        <TodoContext.Provider value=
            {{ todos, 
            isDateChecked, setIsDateChecked, isTimeChecked , setIsTimeChecked, 
            isContainerTimeCheck, setContainerTimeCheck, isContainerDateCheck, 
            setContainerDateCheck, modalOpen, setModalOpen, displayTimePicker, 
            setDisplayTimePicker,displayDatePicker, setDisplayDatePicker, 
            isDateSet, setIsDateSet, isTimeSet, setIsTimeSet,
            enteredTodo, setEnteredTodo, fireTodo, setFireTodo,
            todosData, setTodosData, todoList, selectedDate, setSelectedDate,
            selectedTime, setSelectedTime, completedDateTimeSetting,
            setCompletedDateTimeSetting

            }}>
              
          <TodoDispatchContext.Provider value={dispatch}>    
              {children}   
          </TodoDispatchContext.Provider>
       </TodoContext.Provider>
    )

 }

 const useTodos = () => useContext(TodoContext);
 const useDispatchTodos = () => useContext(TodoDispatchContext);
 
 export { useTodos , useDispatchTodos , TodoProvider, getDoc }; 