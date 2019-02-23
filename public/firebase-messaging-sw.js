importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCOedQyfRu-inNMHSkz31WE1R8ILv2DYQM",
  authDomain: "khutba-5f97a.firebaseapp.com",
  databaseURL: "https://khutba-5f97a.firebaseio.com/",
  projectId: "khutba-5f97a",
  storageBucket: "khutba-5f97a.appspot.com",
  messagingSenderId: "952606490020"
})

const messaging = firebase.messaging();


