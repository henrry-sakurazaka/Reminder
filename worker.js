'use strict';

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";


// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
});
// firebase.initializeApp({
//   apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
//   authDomain: "reminder-b4527.firebaseapp.com",
//   databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reminder-b4527",
//   storageBucket: "reminder-b4527.appspot.com",
//   messagingSenderId: "968555995295",
//   appId: "1:968555995295:web:42d909b7393394b85502aa"
// });

const messaging = getMessaging(firebaseApp);

// const messaging = firebase.messaging();

// messaging.requestPermission().then(function(){  console.log("have permission");
//   return messaging.getToken(); }).then(function(token){
//   console.log(token)
//   }).catch(function(err){
//   console.log("Error");
//   })

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

export {};