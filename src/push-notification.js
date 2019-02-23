import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCOedQyfRu-inNMHSkz31WE1R8ILv2DYQM",
    authDomain: "khutba-5f97a.firebaseapp.com",
    databaseURL: "https://khutba-5f97a.firebaseio.com/",
    projectId: "khutba-5f97a",
    storageBucket: "khutba-5f97a.appspot.com",
    messagingSenderId: "952606490020"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      localStorage.setItem('fcmtoken',token)
      console.log('token do usuário:', token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }