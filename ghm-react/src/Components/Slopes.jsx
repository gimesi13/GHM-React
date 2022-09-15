import React from "react";
import { motion } from "framer-motion";
import gemeindealpe from "./Pictures/gemeindealpe-small.jpg";
import mariazell from "./Pictures/mariazell-small.jpg";
import annaberg from "./Pictures/annaberg-small.jpg";

const slopes = [
  {
    name: "Gemeindealple (Mitterbach)",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: gemeindealpe,
    link: "https://www.gemeindealpe.at/",
  },
  {
    name: "Mariazell",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: mariazell,
    link: "https://www.mariazell.at/",
  },
  {
    name: "Annaberg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: annaberg,
    link: "https://www.annaberg.info/",
  },
];

export default function Slopes() {
  return (
    <section className="slopes">
      <span className="hash" id="slopes"></span>
      <div className="slopes-container">
        <h1>SLOPES</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo
          praesentium recusandae. Porro non a nemo. Officia aspernatur vel
          minima, vero, molestias nesciunt explicabo eligendi, soluta
          accusantium praesentium doloribus fugit!
        </p>
        <div className="slope-cards">
          {slopes.map((slope) => {
            return (
              <Slope
                className="slope"
                key={slope.name}
                name={slope.name}
                picture={slope.picture}
                text={slope.text}
                link={slope.link}
              ></Slope>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Slope({ name, picture, text, link }) {
  /* VARIANTS */
  const animatePanel = {
    hidden: {},
    show: {
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };

  const animateText = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="slope"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={animatePanel}
    >
      <motion.img
        src={picture}
        alt=""
        className="slope-image"
        variants={animateText}
      />
      <motion.div className="slope-info" variants={animateText}>
        <div className="slope-name">{name}</div>
        <div className="slope info">{text}</div>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </motion.div>
    </motion.div>
  );
}
