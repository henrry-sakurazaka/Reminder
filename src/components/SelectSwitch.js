import React from "react";
import { useTodos } from "../context/TodoContext";
import "./SelectSwitch.css";



const SelectSwitch = ({ handleDateCheckboxChange, shouldHandleNotifications, timeCheck }) => {

    const { isDateChecked, setIsDateChecked } = useTodos();


     handleDateCheckboxChange = () => {
        setIsDateChecked(!isDateChecked);    
    }
   
    return (
        <>
            <div className="inner-container">
                <h4 style={{color: shouldHandleNotifications && 
                    timeCheck ? "rgb(8, 232, 158)" : "rgb(48, 48, 219)"}}
                    >DATE
                </h4>
                <label className="switch">
                    <input className="switch-date" type="checkbox"
                    checked={isDateChecked}
                    onChange={handleDateCheckboxChange}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
      
    )
}

export default SelectSwitch;