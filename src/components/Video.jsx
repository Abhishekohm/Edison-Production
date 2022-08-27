import React from "react";

const Video = ({ video, height = "auto", width = "auto" }) => {
  return (
    <video autoPlay playsInline loop muted height={height} width={width}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
