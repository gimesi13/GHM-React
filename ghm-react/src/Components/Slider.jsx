import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

/* SLIDER */
export default function Slider({ images }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  /* FUNCTIONS */
  const prev = () => {
    setLoaded(false);
    setCurrent(current - 1);
  };
  const next = () => {
    setLoaded(false);
    setCurrent(current + 1);
  };

  return (
    <div className="slider">
      <img
        alt=""
        className="main-img"
        src={images[current]}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      <div className={!loaded ? "loading" : "not-loading"}>Loading...</div>
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
