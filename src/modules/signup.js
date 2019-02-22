import React, { Component } from 'react';
import '../css/signup.css';
import fire from '../config/fire';
class Signup extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            emailvalid: false,
            emailvalidationMessage: '',
            passwordvalid: false,
            passwordvalidationMessage: '',
            signupError: ''
        };
    }

    login(e) {
        //console.log(e)
        this.props.history.push("/home")

    }

    handleChange(e) {
        //  console.log(e.target)
        let name = e.target.name
        this.setState({ [e.target.name]: e.target.value }
            ,
            () => {
                if (name === 'email') {
                    if (/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}[0-9]{1,3}[0-9]{1,3})|(([a-zA-Z0-9]+)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.state.email)) {
                     //   console.log(this.state.email)
                        this.setState({ emailvalid: true, emailvalidationMessage: "" })
                    } else {
                        this.setState({ emailvalidationMessage: "Please Enter valid Email", emailvalid: false })
                    }
                } else if (name === 'password') {
                    if (this.state.password !== "") {
                        //  console.log(this.state.email)
                        this.setState({ passwordvalid: true, passwordvalidationMessage: "" })
                    } else {
                        this.setState({ passwordvalidationMessage: "Please Enter Password ", passwordvalid: false })
                    }
                }
            }
        );


    }
    users = () => fire.database().ref('users');

    signup(e) {
        //  console.log(this.state)


        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => {
           console.log(u)
            // this.props.history.push("/home")
        })
            .catch((error) => {
               console.log(error)
                if (error.code === "auth/email-already-in-use")
                {
                    // this.setState({
                    //     signupError: "Email already In Use"
                    // })
                }

        })
    }
    render() {
        //   console.log(this.state)
        return (
            <div className="signup-form">
                <form >
                    <h1><b>Sign Up</b></h1>

                    <div className="form-group">

                        <div className="form-label-group">

                            {/* <input type="text" className="form-control" name="fname" placeholder="Email" id="label-fname" required="required  autofocus" /> */}
                            <input value={this.state.fname} onChange={this.handleChange} type="text" name="fname" className="form-control" id="label-fname" required="autofocus" placeholder="First Name" />

                            <label htmlFor="label-fname">First Name</label>
                        </div>
                    </div>
                    <div className="form-group ">

                        <div className="form-label-group">

                            {/* <input type="text" className="form-control " name="lname" placeholder="Email" id="label-lname" required="required  autofocus" /> */}
                            <input value={this.state.lname} onChange={this.handleChange} type="text" name="lname" className="form-control" id="label-lname" required="autofocus" placeholder="Last Name" />

                            <label htmlFor="label-lname">Last Name</label>
                        </div>
                    </div>
                    <div className="form-group ">

                        <div className="form-label-group">

                            {/* <input type="email" className="form-control " name="email" placeholder="Email" id="label-email" required="required  autofocus" /> */}
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="label-email" aria-describedby="emailHelp" required="required  autofocus" placeholder="Enter email" />

                            <label htmlFor="label-email">Email Address</label>

                            {!this.state.emailvalid ? <small className="form-text text-muted">{this.state.emailvalidationMessage}</small> : null}

                        </div>
                    </div>




                    <div className="form-group">
                        <div className="form-label-group">
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="label-password" required="required  autofocus" placeholder="Password" />

                            {/* <input type="password" className="form-control" name="password" placeholder="Password" id="label-password" required="required  autofocus" /> */}
                            <label htmlFor="label-password">Password</label>
                            {!this.state.passwordvalid ? <small className="form-text text-muted">{this.state.passwordvalidationMessage}</small> : null}

                        </div>


                    </div>
                    <br />

                    {/* <p className="text-divider"><span>OR</span></p>

                    <a href="facebook.com" className="btn btn-block btn-facebook">
                        <i className="fab fa-facebook-f " style={{ fontSize: '22px', backgroundColor: '#3372d1', color: 'white', paddingTop: '1%', paddingBottom: '4%' }}>
                            <button type="button" className="btn btn-info" style={{ backgroundColor: '#3372d1' }}>Connect with facebook</button></i></a>


                    <a href="google.com" className="btn btn-block btn-google  "> <i className='fab fa-google-plus ' style={{ fontSize: '19px', paddingTop: '1%', paddingBottom: '4%', backgroundColor: 'rgb(185, 67, 67)', color: 'white' }}>
                        <button type="button" className="btn btn-danger " style={{ backgroundColor: 'rgb(185, 67, 67)' }}>Connect with Google</button></i></a> */}




                    <div className="form-group">
                        <button type="button" onClick={this.signup} className="btns btn-primary btn-block btn-lg">Sign Up</button>
                    </div>
                    {this.state.signupError ? <span className="text-center" >{this.state.signupError}</span> : null}

                </form>
                <div className="text-center">Already have an account? <a href="/login">Login here</a>.</div>

            </div>
        );
    }
}

export default Signup;
