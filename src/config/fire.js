import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA94oWHLyo8QGb4QN5TbAuUGi2LqVa3rRE",
  authDomain: "onlineacademy-a3663.firebaseapp.com",
  databaseURL: "https://onlineacademy-a3663.firebaseio.com",
  projectId: "onlineacademy-a3663",
  storageBucket: "onlineacademy-a3663.appspot.com",
  messagingSenderId: "862982743703"
};
const fire = firebase.initializeApp(config);



export default fire;