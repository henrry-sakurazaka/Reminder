import React from "react";
import "./SSwitch2.css";
import { useTodos } from "../context/TodoContext";
import PropTypes from "prop-types";

const SSwitch2 = ({ handleTimeCheckboxChange, shouldHandleNotifications, timeCheck }) => {

    SSwitch2.propTypes = {
        handleTimeCheckboxChange: PropTypes.func.isRequired,
        shouldHandleNotifications: PropTypes.bool.isRequired,
        timeCheck: PropTypes.bool.isRequired,
    }

    const {isTimeChecked, setIsTimeChecked } = useTodos();


     handleTimeCheckboxChange = () => {
        setIsTimeChecked(!isTimeChecked);
    };

    
    return (
        <>
            <div className="inner-container">  
                <h4 className="time" style={{color: shouldHandleNotifications && timeCheck ? "rgb(8, 232, 158)" : "rgb(48, 48, 219)"}}>TIME</h4>
                <label className="switch2">
                <input className="switch-time" type="checkbox"
                checked={isTimeChecked}
                onChange={handleTimeCheckboxChange}
                />
                 
                <span className="slider round" style={{color: shouldHandleNotifications ? "rgb(8, 232, 158)" : "rgb(48, 48, 219)"}}></span>
                </label>
            </div>
        </>
      
    )
}

export default SSwitch2;