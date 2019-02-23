import React from 'react';
import {
    Router,
    // Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from '../Login/Login.jsx';
import AdminScreen from '../AdminScreen/AdminScreen.jsx';
import ClientScreen from '../ClientScreen/ClientScreen.jsx';
import SignUp from '../SignUp/SignUp.jsx';

import { PublicRoute, PrivateRoute } from 'react-router-with-props';

import firebase from '../../firebase/firebase.js';

const customHistory = createBrowserHistory();



class CustomRoutes extends React.Component {
    constructor(props){
        super(props)
        this.state={
            adminAuth:false,
            userAuth:false,
            user:{}
        }
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
                      if(user && user.uid==='9EDyWWsBzEgToEbFu2ug0NVcidp2')
                       { 
                        console.log('yes')
                           this.setState({ user,adminAuth:true })
                       }
                       else if(user && user.uid !== '9EDyWWsBzEgToEbFu2ug0NVcidp2'){
                        console.log('yes else if')
                        this.setState({ user,userAuth:true });
                       }
                    //  localStorage.setItem('user', user.uid)
                  else {
                      console.log('else')
                    this.setState({ user: null });
                    //  localStorage.removeItem('user')
                  }
                });
    }
    render () {
        return (
            <Router history={customHistory}>
            <div>
                <PublicRoute exact path='/'  component={Login}/>
                <PrivateRoute exact path='/home' authed={this.state.adminAuth}  redirectTo="/" component={AdminScreen}/>
                <PrivateRoute exact path='/userhome' authed={this.state.userAuth} redirectTo="/" component={ClientScreen}/>
                <PublicRoute exact path='/signup' component={SignUp}/>
            </div>
             </Router>
        )
    }
}
    
export default CustomRoutes;