// import React from "react";
// import { createContext, useContext, useReducer } from "react";

const todoList = [
    {
        id: 1,
        content: "Make a restaurant reservation",
        editing: false
    },
    {
        id: 2,
        content: "send a letter",
        editing: false
    },
    {
        id: 3,
        content: "buy flowers",
        editing: false
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
        default : return todos;
        
    }

 }



 const TodoProvider = ({ children }) => {
 
    const [ todos, dispatch ] = useReducer(todoReducer, todoList);
   
    
    return (
        <TodoContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
            {children}
        </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )

 }

 const useTodos = () => useContext(TodoContext);
 const useDispatchTodos = () => useContext(TodoDispatchContext);

 export { useTodos , useDispatchTodos , TodoProvider};