import { useEffect, useState } from "react";
import * as Tone from "tone";
import _ from "lodash";

import { modulationTypes, synths, scales } from "../constants";

import Square from "./Square";

import './Row.css';

const Row = () => {
  const [loop, setLoop] = useState();
  const [rowNotes, setRowNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();
  const [noteDuration, setNoteDuration] = useState();

  useEffect(() => {
    const bar =  _.sample([2, 4, 8, 16,]); // bar duration
    const randomRowSize = _.sample([2, 4, 8, 16]);
    const duration = bar / randomRowSize;
    setNoteDuration(duration);
    
    const randomNotes = _.shuffle(_.sampleSize(_.sample(scales), randomRowSize));
    setRowNotes(randomNotes);

    const synth = new Tone.Synth({
      oscillator: {
        type: _.sample(synths),
        modulationType: _.sample(modulationTypes),
      },
    }).toDestination();

    const rowLoop = new Tone.Pattern((time, note) => {
      synth.triggerAttackRelease(note, duration, time);
      setActiveNote(note);
    }, randomNotes);

    rowLoop.interval = duration;

    setLoop(rowLoop);
  }, []);

  const playRow = () => {
    if(loop.state === 'stopped') {
      loop.start();
    } else {
      loop.stop();
    }
  }

  return (
    <div className="Row" onClick={playRow}>
      {rowNotes.map((note, index) => (
        <Square
          key={index}
          active={note === activeNote}
          duration={noteDuration}
        />
      ))}
    </div>
  );
};

export default Row;
