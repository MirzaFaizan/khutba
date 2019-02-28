import React from 'react';
import AppBar from '../AppBar/AppBarAdmin.jsx';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import YouTube from 'react-youtube';
import firebase from '../../firebase/firebase.js';
import axios from 'axios';

var elements = {}
var elementsArray = []
var StreamRef = firebase.database().ref();

class AdminScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            videoId:'noid',
            stream:false,
        }
    }

    handleVideoid = e => {
        this.setState({
            videoId:e.target.value
        })
    }

    componentDidMount() {
      var StreamRef = firebase.database().ref();
      StreamRef.once('value')
      .then(function (snap) {
        elements = snap.val();
        // var count = Object.keys(elements).length;
        Object.values(elements).map((type,key)=>{
            elementsArray.push(type)
            return null
        })
      });
    }

    startStream = () => {
        if (this.state.stream===false && this.state.videoId !=='noid') {
          console.log('sending notification')
          this.sendNotification();       
          StreamRef.child('stream').set(true);
          StreamRef.child('videoId').set(this.state.videoId);
          this.setState({
            stream:true
        })
        }
        else{
            alert('Add ID First')
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

    sendNotification = () => {
      // for(var i=0; i<(elementsArray.length-2);i++){
          // console.log(elementsArray[i].toString());
          axios.post({
            url: "https://fcm.googleapis.com/fcm/send",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'key=AAAA3cvFfaQ:APA91bH-weVdsidMMqiMg1KXKiR6R3NAMRUJ_w0ym1abbEJiqyFmTYF9OqrWc7fOmGPivo0jHwi4aIgk96LRot1MPa85oBZYlI9aYoBjPaLiFyJ96tjP39xAH0Hg7eegiQ4lxaUDfEhD',
            },
            data: {
              "notification": {
                "title": "KHUTBA",
                "body": "Khutba stream has Started",
                "icon": "https://cdn2.iconfinder.com/data/icons/shopping-180/32/43-512.png"
            },
            "to": "eTq10DdTrbI:APA91bGowpXJH3Bxwj1iHhCq-425u3GToFWGaIWpoJYXfAbQj0MJHL1PQizDCfNRbUhwy7aOVpszK-4kszBZfzeozfVY8e_I-Fz8f8MiUyLSIsQZdJriaOrzBg-2YpkQ-gnVob5QaxHT",
            }
          })
          .then(res => {
             console.log(res)
          }).catch(err => {
            console.log(err)
          });
  // }
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