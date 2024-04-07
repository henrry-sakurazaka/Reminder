import { useTodos } from "../context/TodoContext";
import DatePicker from "react-datepicker";
import "./MDP.css";

const MyDatePicker = () => {

  const {selectedDate, handleDateChange} = useTodos();
  
    return (
      <div className="date-picker-container" style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
        <h2 style={{ color: " rgb(48, 48, 219)" }}>Date Picker</h2>

          <DatePicker 
          className="custom"
          selected={selectedDate}
          onChange={handleDateChange}
          />

        <p style={{ color: " rgb(48, 48, 219)"  }}>Selected Date: {selectedDate.toLocaleDateString()}</p>
      </div>
    );
  }
  
  export default MyDatePicker;
