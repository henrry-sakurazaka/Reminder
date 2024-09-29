'use strict';

// self.addEventListener('push', function(event) {
//   const options = {
//       body: event.data.text(),
//       icon: 'icon.png',
//       badge: 'badge.png'
//   };
//   event.waitUntil(
//       self.registration.showNotification('Notification Title', options)
//   );
// });

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
// self.addEventListener('install', event => {
//   self.skipWaiting();
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(clients.claim());
// });



// self.addEventListener('push', event => {
//   const data = event.data.json();

//    // メインスクリプトからオプションを受け取る
//    const options = { 
//     body: data.body, 
//     icon: data.icon, 
//     tag: data.tag 
//   };

//   event.waitUntil(
//     self.registration.showNotification(data.title, options).then(() => {
//       // Reactコンポーネントに通知が表示されたことを知らせる
//       self.clients.matchAll().then(clients => {
//         clients.forEach(client => {
//           client.postMessage({
//             type: 'NOTIFICATION_DISPLAYED',
//             payload: { title: data.title, body: data.body }
//           });
//         });
//       });
//     })
//   );
// });


// self.addEventListener('notificationclick', function(event) {
//   event.notification.close();
//   event.waitUntil(
//       clients.openWindow('https://reminder3-65e84.web.app')
//   );
// });


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