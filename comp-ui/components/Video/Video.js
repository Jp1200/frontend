import React, { Component } from 'react';

class Video extends Component {

  render() {
    return 
    <div>
        <video src={this.props.video}>

        </video>
    </div>;
  }
}

export default Video;
