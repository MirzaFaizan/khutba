import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';

import firebase from '../../firebase/firebase.js';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: '10%',
    },
  });


class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',
            error:false,
            confirmError:false,
            emailError:false
        }
    }

    handleEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = e => {
        this.setState({
            password:e.target.value
        })
    }

    handleConfirmPassword = e => {
        this.setState({
            confirmPassword:e.target.value
        })
    }

    
    handlefirstName = e => {
        this.setState({
            firstName:e.target.value
        })
    }

    
    handlelastName = e => {
        this.setState({
            lastName:e.target.value
        })
    }


    signUpHandle = () => {
        if(this.state.password === this.state.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
                console.log(u)
            }).then((u) => {
            alert('Sign Up Successful!')
             this.props.history.push("/userhome")
            })
                .catch((error) => {
                   console.log(error)
                    if (error.code === "auth/email-already-in-use")
                    {
                        alert('Email Already In Use')
                        this.setState({
                            // firstName:'',
                            // lastName:'',
                            email:'',
                            password:'',
                            confirmPassword:'',
                            emailError:true,
                            error:false,
                            confirmError:false
                        })
                    }
    
            })
        }
        else{
            this.setState({
                password:'',
                confirmPassword:'',
                confirmError:true,
                error:true,

            })
        }
        
    }

    render() {

        return (
                 <Grid container spacing={0} style={{paddingTop:'5%'}}direction="column"  alignContent="center" alignItems="center">
                  <Card style={{padding:'5%'}}>
               
                    <Grid container spacing={0} direction="row">
                        <Grid item xs={12} sm={12} md={12}>
                            <h3 style={{marginLeft:"20%"}}>Sign UP</h3>
                        </Grid>
                    </Grid>
                
                
                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="First Name"
                    name="First Name"
                    value={this.state.firstName}
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handlefirstName(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="Last Name"
                    name="Last Name"
                    value={this.state.lastName}
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handlelastName(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    autoComplete="email"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handleEmail(e)}
                    error={this.state.emailError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handlePassword(e)}
                    error={this.state.error}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    name="Confirm Password"
                    value={this.state.confirmPassword}
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e=>this.handleConfirmPassword(e)}
                    error={this.state.confirmError}
                    />
                </Grid>
                <Grid item xs={12}>
                <Grid container spacing={8} direction="row" style={{paddingTop:'5%'}}>
                    <Grid item xs={6}>
                    <Button variant="contained"  color="primary" onClick={()=>this.props.history.push('/')}>
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft:'6%'}}>
                    <Button variant="contained"  color="primary" onClick={()=>this.signUpHandle()}>
                            Sign Up
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
                </Card>
            </Grid>
          
           
        )
    }
}

export default withStyles(styles)(Login)