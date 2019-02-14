importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
const config = {
    apiKey: "AIzaSyA94oWHLyo8QGb4QN5TbAuUGi2LqVa3rRE",
    authDomain: "onlineacademy-a3663.firebaseapp.com",
    databaseURL: "https://onlineacademy-a3663.firebaseio.com",
    projectId: "onlineacademy-a3663",
    storageBucket: "onlineacademy-a3663.appspot.com",
    messagingSenderId: "862982743703"
};
const fire = firebase.initializeApp({
    messagingSenderId: "862982743703"

});
const messaging = firebase.messaging();


// messaging.requestPermission().then(function () {
//     console.log('Notification permission granted.');
//     // TODO(developer): Retrieve an Instance ID token for use with FCM.
//     // ...
//     messaging.getToken().then((res) => {
//         console.log(res)
//     }).catch(err => console.log(err));
// }).then(function (token) {
//     console.log(token)

// }).catch(function (err) {
//     console.log('Unable to get permission to notify.', err);
// });

// messaging.onMessage(function (payload) {
//     console.log("ON MESSAGE:   ", payload)


// });