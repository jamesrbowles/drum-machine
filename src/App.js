import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import { drumAudio } from "./audio";

//audio
import Cev_H2 from "./assets/Cev_H2.mp3";
/* import Dsc_Oh from "./assets/Dsc_Oh.mp3";
import Heater1 from "./assets/Heater-1.mp3";
import Heater2 from "./assets/Heater-2.mp3";
import Heater3 from "./assets/Heater-3.mp3";
import Heater4 from "./assets/Heater-4_1.mp3";
import Heater6 from "./assets/Heater-6.mp3";
import KicknHat from "./assets/Kick_n_Hat.mp3";
import RP4Kick from "./assets/RP4_KICK_1.mp3";  */

function App() {
  const [audioFile, setAudioFile] = useState("");
  const [playing, setPlaying] = useState(false);

  const findAudio = (letter) => {
    let audioSrc = drumAudio.filter((audio) => audio.letter == letter);
    setAudioFile(audioSrc[0].url);
    setPlaying(true);
  };
  console.log(audioFile);

  return (
    <div id="drum-machine">
      <DrumPad
        audioFile={audioFile}
        setAudioFile={setAudioFile}
        findAudio={findAudio}
        playAudio={playAudio}
      />
      <Display />
    </div>
  );
}

export default App;
