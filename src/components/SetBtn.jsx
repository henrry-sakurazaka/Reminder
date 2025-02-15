// import React from "react";
// import NotificationHandler from "./NotificationHandler";
// import { useTodos } from "../context/TodoContext";


// const SetBtn = ({todo, setTimer}) => {
//     const { completedDateTimeSetting, shouldHandleNotifications} = useTodos();
//     return (
//         <div key={todo.id} className="btn-container">
//                 <button className="set-btn" onClick={() => setTimer(todo)}>SET</button>
//                 {completedDateTimeSetting && shouldHandleNotifications && (
//                 <NotificationHandler shouldHandleNotifications={shouldHandleNotifications} 
//                 completedDateTimeSetting = {completedDateTimeSetting} todo={todo}/>
//                 )}
//             </div>
//     )
// }

// export default SetBtn;