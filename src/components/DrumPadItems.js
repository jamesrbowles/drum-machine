import React from "react";

const DrumPadItems = ({ item, src, playAudio }) => {
  return (
    <div className="drum-pad" id={src} onClick={() => playAudio(item)}>
      <audio id={item} className="clip" src={src}></audio>
      <span>{item}</span>
    </div>
  );
};

export default DrumPadItems;
