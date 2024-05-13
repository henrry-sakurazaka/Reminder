import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import { TodoProvider } from "../context/TodoContext";
import { AsyncContextProvider } from "../context/AsyncContext";
import { NotificationProvier  } from "../context/NotificationContext";



// import styled from "styled-components";

const Todo = () => {
   
    return (
        <>
            <TodoProvider>
                <AsyncContextProvider>
                    <NotificationProvier >
                        <TodoList/>
                        <Form/>
                    </NotificationProvier >    
                </AsyncContextProvider>    
            </TodoProvider>
               
        </>
    )
};
export default Todo;