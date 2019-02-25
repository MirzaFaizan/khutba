import React from 'react';
import AppBar from '../AppBar/AppBarClient.jsx';
import Grid from '@material-ui/core/Grid';
// import YoutubeLive from 'youtube-live-react';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import firebase from '../../firebase/firebase.js';
import {askForPermissioToReceiveNotifications} from '../../firebase/firebase.js'


class ClientScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={
            streamAvailable :false,
            videoId:'noid'
        }
    }

    componentWillMount() {
        var ref = firebase.database().ref();  
        var self = this;       
        ref.once('value')
        .then(function (snap) {
            if(snap.val().stream === true && snap.val().noId !== 'noid' )
            {
                console.log('we are here')
                self.setState({
                    streamAvailable: true,
                    videoId:snap.val().videoId
                })
           }
           else{
            self.setState({
                streamAvailable: false,
                videoId:'noid'
            })
           }
        });
    }
    componentDidMount() {
        askForPermissioToReceiveNotifications();
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
        <AppBar name='User' history={this.props.history}/>
        <Grid container spacing={0}>
        {
            this.state.streamAvailable ? (
                <Grid item xs={12}>
                    <Typography align="center" variant="display3">
                        Stream Available
                    </Typography>
                    {/* <YoutubeLive
                    iframeWidth={400}
                    iframeHeight={300}
                    maxResults={50}
                    youtubeChannelId='UC-obfu2QxOc0p3EUOIKhXJw'
                    googleApiKey='AIzaSyBJi2QD2hr6JH_MRUPeU4wKg9fGyDJsiYE'/> */}
                    <div style={{paddingLeft:'30%',paddingRight:'25%'}}>
                    <YouTube
                    videoId={this.state.videoId}
                    opts={opts}
                    />
                    </div>
                </Grid>
            ):  <Grid item xs={12}>
                <Typography align="center" variant="display3">
                    Stream Not Available
                </Typography>
                </Grid>

        }
        </Grid>
        </div>
        )
    }
}

export default ClientScreen