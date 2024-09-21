import React from "react";
import Example2 from "./Example2";
import UserAuth from "./UserAuth";
import { useNavigate } from 'react-router-dom';
import { AsyncContextProvider } from "../context/AsyncContext";
import { useTodos } from "../context/TodoContext";
import NotificationHandler from "./NotificationHandler";



import "./Todo.css" ;


const Example1 = () => {
    const navigate = useNavigate();
    const { agree } = useTodos();
    const navigationHandler = () => {
        navigate('/UserAuth')
    }
    
    return (
        <>
          <span className="back" onClick={navigationHandler}>Back to Auth</span>
            
                <AsyncContextProvider>
                    <NotificationHandler/>
                        <Example2/>            
                </AsyncContextProvider>              
        </>
    );
}

export default Example1;