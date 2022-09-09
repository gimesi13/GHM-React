import React, { useState } from "react";
import gallerySVG from "./Pictures/undraw-gallery.svg";
import img1 from "./Pictures/snowboarders.jpg";
import img2 from "./Pictures/gallery-01.jpg";
import img3 from "./Pictures/gallery-02.jpg";
import img4 from "./Pictures/gallery-03.jpg";
import img5 from "./Pictures/gallery-04.jpg";
import img6 from "./Pictures/gallery-05.jpg";
import img7 from "./Pictures/gallery-06.jpg";
import img8 from "./Pictures/gallery-08.jpg";
import img9 from "./Pictures/gallery-09.jpg";
import img10 from "./Pictures/gallery-11.jpg";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="rounded-container glr">
        <span className="hash" id="gallery"></span>
        <h1>GALLERY</h1>
        <Slider
          className="slider"
          images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
        >
          slider
        </Slider>
      </div>
      <div className="image">
        <img alt="gallery" src={gallerySVG} />
      </div>
    </section>
  );
}

/* SLIDER */
export function Slider({ images }) {
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
