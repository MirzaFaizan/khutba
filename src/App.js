import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './modules/Login'
import Signup from './modules/signup'
import Start from './modules/start';
// import Start from './modules/start'
import Welcome from './modules/welcome'
//import { Router, Route } from "react-router"
import {Route, Switch } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';

//import Home from './modules/Home'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
    

        if (user) {
              this.setState({ user });
            
          }
          //  localStorage.setItem('user', user.uid)

        else {
          this.setState({ user: null });
          //  localStorage.removeItem('user')

        }

      });

  }
  render() {
    return (
      // <div className="App">
      
      <Switch>
        {this.state.user ?
          <Route exact path="/welcome"
            render={routeProps => <Welcome {...routeProps} user={this.state.user} />}
          />
          : <Route exact path="/welcome" component={Login} />}

        {this.state.user ?
          <Route exact path="/login" component={Welcome} />
          : <Route exact path="/login" component={Login} />}

        {this.state.user ?
          <Route exact path="/signup" component={Welcome} />
          : <Route exact path="/signup" component={Signup} />}

        {this.state.user ?
          <Route exact path="/" component={Welcome} />
          :
          <Route exact path="/" component={Login} />

        }
        {
          this.state.user!= null  && this.state.user.uid === '9EDyWWsBzEgToEbFu2ug0NVcidp2' ? <Route exact path='/home' component={Welcome}/>
          : <Route exact path = '/home' component={Start}/>
        }
      </Switch>
      // <BrowserRouter >
      //   {/* <Switch> */}
      //     <div>
      //     {this.state.user ?
      //       <Route path={"/Welcome"} component={Welcome} />

      //       : <Route path={"/Login"} component={Login} />
      //     }
      //       <Route path={"/Signup"} component={Signup} />
      //       <Route path={"/"} exact component={Login} />
      //     </div>
      //   {/* </Switch> */}
      //   {/* <Route path={"Login"} component={Login} />
      //   <Route path={"Signup"} component={Signup} />
      //   <Route path={"Welcome"} component={Welcome} />
      //   <Route path={"Start"} component={Start} /> */}

      // </BrowserRouter>

      //  {this.state.user ? (<Welcome />) : (<Signup />)}

      //</div>
    );
  }
}

export default App;
