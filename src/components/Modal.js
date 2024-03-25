import React from "react";
import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

const Modal = () => {
    const [selectedDate, setSelectedDate ] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div className="modal">
            <DateTimePicker
                onChange={handleDateChange}
                value={selectedDate}
            />

            
        </div>
        )
}
export default Modal;



