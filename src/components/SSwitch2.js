import React from "react";
import "./SSwitch2.css";
import { useTodos } from "../context/TodoContext";


const SSwitch2 = ({handleTimeCheckboxChange}) => {

    const {isTimeChecked, setIsTimeChecked } = useTodos();


     handleTimeCheckboxChange = () => {
        setIsTimeChecked(!isTimeChecked);
    };

    
    return (
        <>
            <div className="inner-container">  
                <h4 className="time">TIME</h4>
                <label className="switch2">
                <input type="checkbox"
                checked={isTimeChecked}
                onChange={handleTimeCheckboxChange}
                />
                 
                <span className="slider round"></span>
                </label>
            </div>
        </>
      
    )
}

export default SSwitch2;