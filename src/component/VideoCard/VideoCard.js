import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

function VideoCard({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
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
        src={url}
        loop
        ref={videoRef}
        onClick={onVideoClick}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default VideoCard;
