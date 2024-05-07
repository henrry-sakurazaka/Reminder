
import React, { useEffect } from 'react';
import { useTodos } from '../context/TodoContext';

const MyTimePicker = () => {
  
  const { selectedTime, handleTimeChange,
          setDisplayTimePicker, setDisplayDatePicker,
        } = useTodos();
        
        useEffect(() => {
          setDisplayTimePicker(true);
          setDisplayDatePicker(false);
        }, [setDisplayTimePicker, setDisplayDatePicker]);
       

  return (
    <div className="time-picker-container" style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
      <h2 style={{ color: " rgb(48, 48, 219)" }}>Time Picker</h2>
      <input 
        type="time" 
        value={selectedTime} 
        onChange={handleTimeChange} 
        style={{ width: "160px", padding: "6px", 
        borderRadius: "4px", border: "1px solid #ccc",
        fontSize: "16px"
       }} 
      />
      <p style={{ color: " rgb(48, 48, 219)" }}>Selected time: {selectedTime}</p>
    </div>
  );
}

export default MyTimePicker;


