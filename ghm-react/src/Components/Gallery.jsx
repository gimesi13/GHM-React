import React from "react";
import Slider from "./Slider";
import gallerySVG from "./Pictures/undraw-gallery.svg";
import img1 from "./Pictures/snowboarders.webp";
import img2 from "./Pictures/gallery-01.webp";
import img3 from "./Pictures/gallery-02.webp";
import img4 from "./Pictures/gallery-03.webp";
import img5 from "./Pictures/gallery-04.webp";
import img6 from "./Pictures/gallery-05.webp";
import img7 from "./Pictures/gallery-06.webp";
import img8 from "./Pictures/gallery-08.webp";
import img9 from "./Pictures/gallery-09.webp";
import img10 from "./Pictures/gallery-11.webp";

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
