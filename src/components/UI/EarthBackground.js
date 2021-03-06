import React from "react";
import ReactPlayer from "react-player";

const earthBackground = (props) => (
  <React.Fragment>
    <div className="absolute w-full">
      <div className="absolute h-full w-full bg-black opacity-75"></div>
      <ReactPlayer
        height="100%"
        width="100%"
        url="https://the-cast.s3-us-west-1.amazonaws.com/earth-night.mp4"
        playing={true}
        loop={true}
        muted={true}
      />
    </div>
  </React.Fragment>
);

export default earthBackground;
