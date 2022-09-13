import React, { useState } from "react";

/* SLIDER */
export default function Slider({ images }) {
  const [current, setCurrent] = useState(0);

  /* FUNCTIONS */
  const prev = () => {
    setCurrent(current - 1);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <div className="slider">
      <img alt="" className="main-img" src={images[current]} />
      {current !== 0 && (
        <button className="prev-btn" onClick={prev}>
          prev
        </button>
      )}
      {current !== images.length - 1 && (
        <button className="next-btn" onClick={next}>
          next
        </button>
      )}
    </div>
  );
}
