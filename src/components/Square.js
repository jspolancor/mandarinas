import { useEffect, useState } from "react";
import _ from "lodash";

import "./Square.css";

const Square = ({ active, duration }) => {
  const [origin, setOrigin] = useState();
  const noteRgb = `rgb(${_.random(100, 255)}, ${_.random(100, 210)}, ${_.random(
    0,
    30
  )})`;

  useEffect(() => {
    setOrigin(_.sample(["top", "bottom", "left", "right", "center"]));
  }, []);

  return (
    <div
      className={active ? "Square active" : "Square"}
      style={{
        background: noteRgb,
        transition: duration + "s",
        transformOrigin: origin,
      }}
    ></div>
  );
};

export default Square;
