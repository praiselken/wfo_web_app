import { useEffect, useRef } from "react";
import videoBg from "../assets/img/LTWbgVid.mp4";

const VideoBackground = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {
        // Fail silently – some browsers still block autoplay
      });
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
