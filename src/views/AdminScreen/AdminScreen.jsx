import React from 'react';
import AppBar from '../AppBar/AppBar.jsx';
import Grid from '@material-ui/core/Grid';


class AdminScreen extends React.Component{

    render() {

        return (
            <div>
                <AppBar name='Teacher' history={this.props.history}/>
            <Grid container spacing={0}>
                  
            </Grid>
            </div>
        )
    }
}

export default AdminScreen