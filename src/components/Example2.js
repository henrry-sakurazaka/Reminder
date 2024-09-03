import React from "react";
import Todo from "./Todo";
import "./Todo.css" ;
import { useTodos } from "../context/TodoContext";


const Example = () => {
    const { modalOpen, timeCheck } = useTodos();
    const spans = [1, 2, 3, 4, 5]; // spanの数だけ適当な配列を作成fi

    const getColor = () => {
        return timeCheck && modalOpen 
            ? "rgb(8, 232, 158)" 
            : modalOpen 
            ? "rgba(40, 147, 247, 0.772)" 
            : "rgb(8, 232, 158)";
    };

    
    return (
        <>
         <div className="triangle"></div>
            <div className="decoration">
                {spans.map((_, index) => (
                <span 
                    key={index} 
                    className="slash" 
                    style={{ backgroundColor: getColor() }}
                ></span>
                ))}
            </div>
      
        <div className="container">
            <section>
                <div className="big-title">
                    {/* <h1 className="big-text" style={{color: modalOpen && " rgba(40, 147, 247, 0.772)" , color: timeCheck && modalOpen && "rgb(8, 232, 158)"}}  >REMINDER</h1>
                     */}
                     <h1 className="big-text" 
                        style={{ 
                            color: timeCheck && modalOpen ? "rgb(8, 232, 158)" 
                            : modalOpen ? "rgba(40, 147, 247, 0.772)":  "rgb(8, 232, 158)"  
                        }} >
                        REMINDER
                    </h1>

                </div>
                    <div className="clone-big-title"><h1 className="clone-text">REMINDER</h1></div>
                    <div className="discription">
                        <p>Manage your tasks and make your lifestyle meaningful 
                        with the Reminder App. Let's get started. You can input 
                        your requirements and add them by pressing the plus
                        button. Once your tasks are successfully executed and completed, 
                        press the complete button. You can delete a task by double-clicking it.
                        Once all tasks are completed, you can clear them using the refresh button.
                        Be careful, as pressing the refresh button is irreversible.
                        Have a great lifestyle!</p>
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