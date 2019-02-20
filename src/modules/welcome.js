import React, { Component } from 'react';
import '../css/welcome.css';
import fire from '../config/fire';
// import { notiServerKey } from '../config/constants';

import YouTube from 'react-youtube';
// import axios from 'axios';

class Welcome extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.signout = this.signout.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      playing: false,

    };
  }
  
  handleChange = (e) => {
    this.setState({
      playing: !this.state.playing
    }, () => {
      var StreamRef = fire.database().ref();
      if (this.state.playing) {
        console.log('sending notification')
        this.sendNotification();
       
        StreamRef.child('stream').set(true);
      }
      if(this.state.playing===false){
      
        StreamRef.child('stream').set(false);
      }
    })
  }
  sendNotification = () => {
    
    const fcmtoken = localStorage.getItem('fcmtoken');
    // let notificationData = 
    fetch({
      method: 'post',
      url: "https://fcm.googleapis.com/fcm/send",
      headers: {
        'Authorization': 'AAAA3cvFfaQ:APA91bH-weVdsidMMqiMg1KXKiR6R3NAMRUJ_w0ym1abbEJiqyFmTYF9OqrWc7fOmGPivo0jHwi4aIgk96LRot1MPa85oBZYlI9aYoBjPaLiFyJ96tjP39xAH0Hg7eegiQ4lxaUDfEhD',
        'Content-Type': 'application/json'
      },
      data: {
        "notification": {
          "title": "Firebase",
          "body": "Firebase is awesome",
          "click_action": "http://localhost:3000/",
          "icon": "http://url-to-an-icon/icon.png"
      },
      "to": fcmtoken,
      }
    })
    .then(res => {
       console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  signout() {
    fire.auth()
      .signOut()
      .then(() => {
        var StreamRef = fire.database().ref();
        StreamRef.child('stream').set(false);
        console.log('sign out successful')
        this.props.history.push("/")

        // dispatch({ type: types.RESET_PHONEVERIFY_FLAG })
      })
      .catch(err => console.log("sign out failure"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '250',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    // console.log(this.state)

   

    return (
      <div className="container">

<div className="card">
            <div className="header">
              Welcome
            <button type="button" className="btn btn-info" onClick={this.signout} style={{ backgroundColor: '#3372d1', float: 'right' }}>SignOut</button>

            </div>
            <div className="text-center text-white pt-5  bg-dark h3">
              <button
                style={{
                  backgroundColor: 'Transparent',
                  backgroundRepeat: 'no-repeat',
                  border: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  outline: 'none',
                }}
                onClick={this.handleChange}

              >
                <i className="fa fa-power-off i " style={{ color: 'gainsboro' }} aria-hidden="true"></i> <br />
                <p className="pb-5" style={{ color: 'gainsboro' }}> Live Streaming is{this.state.playing ? <span style={{ color: 'gainsboro' }}>  On </span> : <span style={{ color: 'gainsboro' }}>  Off </span>}

                </p>
              </button>
            </div>
            <div className="card-body">
              {this.state.playing ?
                <YouTube
                  videoId="2g811Eo7K8U"
                  opts={opts}
                //  onReady={this._onReady}
                /> : null}


            </div>

            <div className="card-footer  text-center text-white" style={{ backgroundColor: 'gray' }}><a href='/'>Join Now</a></div>
          </div > 
      </div >
    );
  }
}

export default Welcome;
