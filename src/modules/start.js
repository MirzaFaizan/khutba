import React, { Component } from 'react';
import '../App.css';
import '../css/welcome.css';
import fire from '../index.js';

// import fire from '../config/fire';
class Start extends Component {

    render() {
        return (
            <div className="container">

                <div className="card">
                    <div className="header">
                        Start
    </div>
                    <div className="text-center text-white pt-5  bg-dark h3">
                        <i className="fa fa-power-off i " aria-hidden="true"></i> <br />
                        <p className="pb-5"> Live Streaming Off </p>  </div>
                    <div className="card-body   ">



                    </div>

                    <div className="card-footer  text-center text-white" style={{ backgroundColor: 'gray'}}><a>Join Now</a></div>
                </div>
            </div>
        );
    }
}

export default Start;
