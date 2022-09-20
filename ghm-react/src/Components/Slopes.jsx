import React from "react";
import { motion } from "framer-motion";
import gemeindealpe from "./Pictures/gemeindealpe-small.jpg";
import mariazell from "./Pictures/mariazell-small.jpg";
import annaberg from "./Pictures/annaberg-small.jpg";

export default function Slopes({ t }) {
  const slopes = [
    {
      name: "Gemeindealple (Mitterbach)",
      text: t("mitterbach_slope_text"),
      picture: gemeindealpe,
      link: "https://www.gemeindealpe.at/",
    },
    {
      name: "Bürgeralpe (Mariazell)",
      text: t("mariazell_slope_text"),
      picture: mariazell,
      link: "https://www.mariazell.at/",
    },
    {
      name: "Annaberg",
      text: t("annaberg_slope_text"),
      picture: annaberg,
      link: "https://www.annaberg.info/",
    },
  ];
  return (
    <section className="slopes">
      <span className="hash" id="slopes"></span>
      <div className="slopes-container">
        <h1>{t("SLOPES")}</h1>
        <p>{t("slopes_text")}</p>
        <div className="slope-cards">
          {slopes.map((slope) => {
            return (
              <Slope
                t={t}
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
