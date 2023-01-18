import React from "react";

const DrumPadItems = ({ item, audioFile, setAudioFile, findAudio }) => {
  return (
    <div
      className="drum-pad"
      id={item}
      /* onClick={() => findAudio(item)} */
    >
      <audio
        id="audio"
        className="clip"
        src={audioFile}
        type="audio/mp3"
      ></audio>
      <span>{item}</span>
    </div>
  );
};

export default DrumPadItems;
