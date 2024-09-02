import React from "react";
import Example2 from "./Example2"
import { useNavigate } from 'react-router-dom';
import { TodoProvider } from "../context/TodoContext";
import { AsyncContextProvider } from "../context/AsyncContext";
import NotificationHandler from "./NotificationHandler";



import "./Todo.css" ;


const Example = () => {
    const navigate = useNavigate();

    const navigationHandler = () => {
        navigate('/UserAuth')
    }
    
    return (
        <>
          <span className="logout" onClick={navigationHandler}>Sign Out</span>
            <TodoProvider> 
                <AsyncContextProvider>
                    <NotificationHandler/>
                        <Example2/>      
                </AsyncContextProvider>              
            </TodoProvider>

        </>
    );
}

export default Example;