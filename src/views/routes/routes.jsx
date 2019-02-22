import React from 'react';
import {
    Router,
    Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from '../Login/Login.jsx';
import AdminScreen from '../AdminScreen/AdminScreen.jsx';
import ClientScreen from '../ClientScreen/ClientScreen.jsx';
import SignUp from '../SignUp/SignUp.jsx';


const customHistory = createBrowserHistory();



class CustomRoutes extends React.Component {
    render () {
        return (
            <Router history={customHistory}>
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={AdminScreen}/>
                <Route exact path='/userhome' component={ClientScreen}/>
                <Route exact path='/signup' component={SignUp}/>
            </div>
             </Router>
        )
    }
}
    
export default CustomRoutes;