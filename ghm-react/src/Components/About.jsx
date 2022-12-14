import React from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import dog from "./Pictures/undraw-dog.svg";
import rv1 from "./Pictures/review1.webp";
import rv2 from "./Pictures/review2.webp";
import rv3 from "./Pictures/review3.webp";
import rv4 from "./Pictures/sonja-review.webp";
import rv5 from "./Pictures/paul-review.webp";

function About({ t }) {
  /* VARIANTS */
  const animatePanel = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
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
    <motion.section
      className="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="rounded-container abt" variants={animatePanel}>
        <span className="hash" id="about"></span>
        <motion.h1 variants={animateText}>{t("ABOUT_US")}</motion.h1>
        <motion.p variants={animateText}>{t("about_us_text")}</motion.p>
        <motion.div className="slider-abt" variants={animateSlider}>
          <Slider
            classNames="slider"
            images={[rv2, rv1, rv5, rv4, rv3]}
          ></Slider>
        </motion.div>
      </motion.div>
      <div className="image">
        <img alt="dog" src={dog}></img>
      </div>
    </motion.section>
  );
}

export default About;
