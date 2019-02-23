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
            publicAuth:true,
            user:null
        }
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user && user.uid==='9EDyWWsBzEgToEbFu2ug0NVcidp2') {
                  this.setState({ user:user,adminAuth:true,publicAuth:true });
                customHistory.push('/home')
              }
            else if(user && user.uid !=='9EDyWWsBzEgToEbFu2ug0NVcidp2')
            {
                this.setState({ user:user,userAuth:true,publicAuth:true });
                customHistory.push('/userhome')
            }
            else {
                this.setState({ user: null,adminAuth:false,userAuth:false,publicAuth:false });
            }
          });
    //    var admin = localStorage.getItem('adminauth')
    //    if(admin){
    //        customHistory.push('/home')
    //    }
    }
    render () {
        return (
            <Router history={customHistory}>
            <div>
                <PublicRoute exact path='/' component={Login}/>
                <PrivateRoute exact path='/home' authed={this.state.adminAuth}  redirectTo="/" component={AdminScreen}/>
                <PrivateRoute exact path='/userhome' authed={this.state.userAuth} redirectTo="/" component={ClientScreen}/>
                <PublicRoute exact path='/signup' component={SignUp}/>
            </div>
             </Router>
        )
    }
}
    
export default CustomRoutes;