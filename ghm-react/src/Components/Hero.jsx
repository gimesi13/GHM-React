import React from "react";
import { Parallax } from "react-parallax";
import landing from "./Pictures/landing-small.webp";
import { motion } from "framer-motion";

function Hero({ t }) {
  /* VARIANTS */
  const animatePanel = {
    hidden: { x: 200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, delayChildren: 1.5, staggerChildren: 0.2 },
    },
  };

  const animateText = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const animateSlider = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

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
        <motion.div
          className="hero-text-container"
          variants={animatePanel}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={animateText}>{t("welcome")}</motion.h1>
          <motion.p variants={animateText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A non
            dolorum modi, atque nam quas!
          </motion.p>
          <motion.a href="#about" variants={animateText}>
            <button className="read-more-btn">Read more</button>
          </motion.a>
        </motion.div>
      </section>
    </Parallax>
  );
}

export default Hero;
