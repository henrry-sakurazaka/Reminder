
import React, { useEffect } from 'react';
import { useTodos } from '../context/TodoContext';

const MyTimePicker = ({ isTime, handleTimeChange, inputTime, shouldHandleNotifications, timeCheck }) => {
  
  const { selectedTime, 
          setDisplayTimePicker, setDisplayDatePicker,
          completeDateTimeSetting
        } = useTodos();
        
    useEffect(() => {
      setDisplayTimePicker(true);
      setDisplayDatePicker(false);
    }, [setDisplayTimePicker, setDisplayDatePicker]);
    
    
  

  return (
    <div className="time-picker-container" style={{ border: shouldHandleNotifications && timeCheck ? "1px solid rgb(8, 232, 158)" :"1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
      <h2 style={{ color: shouldHandleNotifications && timeCheck ? "rgb(8, 232, 158)" : "rgb(48, 48, 219)" }}>Time Picker</h2>
      <input 
          className="MyTimePicker"
          onChange={handleTimeChange}
          selected={inputTime}  
          label="MyTimePicker"
          type="time" 
          value={inputTime}  
          style={{ width: "160px", padding: "6px", 
          borderRadius: "4px", border: "1px solid #ccc",
          fontSize: "16px"
       }} 
      />
     
      <p style={{ color: shouldHandleNotifications && timeCheck ? "rgb(8, 232, 158)" : " rgb(48, 48, 219)" }}>Selected time: {inputTime}</p>
    </div>
  );
}

export default MyTimePicker;


