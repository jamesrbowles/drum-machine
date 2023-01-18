import React from "react";
import DrumPadItems from "./DrumPadItems";

const drumLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const DrumPad = ({ audioFile, setAudioFile, findAudio, playAudio }) => {
  return (
    <div className="drumpad-section">
      {drumLetters.map((item, index) => {
        return (
          <DrumPadItems
            key={item}
            item={item}
            audioFile={audioFile}
            setAudioFile={setAudioFile}
            findAudio={findAudio}
            onClick={playAudio}
          />
        );
      })}
    </div>
  );
};

export default DrumPad;
