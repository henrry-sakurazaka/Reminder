import React, { useEffect, useState } from "react";
import { useTodos, useDispatchTodos } from "../context/TodoContext";
import { onAuthStateChanged } from "firebase/auth";
import { firestore, auth } from "../firebase";
import { collection, addDoc, setDoc, doc} from 'firebase/firestore';
import SSwitch2 from "./SSwitch2";
import MyTimePicker from "./MyTimePicker";
import MyDatePickerCom from "./MyDatePickerCom";
import SelectSwitch from "./SelectSwitch";
import NotificationHandler from "./NotificationHandler";
import 'firebase/firestore'; // Firestoreを使用する場合
import "react-datepicker/dist/react-datepicker.css";
import './Modal.css';
import { useAsyncContext } from "../context/AsyncContext";
import { v4 as uuidv4 } from 'uuid';


const Modal = ( {todo} ) => {
    const dispatch = useDispatchTodos();
    const [isDate, setIsDate] = useState(new Date());
    const [isTime, setIsTime] = useState(new Date());
    const [inputTime, setInputTime] = useState('');
    const [prevIsDate, setPrevIsDate] = useState(isDate);
    const [prevIsTime, setPrevIsTime] = useState(isTime); 
    const [timeCheck, setTimeCheck] = useState(false); 
    const user = auth.currentUser;
    const [uid, setUid] = useState(); // uidの初期化
    
    const { convertedNotificationData } = useAsyncContext();
    const { 
        isDateChecked, isTimeChecked, 
        setIsDateChecked, setIsTimeChecked,
        isContainerDateCheck, setContainerDateCheck,
        isContainerTimeCheck, setContainerTimeCheck,
        modalOpen,
        displayDatePicker, displayTimePicker, 
        isTimeSet, isDateSet, setIsTimeSet, setIsDateSet,
        setSelectedDate, setSelectedTime,
        completedDateTimeSetting,  setCompletedDateTimeSetting,
        setNotificationDocId, isSubmitting, setIsSubmitting,
        setIsDocRef, reserveModeTodo, reserveModeId,
        setReserveModeId, todoId, setTodoId, Todo, setTodo,
        shouldHandleNotifications, setShouldHandleNotifications,
        isSubmitting2, setIsSubmitting2
    } = useTodos();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUid(user.uid); 
          } 
        });
      
        return () => unsubscribe();
      }, []);

    // useEffect(() => {
    //     console.log(todo)
    // }, [todo]); 
   
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

    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        setIsDate(newDate);
        setIsDateSet(true);
      };

    const handleTimeChange = (e) => {
        const { value } = e.target;
        const [hours, minutes] = value.split(":"); 
        const newTime = new Date();
        newTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
        setIsTime(newTime);
        setInputTime(value)
        setIsTimeSet(true);
        setTimeCheck(true);
    };
   
    
    const setTimer = async (todo) => {
       console.log(todo.content)
        if (isSubmitting) return ; // 重複防止
           setIsSubmitting(true);
        if (isDate && isTime && todo.content && todo.id) {
          const dateTime = new Date(isDate);
          dateTime.setHours(isTime.getHours(), isTime.getMinutes(), 0, 0);
      
          try {
            const notificationData = {
                title: 'Reminder',
                description: 'Time is approaching, receive to push notification..',
                type: 'string',
                notificationTime: dateTime,
                todoId: uid,
                content: todo.content,
                id: todo.id,
            };
            
            
            // 一意のIDを生成
            const docId = uuidv4();
            // Firestoreのコレクション参照
            const docRef = doc(collection(firestore, 'notifications'), docId);
            await setDoc(docRef, notificationData);
            // 非同期でドキュメントを追加し、その結果を待機
            // const docRef = await addDoc(collection(firestore, 'notifications'), notificationData);
            // const docId = docRef.id;
            console.log('Generated docId:', docId);
            const newTodo = {
                ...todo,
                notification: true,

            }
            dispatch({ type: "todo/notification", todo: newTodo });
            setNotificationDocId(docId);
            setIsDocRef(docRef);
            setCompletedDateTimeSetting(true);
            setShouldHandleNotifications(true);
            // setIsSubmitting2(true);

            console.log('Notification data has been written to Firestore successfully');
          } catch (error) {
            console.error('Error writing notification data to Firestore: ', error);
          } finally {
            setIsSubmitting(false);
          }
        } else {
          setIsSubmitting(false);
        }
    
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
              console.log('Notification permission granted!');
              // ここで通知の送信を設定する
            } else if (permission === 'denied') {
              console.warn('Notification permission denied');
              // 通知の許可が拒否された場合の処理
            } else {
              console.warn('Notification permission dismissed');
              // ユーザーが許可の決定を延期した場合の処理
            }
          } catch (error) {
            console.error('Failed to request permission:', error);
          }
      };
      
    

    useEffect(() => {
        const modal = document.querySelector('.modal');
        modal.style.alignItems = "center";
        if (isDate !== prevIsDate || isTime !== prevIsTime) {
            if (isDate !== prevIsDate || isTime !== prevIsTime) {
                setPrevIsDate(isDate);
                setPrevIsTime(isTime);
            }   
        }   
    }, [ isDate, isTime ]);

  console.log('timeCheck',timeCheck)
    return (  
        modalOpen ? (
        <div key={todo.id} className="modal" 
        style={{backgroundColor: shouldHandleNotifications && completedDateTimeSetting && timeCheck ? 'transparent' : 'rgba(40, 147, 247, 0.772)', border: shouldHandleNotifications && completedDateTimeSetting && timeCheck ? "1px solid rgb(8, 232, 158)" :  "1px solid rgb(48, 48, 219)"}}>
            <div className="switch-container" onClick={() => switchFunction()}>
                <SelectSwitch
                    isChecked={isDateChecked} 
                    handleCheckboxChange={handleDateCheckboxChange}
                    shouldHandleNotifications={shouldHandleNotifications}
                    inputTime={inputTime}
                    timeCheck={timeCheck}
                />
            </div>
            <div className="switch-container2" onClick={() => switchFunction2()}>
                <SSwitch2
                    isChecked={isTimeChecked}
                    handleCheckboxChange={handleTimeCheckboxChange}
                    shouldHandleNotifications={shouldHandleNotifications}
                    inputTime={inputTime}
                    timeCheck={timeCheck}
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
                    shouldHandleNotifications={shouldHandleNotifications} 
                    timeCheck={timeCheck}  
                />
            ) : isDateChecked && isTimeChecked && isContainerDateCheck ? (
                <MyDatePickerCom
                    onChange={handleDateChange}
                    selected={isDate}
                    isDate={isDate}
                    inputVariant="outlined"
                    handleDateChange={handleDateChange}
                    shouldHandleNotifications={shouldHandleNotifications}
                    inputTime={inputTime}
                    timeCheck={timeCheck}
                />  
            ) : isDateChecked && isTimeChecked ? (
                <MyTimePicker
                    isTime={isTime}
                    handleTimeChange={handleTimeChange}
                    inputTime={inputTime}
                    setInputTime={setInputTime}
                    inputVariant="outlined"
                    showTodayButton
                    ampm={false}
                    autoOk
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
                    inputVariant="outlined"
                    showTodayButton
                    ampm={false}
                    autoOk
                    setInputTime={setInputTime}
                />
            ) : isContainerDateCheck ? (
                <MyDatePickerCom
                    onChange={handleDateChange}
                    selected={isDate}
                    isDate={isDate}
                    inputVariant="outlined"
                    handleDateChange={handleDateChange}
                />
            ) : isContainerTimeCheck ? (
                <MyTimePicker  
                    isTime={isTime}
                    handleTimeChange={handleTimeChange}
                    inputTime={inputTime}
                    inputVariant="outlined"
                    showTodayButton
                    ampm={false}
                    autoOk
                    setInputTime={setInputTime}
                />
            ) : (
                <>
                    <div className="message-container" style={{backgroundColor: 
                        !isContainerDateCheck && !isContainerTimeCheck && shouldHandleNotifications 
                        && completedDateTimeSetting && timeCheck
                        ? "rgb(8, 232, 158)" : "rgb(48, 48, 219)"}}>
                        
                        <h2 className="message">Please Select</h2> 
                        <h2 className="message"> Setting</h2> 
                        <h2 className="message"> Date & Time</h2>
                    </div>
                </>
            )        
        } 
            <div className="btn-container">
                <button className="set-btn" onClick={() => setTimer(todo)} 
                   style={{color : shouldHandleNotifications && timeCheck ? "rgb(8, 232, 158)" :  "rgb(40, 147, 247, 0.772)", }} 
                >SET</button>
                {completedDateTimeSetting && shouldHandleNotifications && (
                <NotificationHandler shouldHandleNotifications={shouldHandleNotifications} 
                completedDateTimeSetting = {completedDateTimeSetting} 
                todo={todo}/>
                )}
            </div>
         </div>
        ) : null
               
    );     
 
};
export default Modal;
