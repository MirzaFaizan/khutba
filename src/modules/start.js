import React, { Component } from 'react';
import '../App.css';
import '../css/welcome.css';
import fire from '../config/fire';
import YouTube from 'react-youtube';


import { askForPermissioToReceiveNotifications } from '../push-notification';


// import fire from '../config/fire';
class Start extends Component {


   constructor(props){
       super(props)
       
       this.state={
           streaming: false
       }
     
   }

    componentWillMount()
    {
        askForPermissioToReceiveNotifications()
        
        var self = this;
        var ref = fire.database().ref();
        ref.once('value')
        .then(function (snap) {
            if(snap.val().stream === true)
            {
                console.log('we are here')
                self.setState({
                    streaming: true
                })
           }
        });
    }    

    onDisplay = () => {
        const opts = {
            height: '250',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
          console.log('here',this.state.streaming)
        if(this.state.streaming === true) {
           
          
          return (
            <div className="container">

            <div className="card">
                <div className="header">
                    Start
                    <button type="button" className="btn btn-info" onClick={()=>this.signout()} style={{ backgroundColor: '#3372d1', float: 'right' }}>SignOut</button>
                </div>
                {/* <div className="text-center text-white pt-5  bg-dark h3">
                    <i className="fa fa-power-off i " aria-hidden="true"></i> <br />
                    <p className="pb-5"> HELLLOOO </p>  </div> */}
                <div className="card-body">
                <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                //  onReady={this._onReady}
                />
                </div>
            
{/* 
                <div className="card-footer  text-center text-white" style={{ backgroundColor: 'gray'}}><a>Join Now</a></div> */}
            </div>
        </div>
          )  
        }
        else{
            return (
                <div className="container">

                <div className="card">
                    <div className="header">
                        Start
                        <button type="button" className="btn btn-info" onClick={()=>this.signout()} style={{ backgroundColor: '#3372d1', float: 'right' }}>SignOut</button>
                    </div>
                    {/* <div className="text-center text-white pt-5  bg-dark h3">
                        <i className="fa fa-power-off i " aria-hidden="true"></i> <br />
                        <p className="pb-5"> HELLLOOO </p>  </div> */}
                    <div className="card-body">
                   <h1 style={{textAlign:'center'}}>Stream Not Available</h1>
                   <h2 style={{textAlign:'center'}}>Refresh</h2>
                    </div>
                
{/* 
                    <div className="card-footer  text-center text-white" style={{ backgroundColor: 'gray'}}><a>Join Now</a></div> */}
                </div>
            </div>
            )  
        }
        }
        
    signout() {
        fire.auth()
          .signOut()
          .then(() => {
            console.log('sign out successful')
            this.props.history.push("/")
    
            // dispatch({ type: types.RESET_PHONEVERIFY_FLAG })
          })
          .catch(err => console.log("sign out failure"));
      }
    render() {
        
        return (
            this.onDisplay()
        );
    }
}

export default Start;
