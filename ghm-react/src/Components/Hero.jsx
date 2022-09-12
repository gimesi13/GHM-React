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
      <section className="hero" id="home">
        <h1>{t("welcome")}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A non
          dolorum modi, atque nam quas!
        </p>
        <a href="#about">
          <button>Read more</button>
        </a>
      </section>
    </Parallax>
  );
}

export default Hero;
