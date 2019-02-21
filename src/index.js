
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase';


import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./firebase-messaging-sw.js')
//     .then(function (registration) {
//       console.log('Registration successful, scope is:', registration);
//       //firebase.messaging().useServiceWorker(registration);

//     }).catch(function (err) {
//       console.log('Service worker registration failed, error:', err);
//     });
// }

// //serviceWorker.unregister();
// // const config = {
// //   apiKey: "AIzaSyA94oWHLyo8QGb4QN5TbAuUGi2LqVa3rRE",
// //   authDomain: "onlineacademy-a3663.firebaseapp.com",
// //   databaseURL: "https://onlineacademy-a3663.firebaseio.com",
// //   projectId: "onlineacademy-a3663",
// //   storageBucket: "onlineacademy-a3663.appspot.com",
// //   messagingSenderId: "862982743703"
// // };
// // const fire = firebase.initializeApp(config);

// const messaging = firebase.messaging();

// // messaging.requestPermission().then(function () {
// //   console.log('Notification permission granted.');
// //   // TODO(developer): Retrieve an Instance ID token for use with FCM.
// //   // ...
// //  return messaging.getToken()
// // }).then(function (token) {
// //   console.log(token)
// //   // localStorage.fcmtoken=token
// // localStorage.setItem('fcmtoken', token);
// // });



// messaging.onMessage(function (payload) {
//   console.log("ON MESSAGE:   ", payload)
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon,
//   };

//   if (!("Notification" in window)) {
//     alert("This browser does not support system notifications");
//   }
//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted") {
//     // If it's okay let's create a notification
//     var notification = new Notification(notificationTitle, notificationOptions);
//     notification.onclick = function (event) {
//       event.preventDefault(); // prevent the browser from focusing the Notification's tab
//       window.open(payload.notification.click_action, '_blank');
//       notification.close();
//     }
//   }

// });