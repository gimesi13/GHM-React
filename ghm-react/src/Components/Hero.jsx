import React from "react";
import { Parallax, Background } from "react-parallax";
import landing from "./Pictures/landing-large.png";

function Hero({ t }) {
  return (
    <Parallax
      className="parallax-main"
      bgImage={landing}
      bgImageStyle={{
        objectFit: "cover",
        height: "100%",
      }}
      strength={300}
    >
      <section className="hero">
        <span className="hash" id="home"></span>
        <h1>{t("welcome")}</h1>
        <p>asd</p>
        <div className="hero-arrow">arrow</div>{" "}
      </section>
    </Parallax>
  );
}

export default Hero;
