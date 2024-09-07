import React from "react";
import Example1 from "./Example1";
import { TodoProvider } from "../context/TodoContext";

const Example = () => {

    return (
        <>
            <TodoProvider> 
                <Example1/>                          
            </TodoProvider>
        </>
    )
}

export default Example;