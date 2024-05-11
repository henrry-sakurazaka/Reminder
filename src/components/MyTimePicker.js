
import React, { useEffect } from 'react';
import { useTodos } from '../context/TodoContext';

const MyTimePicker = ({ isTime, handleTimeChange, inputTime, setInputTime}) => {
  
  const { selectedTime, 
          setDisplayTimePicker, setDisplayDatePicker,
        } = useTodos();
        
    useEffect(() => {
      setDisplayTimePicker(true);
      setDisplayDatePicker(false);
    }, [setDisplayTimePicker, setDisplayDatePicker]);
    
      //   const handleClick = (e) => {
      //     const { value } = e.target;
      //     setInputTime(value);
      //     handleTimeChange(value);
      // }

    // const handleClick = (e) => {
    //   if (e && e.target && e.target.value) {
    //     setInputTime(e.target.value);
    //     handleTimeChange(e.target.value);
    //   }
    // };

    // const handleChange = (e) => {
    //   setInputTime(e.target.value);
    //   handleTimeChange(e.target.value);
    // };
  

  return (
    <div className="time-picker-container" style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
      <h2 style={{ color: " rgb(48, 48, 219)" }}>Time Picker</h2>
      <input 
          className="MyTimePicker"
          onChange={(e) => setInputTime(e.target.value)}
          selected={inputTime}  
          label="MyTimePicker"
          inputVariant="outlined"
          showTodayButton
          ampm={false}
          autoOk
          type="time" 
          value={inputTime}  
          style={{ width: "160px", padding: "6px", 
          borderRadius: "4px", border: "1px solid #ccc",
          fontSize: "16px"
       }} 
      />
     
      <p style={{ color: " rgb(48, 48, 219)" }}>Selected time: {inputTime}</p>
    </div>
  );
}

export default MyTimePicker;


