import { useTodos } from "../context/TodoContext";
import MyDatePicker from "react-datepicker";
import "./MDP.css";
import { useEffect } from "react";



const MyDatePickerCom = ({isDate, handleDateChange, todo}) => {

  const {selectedDate, 
        setDisplayDatePicker,setDisplayTimePicker,
        } = useTodos();
        
        useEffect(() => {
          setDisplayDatePicker(true);
          setDisplayTimePicker(false);
        }, [setDisplayTimePicker, setDisplayDatePicker]);
       
   
    return (
      <div className="date-picker-container" style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
        <h2 style={{ color: " rgb(48, 48, 219)" }}>Date Picker</h2>

          <MyDatePicker
            className="DateTimePicker custom"
            label="DateTimePicker"
            inputVariant="outlined"
            onChange={handleDateChange}
            selected={isDate}
            showTodayButton={true}
            ampm={false}
            autoOk
          />
        {selectedDate && isDate &&  (
        <p style={{ color: " rgb(48, 48, 219)"  }}>Selected Date: {isDate.toLocaleDateString()}</p>
      )}   
      </div>
    );
  }
  
  export default MyDatePickerCom;
