import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Room({ picture, name, price, t }) {
  /* VARIANTS */
  const animatePanel = {
    hidden: {},
    show: {
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const animateText = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="room"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={animatePanel}
    >
      <NavLink to="/book">
        <motion.img
          loading="lazy"
          alt=""
          src={picture}
          className="room-image"
          variants={animateText}
        />
      </NavLink>
      <motion.div className="room-info" variants={animateText}>
        <div className="room-name">{name}</div>
        <div className="room-price">{price}</div>
      </motion.div>
    </motion.div>
  );
}

export default Room;
