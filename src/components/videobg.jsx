import React from "react";
import videoBg from "../assets/img/wfobg.mp4";
import videoBg2 from "../assets/img/wfonewbgvid.MOV";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg2} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
        {/* Responsive Video-filled Text */}
        <h1
          className="font-extrabold uppercase text-center leading-tight"
          style={{
            fontSize: "clamp(4rem, 25vw, 20rem)", // min: 2rem (mobile), scales up with viewport, max: 12rem
            backgroundImage: `url(${videoBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
    lineHeight: "0.9", 
          }}
        >
          WE'RE<br />
          FLYIN <br />
          OUT
        </h1>
      </div>
    </div>
  );
};

export default VideoBackground;
