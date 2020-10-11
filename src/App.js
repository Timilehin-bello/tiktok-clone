import React from "react";
import "./App.css";
import VideoCard from "./component/VideoCard/VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
