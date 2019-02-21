import React from 'react';
import AppBar from '../AppBar/AppBar.jsx';
import Grid from '@material-ui/core/Grid';
// import YoutubeLive from 'youtube-live-react';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';

class ClientScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={
            streamAvailable :true
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
                    youtubeChannelId='UCqLGw6DbXL8NaiM3p97TA6A '
                    googleApiKey='{YOUR_GOOGLE_API_KEY}'/> */}
                    <div style={{paddingLeft:'30%',paddingRight:'25%'}}>
                    <YouTube
                    videoId="qAqa_72Nit8"
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