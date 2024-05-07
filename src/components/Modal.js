
import React, { useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { db , ref, set } from "../firebase";
import SSwitch2 from "./SSwitch2";
import MyTimePicker from "./MyTimePicker";
import MyDatePicker from "./MyDatePicker";
import SelectSwitch from "./SelectSwitch";
import "react-datepicker/dist/react-datepicker.css";
import './Modal.css';

const Modal = ({ handleCloseClick }) => {
    
    const { selectedDate, handleDateChange, 
            isDateChecked, isTimeChecked, 
            setIsDateChecked, setIsTimeChecked,
            isContainerDateCheck,setContainerDateCheck,
            isContainerTimeCheck,setContainerTimeCheck,
            modalOpen, handleTimeChange, selectedTime,
            displayDatePicker, displayTimePicker, 
            isTimeSet, isDateSet
          } = useTodos();

    useEffect(() => {
       const modal = document.querySelector('.modal');
       modal.style.alignItems = "center";
        
    }, [isContainerTimeCheck])

    const handleDateCheckboxChange = (isDateChecked) => {
        setIsDateChecked(isDateChecked ? false : true);   
    };

    const handleTimeCheckboxChange = (isTimeChecked) => {
        setIsTimeChecked(isTimeChecked ? false : true);
        
    }

    const switchFunction = (isContainerDateCheck) => {
        setContainerDateCheck(isContainerDateCheck ? false : true);  
        setContainerTimeCheck(false);
    }

    const switchFunction2 = (isContainerTimeCheck) => {
        setContainerTimeCheck(isContainerTimeCheck ? false : true); 
        setContainerDateCheck(false);  
    }

    const setTimer = () => {
        if( displayDatePicker && selectedDate && isDateSet) {
        
            set(ref(db, 'dates'), { // set関数を使用してデータを書き込む
                date: selectedDate.toString(),

            }).then(() => {
                console.log('saved');
            }).catch((error) => {
                console.error('うまくいってません。');
            }); 
            } else {
                console.warn('日時が選択されてません。');
            
        }
        if( displayTimePicker && selectedTime && isTimeSet ) {

            set(ref(db, 'times'), { // set関数を使用してデータを書き込む
                time : selectedTime.toString(),

            }).then(() => {
                console.log('saved');
            }).catch((error) => {
                console.error('うまくいってません。');
            }); 
            } else {
                console.warn('日時が選択されてません。');
        }
    }
    
            return (  
                modalOpen ? 
                <div className="modal">
                    <div className="switch-container" onClick={() => switchFunction()}>
                        <SelectSwitch
                        isChecked={isDateChecked} 
                        handleCheckboxChange={handleDateCheckboxChange}
                        />
                    </div>
                    <div className="switch-container2" onClick={() => switchFunction2()}>
                        <SSwitch2
                        isChecked={isTimeChecked}
                        handleCheckboxChange={handleTimeCheckboxChange}
                        />
                    </div>

                    {isDateChecked && isTimeChecked && isContainerTimeCheck ? (
                        <MyTimePicker/> // or <DatePicker/> based on your preference
                    ) : isDateChecked && isTimeChecked && isContainerDateCheck ? (
                        <MyDatePicker
                            className="DateTimePicker"
                            onChange={handleDateChange}
                            selected={selectedDate}
                            label="DateTimePicker"
                            inputVariant="outlined"
                            showTodayButton
                            ampm={false}
                            autoOk
                        />  
                    ) : isDateChecked && isTimeChecked ? (
                        <MyTimePicker
                            className="MyTimePicker"
                            onChange={handleTimeChange}
                            selected={selectedTime}
                            label="MyTimePicker"
                            inputVariant="outlined"
                            showTodayButton
                            ampm={false}
                            autoOk
                        />
                    ) : isDateChecked ? (
                        <MyDatePicker
                            className="DateTimePicker"
                            onChange={handleDateChange}
                            selected={selectedDate}
                            label="DateTimePicker"
                            inputVariant="outlined"
                            showTodayButton
                            ampm={false}
                            autoOk
                        />
                    ) : isTimeChecked ? (
                        <MyTimePicker/>
                    ) : isContainerDateCheck ? (
                        <MyDatePicker/>
                    ) : isContainerTimeCheck ? (
                        <MyTimePicker/>
                    ) : (
                       <>
                         <div className="message-container">
                            <h2 className="message">
                                Please Select</h2> 
                                <h2 className="message"> Setting</h2> 
                                <h2 className="message"> Date & Time</h2>
                        </div>
                       </>
                    )          
                } 
                    <div className="btn-container">
                        <button className="set-btn" onClick={() => setTimer()}>SET</button>
                    </div>
                </div>
             : false           
      
    )          
}


export default Modal;



