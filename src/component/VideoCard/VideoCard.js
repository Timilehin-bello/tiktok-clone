import React, { useRef, useState } from "react";
import "./VideoCard.css";
import Video1 from "../Video/Video1.mp4";
import VideoFooter from "../VideoFooter/VideoFooter";

function VideoCard() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoClick = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      setPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <div className="videoCard">
      <video
        className="videoCard__video"
        src={Video1}
        loop
        ref={videoRef}
        onClick={onVideoClick}
      />
      <VideoFooter />
    </div>
  );
}

export default VideoCard;
