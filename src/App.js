import "./App.css";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

function App() {
  return (
    <div id="drum-machine">
      <DrumPad />
      <Display />
    </div>
  );
}

export default App;
