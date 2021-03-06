import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCOedQyfRu-inNMHSkz31WE1R8ILv2DYQM",
  authDomain: "khutba-5f97a.firebaseapp.com",
  databaseURL: "https://khutba-5f97a.firebaseio.com/",
  projectId: "khutba-5f97a",
  storageBucket: "khutba-5f97a.appspot.com",
  messagingSenderId: "952606490020"
};

const fire = firebase.initializeApp(config);

export default fire;

navigator.serviceWorker
    .register('firebase-messaging-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    localStorage.setItem('fcmtoken',token)
    console.log('token do usuário:', token);
    var StreamRef = firebase.database().ref();
    StreamRef.child(token).set(token);
    return token;
  } catch (error) {
    console.error(error);
  }
}