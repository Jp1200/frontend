import React from 'react';

function Video(props){
  return(
    <div>
      <video src={props.video} autoplay={true}/>
    </div>
  )
}

export default Video;
