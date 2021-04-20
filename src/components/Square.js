import { useState } from 'react';
import _ from 'lodash';

import './Square.css';

const Square = ({ onToggle, active, index, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const noteRgb = `rgb(${_.random(0, 255)}, ${_.random(0, 70)}, ${_.random(0, 70)})`;

  const toggleSquare = () => {
    const updatedPlaying = !isPlaying;
    setIsPlaying(updatedPlaying);
    onToggle(index, updatedPlaying);
  };

  return (
    <div className={active ? 'Square active' : 'Square'} onClick={toggleSquare} style={{
      background: noteRgb,
      transition: duration + 's'
    }}>
    </div>
  );
};

export default Square;
