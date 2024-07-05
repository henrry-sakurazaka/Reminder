'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-sw.js';



const firebaseApp = initializeApp({
  apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
  authDomain: "reminder-b4527.firebaseapp.com",
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-b4527",
  storageBucket: "reminder-b4527.appspot.com",
  messagingSenderId: "968555995295",
  appId: "1:968555995295:web:42d909b7393394b85502aa"
});


const messaging = getMessaging(firebaseApp);


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


self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
      clients.openWindow('https://reminder-b4527.web.app')
  );
});


onBackgroundMessage(messaging,(payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body:  payload.notification.body || 'Background Message body.',
    icon: payload.notification.icon || '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

export {};