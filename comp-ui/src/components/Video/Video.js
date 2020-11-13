import React from 'react';
import {Controller, Scene} from 'react-scrollmagic';
function Video(props){
  console.log(props);
  return(
    <div>
      <Controller>
        <Scene duration={props.duration}/>
      </Controller>
      <video src={props.video} autoplay={true}/>
    </div>
  )
}

export default Video;
