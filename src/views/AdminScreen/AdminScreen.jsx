import React from 'react';
import AppBar from '../AppBar/AppBarAdmin.jsx';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import YouTube from 'react-youtube';

import firebase from '../../firebase/firebase.js';
class AdminScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            videoId:'',
            stream:false,
        }
    }

    handleVideoid = e => {
        this.setState({
            videoId:e.target.value
        })
    }

    startStream = () => {
        var StreamRef = firebase.database().ref();
        if (this.state.stream===false) {
          console.log('sending notification')         
          StreamRef.child('stream').set(true);
          StreamRef.child('videoId').set(this.state.videoId);
          this.setState({
            stream:true
        })
        }
      } 


    stopStream = () => {
        var StreamRef = firebase.database().ref();
        if(this.state.stream===true){
            console.log('else')
          StreamRef.child('stream').set(false);
          StreamRef.child('videoId').set('noid');
          this.setState({
            stream:false,
            videoId:''
        })
        } 
    }
    render() {
        const opts = {
            height: '480',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
        return (
            <div>
                <AppBar name='Teacher' history={this.props.history}/>
            <div style={{padding:12}}>
            <Grid container spacing={24} justify="center" alignContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography align="center" variant="display3">
                        You Can Start By Placing ID of video Here
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div style={{paddingLeft:'10%',paddingRight:'10%'}}>
                    <TextField 
                      id="outlined-videid-input"
                      label="Video ID"
                      name="Video ID"
                      value={this.state.videoId}
                      margin="dense"
                      variant="outlined"
                      fullWidth={true}
                    onChange={e=>this.handleVideoid(e)}
                    />
                    </div>
                </Grid>
                    {
                      this.state.stream ? (
                        <div>
                        <Grid item xs={12}>
                        <div style={{textAlign:'center'}}>
                        <Button variant="contained" size="large" onClick={()=>this.stopStream()}>
                        <Stop/>
                        </Button>
                        </div>
                        </Grid>
                        <div style={{paddingTop:'10%'}}>
                            <YouTube
                            videoId={this.state.videoId}
                            opts={opts}
                            />
                         </div>
                        </div>
                      )
                      : (
                        <Grid item xs={12}>
                        <div style={{textAlign:'center'}}>
                        <Button variant="contained" size="large" onClick={()=>this.startStream()}>
                        <PlayArrow/>
                        </Button>
                        </div>
                        </Grid>
                      )
                    }
            </Grid>
            </div>
            </div>
        )
    }
}

export default AdminScreen