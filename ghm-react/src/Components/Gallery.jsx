import React from "react";
import Slider from "./Slider";
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

export default function Gallery({ t }) {
  return (
    <section className="gallery">
      <div className="rounded-container glr">
        <span className="hash" id="gallery"></span>
        <h1>{t("GALLERY")}</h1>
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
