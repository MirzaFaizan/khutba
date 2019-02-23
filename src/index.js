
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase';


import { BrowserRouter as Router } from "react-router-dom";
import {askForPermissioToReceiveNotifications} from './firebase/firebase.js'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
askForPermissioToReceiveNotifications();
