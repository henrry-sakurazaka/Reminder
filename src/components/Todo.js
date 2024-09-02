import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import NotificationHandler from "./NotificationHandler";
import { TodoProvider } from "../context/TodoContext";
import { AsyncContextProvider } from "../context/AsyncContext";
import FirstAddTodos, { FirstAddTodosProvider } from "./FirstAddLogic";



// import styled from "styled-components";

const Todo = () => {
   
    return (
        <>  
          <TodoList/>
            <Form/>               
        </>
    )
};
export default Todo;