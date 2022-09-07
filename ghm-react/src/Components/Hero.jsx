import React from "react";
import { Parallax, Background } from "react-parallax";
import landing from "./Pictures/landing-small.webp";

function Hero({ t }) {
  return (
    <Parallax
      className="parallax-main"
      bgImage={landing}
      contentClassName="parallaximg" //
      bgImageStyle={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transition: "0s ease-in-out",
        transitionProperty: "background-position",
        backgroundAttachment: "fixed",
      }}
      strength={300}
    >
      <section className="hero">
        <span className="hash" id="home"></span>
        <h1>{t("welcome")}</h1>
        <p>asd</p>
        <div className="hero-arrow">arrow</div>
      </section>
    </Parallax>
  );
}

export default Hero;
