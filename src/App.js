import React from "react";
import "./App.css";
import VideoCard from "./component/VideoCard/VideoCard";

function App() {
  return (
    <div className="app">
      <h1>Building a tiktok clone using React js lets gooooo</h1>
      <div className="app__videos">
        <VideoCard
          url="https://v19-web-newkey.tiktokcdn.com/a49193d54d013eb70f18e7e73c4bb9e7/5f89097a/video/tos/useast2a/tos-useast2a-ve-0068c004/4aa965884e8f4da9814ddb23fca45bce/?a=1988&br=4958&bt=2479&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202010152046020101890720341E0031F8&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Rxajx0bGxsdzMzMzczM0ApNTU2OTU8Z2U8NzVmOmk7ZWdzYjZsLS00Li5fLS0zMTZzczZiMzY2YzRgMGIyLWAvL2I6Yw%3D%3D&vl=&vr="
          channel="zicsaloma"
          description="When choir members are chronic Tictokers"
          song="original sound - earcandyofficial"
          likes={983}
          messages={864}
          shares={543}
        />
      </div>
    </div>
  );
}

export default App;
