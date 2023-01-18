import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

function App() {
  const [activeAudio, setActiveAudio] = useState("");

  const playAudio = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveAudio(selector);
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playAudio(event.key.toUpperCase());
    });

    return () => {
      document.removeEventListener("keydown", (event) => {
        playAudio(event.key.toUpperCase());
      });
    };
  }, []);

  return (
    <div id="drum-machine">
      <DrumPad
        activeAudio={activeAudio}
        setActiveAudio={setActiveAudio}
        playAudio={playAudio}
      />
      <Display activeAudio={activeAudio} />
    </div>
  );
}

export default App;
