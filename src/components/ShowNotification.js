// import React from "react";

//  function checkForNotificationsAndTrigger() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     console.log('tasks', tasks)
//     tasks.forEach((task) => {
//       const notificationTime = new Date(task.notificationTime).getTime();
//       const currentTime = new Date().getTime();
  
//       if (notificationTime <= currentTime) {
//         showNotification(task);
//         // 通知後にタスクをローカルストレージから削除
//         const updatedTasks = tasks.filter(t => t.id !== task.id);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//       }
//     });
//   }
  
//  const showNotification = (task) => {
//     if (Notification.permission === "granted") {
//       new Notification("Reminder", {
//         body: `Task: ${task.content}`, // タスクの内容を表示
//         icon: '/favicon.png', // アイコンを追加する場合の例
//         tag: 'unique-notification-id', // 一意のタグを設定
//       });
//     } else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then(permission => {
//         if (permission === "granted") {
//           new Notification("Reminder", {
//             body: `Task: ${task.content}`, // タスクの内容を表示
//             tag: 'unique-notification-id', // 一意のタグを設定
//           });
//         }
//       });
//     }
//   };
//   // タイマーで定期的にチェックする
//   setInterval(checkForNotificationsAndTrigger, 60000); // 1分ごとにチェック
  