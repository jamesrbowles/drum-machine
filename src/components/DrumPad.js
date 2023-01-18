import React from "react";
import DrumPadItems from "./DrumPadItems";

import { drumAudio } from "../audio";

const DrumPad = ({ playAudio }) => {
  return (
    <div className="drumpad-section">
      {drumAudio.map((drumpad) => {
        return (
          <DrumPadItems
            key={drumpad.src}
            item={drumpad.text}
            src={drumpad.src}
            playAudio={playAudio}
          />
        );
      })}
    </div>
  );
};

export default DrumPad;
