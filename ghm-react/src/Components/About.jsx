import React from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import dog from "./Pictures/undraw-dog.svg";
import rv1 from "./Pictures/review1.png";
import rv2 from "./Pictures/review2.png";
import rv3 from "./Pictures/review3.png";
import rv4 from "./Pictures/sonja-review.PNG";
import rv5 from "./Pictures/paul-review.PNG";

function About() {
  /* VARIANTS */
  const animatePanel = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: { delayChildren: 0.5, staggerChildren: 0.2 },
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
        <motion.h1 variants={animateText}>ABOUT US</motion.h1>
        <motion.p variants={animateText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          sequi maxime voluptates. Possimus reiciendis eveniet accusamus,
          quibusdam nam dolorem labore laboriosam sapiente odit, explicabo velit
          facere suscipit architecto eius voluptatibus ipsum? Qui ea expedita
          quas molestias perferendis fugit obcaecati cupiditate quaerat eos
          dolorum dolorem delectus m
        </motion.p>
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
