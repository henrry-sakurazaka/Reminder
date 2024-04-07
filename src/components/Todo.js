import React from "react";
import List from "./List";
import Form from "./Form";
import { TodoProvider } from "../context/TodoContext";
// import styled from "styled-components";

const Todo = () => {
   
    return (
        <>
            <TodoProvider>
                <List />
                <Form />  
            </TodoProvider>
               
        </>
    )
};
export default Todo;