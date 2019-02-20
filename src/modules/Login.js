import React, { Component } from 'react';
import '../css/login.css';
import fire from '../config/fire';
// import { askForPermissioToReceiveNotifications } from '../push-notification';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            emailvalid: false,
            emailvalidationMessage: '',
            passwordvalid: false,
            passwordvalidationMessage: '',
            loginError: ''
        };
    }

    handleChange(e) {
     //   console.log(e.target)
        let name = e.target.name
        this.setState({ [e.target.name]: e.target.value }
            ,
            () => {
                if (name === 'email') {
                    if (/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}[0-9]{1,3}[0-9]{1,3})|(([a-zA-Z0-9]+)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.state.email)) {
                       // console.log(this.state.email)
                        this.setState({ emailvalid: true })
                    } else {
                        this.setState({ emailvalidationMessage: "Please Enter valid Email", emailvalid: false })
                    }
                } else if (name === 'password') {
                    if (this.state.password !== "") {
                      //  console.log(this.state.email)
                        this.setState({ passwordvalid: true })
                    } else {
                        this.setState({ passwordvalidationMessage: "Please Enter Password ", passwordvalid: false })
                    }
                }
            }
        );


    }

    login(e) {
     //   console.log(e)
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            // console.log(u)
            this.props.history.push("/home")

        }).catch((error) => {
       //     console.log(error);
            this.setState({
                loginError: "Invalid Email or Password"
            })
        });
    }

    signup(e) {
      //  console.log(this.props)
        this.props.history.push("/signup")

    }
    render() {
       // console.log(this.state)
        return (  
            <div className="signup-form">
            {/* <button onClick={askForPermissioToReceiveNotifications} >
            Clique aqui para receber notificações
            </button> */}
                <form >
                    <h1><b>Login </b></h1>
                    <div className="form-group ">
                        <div className="form-label-group">
                           <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        
                           <label htmlFor="exampleInputEmail1">Email</label>
                            {!this.state.emailvalid ? <small className="form-text text-muted">{this.state.emailvalidationMessage}</small> : null}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label-group">
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                              <label htmlFor="exampleInputPassword1" >Password</label>
                            {!this.state.passwordvalid ? <small className="form-text text-muted">{this.state.passwordvalidationMessage}</small> : null}

                        </div>
                    </div>
                    <br />
    
                    <h4 className="text-center ">Don't have an account ?<a href="/signup"  >Sign Up</a></h4>
                    {/* <p className="text-divider"><span>OR</span></p>
            <button  className="btn btn-block btn-facebook">
                        <i className="fab fa-facebook-f " style={{ fontSize: '22px', backgroundColor: '#3372d1', color: 'white', paddingTop: '1%', paddingBottom: '4%' }}>
                            <button type="button" className="btn btn-info" style={{ backgroundColor: '#3372d1' }}>Connect with facebook</button></i></button>
                    <button  className="btn btn-block btn-google  "> <i className='fab fa-google-plus ' style={{ fontSize: '19px', paddingTop: '1%', paddingBottom: '4%', backgroundColor: 'rgb(185, 67, 67)', color: 'white' }}>
                        <button type="button" className="btn btn-danger " style={{ backgroundColor: 'rgb(185, 67, 67)' }}>Connect with Google</button></i></button> */}
                    <div className="form-group">
                        <button type="submit" onClick={this.login} className="btn btn-primary btn-block btn-lg">Log In</button>
                    </div>
                    {this.state.loginError ? <span >{this.state.loginError}</span> : null}

                </form>
            </div>

        );
    }
}
export default Login;
