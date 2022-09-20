import React from "react";
import { motion } from "framer-motion";
import locationSVG from "./Pictures/undraw-location.svg";
import GoogleMaps from "./GoogleMaps";

function Location({ t }) {
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

  const animateMap = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.section
      className="location"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="rounded-container loc" variants={animatePanel}>
        <span className="hash" id="location"></span>

        <motion.h1 variants={animateText}>{t("LOCATION")}</motion.h1>
        <motion.p variants={animateText}>{t("location_text")}</motion.p>
        <motion.div className="map" variants={animateMap}>
          <GoogleMaps className="map-inner" />
        </motion.div>
      </motion.div>

      <div className="image img1">
        <img alt="location" src={locationSVG} />
      </div>
    </motion.section>
  );
}

export default Location;
