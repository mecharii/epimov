"use client";
import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const MusicPLayer = ({ music }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button
        aria-label="müzik oynat"
        className="p-2 text-gray-400 hover:text-white"
        onClick={togglePlay}
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPLayer;
