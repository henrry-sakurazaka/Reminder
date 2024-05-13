import React, { useEffect, useState } from "react";
import { useTodos } from "../context/TodoContext";
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'; // Firestoreを使用する場合
import { firestore } from "../firebase";
import { collection, addDoc} from 'firebase/firestore';
import firebaseConfig from "../firebase";
import SSwitch2 from "./SSwitch2";
import MyTimePicker from "./MyTimePicker";
import MyDatePickerCom from "./MyDatePickerCom";
import SelectSwitch from "./SelectSwitch";
import "react-datepicker/dist/react-datepicker.css";
import './Modal.css';

const firebaseApp = initializeApp(firebaseConfig);

const Modal = ({ handleCloseClick, todo }) => {

    const [isDate, setIsDate] = useState(new Date());
    const [isTime, setIsTime] = useState(new Date());
    const [inputTime, setInputTime] = useState('');
    const [prevIsDate, setPrevIsDate] = useState(isDate);
    const [prevIsTime, setPrevIsTime] = useState(isTime);

    // console.log(isDate)
    
    const { 
        isDateChecked, isTimeChecked, 
        setIsDateChecked, setIsTimeChecked,
        isContainerDateCheck, setContainerDateCheck,
        isContainerTimeCheck, setContainerTimeCheck,
        modalOpen,
        displayDatePicker, displayTimePicker, 
        isTimeSet, isDateSet, setIsTimeSet, setIsDateSet,
        setSelectedDate, setSelectedTime,
        completedDateTimeSetting,  setCompletedDateTimeSetting
    } = useTodos();

   
    useEffect(() => {
        const modal = document.querySelector('.modal');
        modal.style.alignItems = "center";
        if (isDate !== prevIsDate || isTime !== prevIsTime) {
            if (isDate !== prevIsDate || isTime !== prevIsTime) {
                setTimer();
            }
            setPrevIsDate(isDate);
            setPrevIsTime(isTime);
        }
      
    }, [ isDate, isTime ]);

    const handleDateCheckboxChange = (isDateChecked) => {
        setIsDateChecked(isDateChecked ? false : true);  
    };

    const handleTimeCheckboxChange = (isTimeChecked) => {
        setIsTimeChecked(isTimeChecked ? false : true);
    };

    const switchFunction = (isContainerDateCheck) => {
        setContainerDateCheck(isContainerDateCheck ? false : true);  
        setContainerTimeCheck(false);
        setSelectedDate(true)
    };


    const switchFunction2 = (isContainerTimeCheck) => {
        setContainerTimeCheck(isContainerTimeCheck ? false : true); 
        setContainerDateCheck(false); 
        setSelectedTime(true);
    };

    const handleDateChange = (date) => {
        setIsDate(date);
        setIsDateSet(true);
      };
      
    //   const handleTimeChange = (time) => {    
    //     setIsTime(time);
    //     setIsTimeSet(true);
    //   };


    const handleTimeChange = (e) => {
        const { value } = e.target;
        const [hours, minutes] = value.split(":");
        const newTime = new Date();
        newTime.setHours(parseInt(hours), parseInt(minutes));
        setInputTime(newTime);
        setIsTimeSet(true);
    };
    
   

    const setTimer = () => {
        if (isDate && isTime) {
            const dateTime = new Date(isDate);
            dateTime.setHours(isTime.getHours(), isTime.getMinutes());
      
            // // Firestoreにデータを書き込む
            // firestore().collection('notifications').add({
            //     notificationTime: dateTime,
            //     // その他の必要なデータをここに追加
            // })
            // Firestoreにデータを書き込む
            try {
                addDoc(collection(firestore, 'notifications'), {
                    notificationTime: dateTime,
                    // その他の必要なデータをここに追加
                })
                setCompletedDateTimeSetting(true);
        
                console.log('Notification data has been written to Firestore successfully');   
            } catch (error) {
                console.error('Error writing notification data to Firestore: ', error);   
        } 
      }
    };

  
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
                <MyTimePicker
                    className="MyTimePicker"
                    onChange={handleTimeChange}
                    selected={isTime}  
                    label="MyTimePicker"
                    inputVariant="outlined"
                    showTodayButton
                    ampm={false}
                    autoOk
                    isTime={isTime}
                    inputTime={inputTime}
                    setInputTime={setInputTime}
                    handleTimeChange={handleTimeChange}
                />
            ) : isDateChecked && isTimeChecked && isContainerDateCheck ? (
                <MyDatePickerCom
                    onChange={handleDateChange}
                    selected={isDate}
                    isDate={isDate}
                    handleDateChange={handleDateChange}
                />  
            ) : isDateChecked && isTimeChecked ? (
                <MyTimePicker
                    isTime={isTime}
                    handleTimeChange={handleTimeChange}
                    inputTime={inputTime}
                    setInputTime={setInputTime}
                />
            ) : isDateChecked ? (
                <MyDatePickerCom
                    onChange={handleDateChange}
                    selected={isDate}
                    isDate={isDate}
                    handleDateChange={handleDateChange}
                />
            ) : isTimeChecked ? (
                <MyTimePicker 
                    isTime={isTime}
                    handleTimeChange={handleTimeChange}
                    inputTime={inputTime}
                    setInputTime={setInputTime}
                />
            ) : isContainerDateCheck ? (
                <MyDatePickerCom
                    onChange={handleDateChange}
                    selected={isDate}
                    isDate={isDate}
                    handleDateChange={handleDateChange}
                />
            ) : isContainerTimeCheck ? (
                <MyTimePicker  
                    isTime={isTime}
                    handleTimeChange={handleTimeChange}
                    inputTime={inputTime}
                    setInputTime={setInputTime}
                />
            ) : (
                <>
                    <div className="message-container">
                        <h2 className="message">Please Select</h2> 
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
    );     
 
}
export default Modal;
