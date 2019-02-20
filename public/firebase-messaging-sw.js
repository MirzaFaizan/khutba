importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCOedQyfRu-inNMHSkz31WE1R8ILv2DYQM",
    authDomain: "khutba-5f97a.firebaseapp.com",
    databaseURL: "https://khutba-5f97a.firebaseio.com/",
    projectId: "khutba-5f97a",
    storageBucket: "khutba-5f97a.appspot.com",
    messagingSenderId: "952606490020"
  };
const fire = firebase.initializeApp(config);
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