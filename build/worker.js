'use strict';


// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
// import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-sw.js';
// importScripts ('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-sw.js');
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
// import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging-sw.js';
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');



// const firebaseApp =  initializeApp ({
//   apiKey: "AIzaSyCFn-eJuAP2f2zYP4VxMvvwef15jzyW7bA",
//   authDomain: "reminder3-65e84.firebaseapp.com",
//   databaseURL: "https://reminder3-65e84-default-rtdb.firebaseio.com",
//   projectId: "reminder3-65e84",
//   storageBucket: "reminder3-65e84.appspot.com",
//   messagingSenderId: "280162142902",
//   appId: "1:280162142902:web:4fed1bc9d4b35e75963417",
//   measurementId: "G-C0NL3GWNWZ"
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyCFn-eJuAP2f2zYP4VxMvvwef15jzyW7bA",
//   authDomain: "reminder3-65e84.firebaseapp.com",
//   databaseURL: "https://reminder3-65e84-default-rtdb.firebaseio.com",
//   projectId: "reminder3-65e84",
//   storageBucket: "reminder3-65e84.appspot.com",
//   messagingSenderId: "280162142902",
//   appId: "1:280162142902:web:4fed1bc9d4b35e75963417",
//   measurementId: "G-C0NL3GWNWZ"
// }
// const messaging = getMessaging(firebaseApp);
// const messaging = getMessaging(firebaseApp);
// firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseApp) : getApp();
// initializeApp(firebaseApp);
// const messaging = firebase.messaging();


self.addEventListener('push', function(event) {
  const options = {
      body: event.data.text(),
      icon: 'icon.png',
      badge: 'badge.png'
  };
  event.waitUntil(
      self.registration.showNotification('Notification Title', options)
  );
});

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('my-cache').then(function(cache) {
//       return cache.addAll([
//         '/',
//         '/index.html',
//         '/styles.css',
//         '/script.js',
//         // 他のキャッシュするリソース
//       ]);
//     })
//   );
// });

// self.addEventListener('activate', function(event) {
//   var cacheWhitelist = ['my-cache'];
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// // Syncイベントのハンドリング（オプション）
// self.addEventListener('sync', event => {
//     if (event.tag === 'check-notification') {
//         event.waitUntil(checkNotificationTime());
//     }
// });

// // 例: 定期的にタイマーをチェック（10秒ごと）
// setInterval(checkNotificationTime, 10000);

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
      clients.openWindow('https://reminder3-65e84.web.app')
  );
});


// onBackgroundMessage(messaging,(payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body:  payload.notification.body || 'Background Message body.',
//     icon: payload.notification.icon || '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

export {};