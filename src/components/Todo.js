import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import { TodoProvider } from "../context/TodoContext";
import { AsyncContextProvider } from "../context/AsyncContext";
import FirstAddTodos, { FirstAddTodosProvider } from "./FirstAddLogic";



// import styled from "styled-components";

const Todo = () => {
   
    return (
        <>
            <TodoProvider> 
                    <AsyncContextProvider>
                        <TodoList/>
                        <Form/>
                    </AsyncContextProvider>              
            </TodoProvider>
                    
               
        </>
    )
};
export default Todo;