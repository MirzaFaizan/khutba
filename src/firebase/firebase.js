import app from 'firebase';


var config = {
  apiKey: "AIzaSyCOedQyfRu-inNMHSkz31WE1R8ILv2DYQM",
  authDomain: "khutba-5f97a.firebaseapp.com",
  databaseURL: "https://khutba-5f97a.firebaseio.com/",
  projectId: "khutba-5f97a",
  storageBucket: "khutba-5f97a.appspot.com",
  messagingSenderId: "952606490020"
};


class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }


  export default Firebase;