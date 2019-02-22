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
      console.log('sign out successful')
      var StreamRef = firebase.database().ref();
      StreamRef.child('stream').set(false);
      StreamRef.child('videoId').set('noid');
      this.props.history.push("/")

      // dispatch({ type: types.RESET_PHONEVERIFY_FLAG })
    })
    .catch(err => console.log("sign out failure"));
    // this.props.history.push('/')
}
render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
