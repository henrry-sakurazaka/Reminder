'use strict';

self.addEventListener('push', function (event) {
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'badge.png',
  };
  event.waitUntil(
    self.registration.showNotification('Notification Title', options)
  );
});

// ブラウザのDevToolsで以下を実行（F12 → Console）
navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (const registration of registrations) {
    registration.unregister().then(() => console.log('SW unregistered'));
  }
});

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
