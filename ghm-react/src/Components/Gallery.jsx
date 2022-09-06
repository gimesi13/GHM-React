import React from "react";
import gallerySVG from "./Pictures/undraw-gallery.svg";

function Gallery() {
  return (
    <section className="gallery">
      <div className="rounded-container glr">
        <span className="hash" id="gallery"></span>
        <h1>GALLERY</h1>
        <div className="slider">slider</div>
      </div>
      <div className="image">
        <img alt="gallery" src={gallerySVG} />
      </div>
    </section>
  );
}

export default Gallery;
