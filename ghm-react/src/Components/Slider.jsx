import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

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
        <BsFillArrowLeftCircleFill
          className="prev-btn arrowsSVG"
          onClick={prev}
        />
      )}
      {current !== images.length - 1 && (
        <BsFillArrowRightCircleFill
          className="next-btn arrowsSVG"
          onClick={next}
        />
      )}
    </div>
  );
}
