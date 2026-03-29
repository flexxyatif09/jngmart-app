importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCAsHVLoJLq_yg-GjYLhWG12MSm4VhUD3s",
  authDomain: "jngmart.firebaseapp.com",
  projectId: "jngmart",
  storageBucket: "jngmart.firebasestorage.app",
  messagingSenderId: "994578077338",
  appId: "1:994578077338:web:d95c4705b5ff87847f3123"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  const title = (payload.notification && payload.notification.title) ? payload.notification.title : 'JNGMart';
  const body  = (payload.notification && payload.notification.body)  ? payload.notification.body  : '';

  self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: payload.data || {}
  });
});
