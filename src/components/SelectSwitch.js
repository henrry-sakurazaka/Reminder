import React from "react";
import { useTodos } from "../context/TodoContext";
import "./SelectSwitch.css";



const SelectSwitch = ({ handleDateCheckboxChange}) => {

    const { isDateChecked, setIsDateChecked } = useTodos();


     handleDateCheckboxChange = () => {
        setIsDateChecked(!isDateChecked);    
    }

    
    
    return (
        <>
            <div className="inner-container">
                <h4>DATE</h4>
                <label className="switch">
                    <input type="checkbox"
                    checked={isDateChecked}
                    onChange={handleDateCheckboxChange}/>

                    <span className="slider round"></span>
                </label>
            </div>
        </>
      
    )
}

export default SelectSwitch;