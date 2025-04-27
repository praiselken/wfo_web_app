import React from "react";
import videoBg from "../assets/img/wfobg.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
