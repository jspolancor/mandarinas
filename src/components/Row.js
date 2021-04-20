import { useEffect, useState } from "react";
import * as Tone from "tone";
import _ from "lodash";

import { modulationTypes, synths, notes, scales } from "../constants";

import Square from "./Square";

import './Row.css';

const Row = () => {
  const [squareSynth, setSquareSynth] = useState();
  const [loop, setLoop] = useState();
  const [rowNotes, setRowNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();
  const [rowSize, setRowSize] = useState();
  const [noteDuration, setNoteDuration] = useState();

  useEffect(() => {
    const bar =  _.sample([2, 4, 8, 16,]);
    const randomRowSize = _.sample([2, 4, 8, 16]);
    setRowSize(randomRowSize);
    const duration = bar / randomRowSize;
    setNoteDuration(duration);

    // const randomNotes = _.shuffle(_.sample(_.chunk(notes, randomRowSize)));
    const randomNotes = _.shuffle(_.sampleSize(_.sample(scales), randomRowSize));
    // const repeatedArray = _.flatten(_.times(10, _.constant(randomNotes)));
    setRowNotes(randomNotes);

    const synth = new Tone.Synth({
      oscillator: {
        type: _.sample(synths),
        modulationType: _.sample(modulationTypes),
      },
    }).toDestination();

    setSquareSynth(synth);

    const rowLoop = new Tone.Pattern((time, note) => {
      synth.triggerAttackRelease(note, duration, time);
      setActiveNote(note);
    }, randomNotes);

    rowLoop.interval = duration;

    setLoop(rowLoop);
  }, []);

  const toggleNote = (index, isPlaying) => {
    console.log(index, isPlaying);
  };

  const playRow = () => {
    if(loop.state === 'stopped') {
      Tone.Transport.start();
      loop.start();
    } else {
      loop.stop();
    }
  }

  return (
    <div className="Row" onClick={playRow}>
      {rowNotes.map((note, index) => (
        <Square
          rowSize={rowSize}
          key={index}
          index={index}
          note={note}
          active={note === activeNote}
          onToggle={toggleNote}
          duration={noteDuration}
        />
      ))}
    </div>
  );
};

export default Row;
