import React from "react";
import Todo from "./Todo";
import "./Todo.css" ;
import { useNavigate } from 'react-router-dom';
import UserAuth from "./UserAuth";

const Example = () => {
    const navigate = useNavigate();

    const navigationHandler = () => {
        navigate('/UserAuth')
    }
    
    return (
        <>
         <div className="triangle"></div>
            <div className="decoration">
                <span className="slash"></span>
                <span className="slash"></span>
                <span className="slash"></span>
                <span className="slash"></span>
                <span className="slash"></span>
            </div>
        <span className="logout" onClick={navigationHandler}>Sign Out</span>
        <div className="container">
            <section>
                <div className="big-title"><h1 className="big-text">REMINDER</h1></div>
                    <div className="clone-big-title"><h1 className="clone-text">REMINDER</h1></div>
                    <div className="discription">
                        <p>Manage your tasks and make your lifestyle meaningful 
                        with the Reminder App. Let's get started. You can input 
                        your requirements and add them by pressing the plus
                        button or hitting the Enter key. Once your tasks are 
                        successfully executed and completed, you can click the
                        Complete button to erase them. Have a great lifestyle!</p>
                    </div>
                <div className="out-line">
                    <h2 className="title">Reminder</h2> 
                        <Todo/>         
                </div>
           </section>     
        </div>    
        </>
    );
}

export default Example;