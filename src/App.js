import React, { useEffect, useState } from "react";
import db from "./firebase/firebase";
import "./App.css";
import VideoCard from "./component/VideoCard/VideoCard";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <h1>Building a tiktok clone using React js lets gooooo</h1>
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <VideoCard
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
