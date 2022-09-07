import React from "react";
import locationSVG from "./Pictures/undraw-location.svg";
import GoogleMaps from "./GoogleMaps";

function Location() {
  return (
    <section className="location">
      <div className="rounded-container loc">
        <span className="hash" id="location"></span>

        <h1>LOCATION</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reiciendis officia velit, odit eius fugit vero dignissimos iure
          perspiciatis aspernatur, atque fugiat ea sed quia recusandae quae?
          Voluptatibus, tempora! Praesentium?
        </p>
        <div className="map">
          <GoogleMaps />
        </div>
      </div>

      <div className="image img1">
        <img alt="location" src={locationSVG} />
      </div>
    </section>
  );
}

export default Location;
