import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import firebase from '../../firebase/firebase.js';

const styles = {
  root: {
    flexGrow: 1,
    minWidth:'25rem'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component{

logout = () => {
  firebase.auth()
  .signOut()
  .then(() => {
  //   var StreamRef = fire.database().ref();
  //   StreamRef.child('stream').set(false);
    // alert('Sign Out Successful')
    this.props.history.push("/")

    // dispatch({ type: types.RESET_PHONEVERIFY_FLAG })
  })
  .catch(err => alert("Sign Out Failure"));
  // this.props.history.push('/')
}
render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"darkgreen"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {this.props.name}
          </Typography>
          <Button color="inherit" onClick={()=>this.logout()}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
