import React from 'react'
import {YouTubePlayer} from "reactjs-media";

const VideoSec = () => {
  return (
    <div className="w-3/4 max-h-screen m-auto pt-10 pb-10 ">
     <YouTubePlayer
      src="https://www.youtube.com/watch?v=s8R3pEM2xNY"
      width={650}
      height={600}
     />
    </div>
  )
}

export default VideoSec
