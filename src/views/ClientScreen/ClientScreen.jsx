import React from 'react';
import AppBar from '../AppBar/AppBar.jsx';
import Grid from '@material-ui/core/Grid';
import YoutubeLive from 'youtube-live-react';

class ClientScreen extends React.Component{

    render() {
        return (
        <div>
        <AppBar name='User' history={this.props.history}/>
        <Grid container spacing={0}>
        <YoutubeLive
        iframeWidth={400}
        iframeHeight={300}
        maxResults={50}
        youtubeChannelId='UCqLGw6DbXL8NaiM3p97TA6A '
        googleApiKey='{YOUR_GOOGLE_API_KEY}'/>
        </Grid>
        </div>
        )
    }
}

export default ClientScreen