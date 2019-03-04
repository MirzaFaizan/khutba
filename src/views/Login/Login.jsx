import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import firebase from '../../firebase/firebase.js';
import Card from '@material-ui/core/Card';
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
            email:'',
            password:'',
            error:false
        }
    }

    // componentWillMount(){
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user.uid==='9EDyWWsBzEgToEbFu2ug0NVcidp2') {
    //           this.props.history.push('/home')
    //         } 
    //         else if(user.uid!=='9EDyWWsBzEgToEbFu2ug0NVcidp2') {
    //             this.props.history.push('/home')
    //           } 
    //       });
          
    // }
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


    signInHandle = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            if(u.user.uid && u.user.uid==='9EDyWWsBzEgToEbFu2ug0NVcidp2'){
                this.props.history.push('/home')
            }
            else{
                this.props.history.push('/userhome')
            }
        }).catch((error) => {
           console.log(error);
           alert(error)
        });
    }

    signUpHandle = () => {  
    this.props.history.push('/signup') 
    }

    render() {

        return (
                 <Grid container spacing={0} style={{paddingTop:'5%'}}direction="column"  alignContent="center" alignItems="center">

                   
                  <Card style={{padding:'5%'}}>
               
                    <Grid container spacing={0} direction="row">
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <img src="./IslamOnline.png" alt="Islam Online" style={{width:'200px',height:'auto'}}/>
                    </Grid>
                        {/* <Grid item xs={12} sm={12} md={12}>
                            <h3 style={{marginLeft:"30%"}}>Login</h3>
                        </Grid> */}
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
                    error={this.state.error}
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
                <Grid container spacing={8} direction="row" style={{paddingTop:'5%'}}>
                    <Grid item xs={6}>
                    <Button variant="contained"  color="primary" style={{color:'white',backgroundColor:'darkgreen'}} onClick={()=>this.signInHandle()}>
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft:'6%'}}>
                    <Button variant="contained"  color="primary" style={{color:'white',backgroundColor:'darkgreen'}} onClick={()=>this.signUpHandle()}>
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