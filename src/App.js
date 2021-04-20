import { useEffect, useState } from "react";
import _ from "lodash";
import * as Tone from "tone";

import Row from "./components/Row";

import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rows, setRows] = useState([]);

  const start = () => {
    setIsPlaying(true);
    Tone.start();
    Tone.Transport.start();
  };

  useEffect(() => {
    const howManyRows = _.random(4, 10);
    setRows(_.map(new Array(Math.ceil(howManyRows)), (el, i) => i));
  }, []);

  return (
    <div className="App">
      {!isPlaying && (
        <div className="Intro" onClick={start}>
          <div>
            <h1>Mandarinas</h1>
            <small>Click to start</small>
          </div>
        </div>
      )}
      {isPlaying && rows.map((row, index) => <Row key={index} />)}
    </div>
  );
}

export default App;
