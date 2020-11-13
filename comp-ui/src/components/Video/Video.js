import React from 'react';
import './Video.css';
import {Controller, Scene} from 'react-scrollmagic';
function Video(props){
  console.log(props);
  return(
    <div className="video-div">
      <Controller>
        <Scene duration={props.duration} triggerElement={'video-div'}
        >
        <video src={props.video}/>
        </Scene>
      </Controller>
    </div>
  )
}

export default Video;
