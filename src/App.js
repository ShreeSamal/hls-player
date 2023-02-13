import React, { useState, useEffect } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

export default function App() {
  const query = new URLSearchParams(window.location.search);
  const src = query.get("src");
  const timestamp = query.get("timestamp");
  let p = useRef();
  return (
      <div className="App" >
      <ReactPlayer
      onReady={() => p.current.seekTo(timestamp?timestamp:0)}
         ref={p}
        url={src}
        className="react-player"
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}