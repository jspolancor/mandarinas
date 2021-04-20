import { useEffect, useState } from "react";
import * as Tone from "tone";
import _ from 'lodash';

import Row from './components/Row';

import "./App.css";

// connect the UI with the components
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const howManyRows = window.innerHeight / 150;
    setRows(_.map(new Array(Math.ceil(howManyRows)), (el,i) => i));
  }, []);

  console.log(rows)
  return (
    <div className="App">
      {rows.map((row, index) => <Row key={index} />)}
    </div>
  );
}

export default App;
