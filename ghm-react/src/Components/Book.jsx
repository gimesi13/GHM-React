import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import thumbnail from "./Pictures/booking-thumbnail.PNG";

function Book() {
  /* VARIANTS */
  const animatePanel = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const animateText = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <motion.section
      className="book"
      initial="hidden"
      animate="show"
      variants={animatePanel}
    >
      <nav className="book-nav" role="navigation">
        <NavLink to="/" className="back-nav">
          <motion.button
            className="back-home-btn"
            whileHover={{ borderRadius: "2rem" }}
            whileTap={{ scale: 0.9 }}
          >
            Back to Main page
          </motion.button>
        </NavLink>
      </nav>
      <motion.h1 variants={animateText}>BOOK NOW</motion.h1>
      <motion.p variants={animateText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ea
        possimus, inventore cum soluta quo!
      </motion.p>

      <motion.div className="booking-card" variants={animateText}>
        <a
          href="https://forms.gle/DE3GSpYPo9k7qu567"
          target="_blank"
          rel="noreferrer"
        >
          <img src={thumbnail} alt="" />
        </a>

        <motion.p variants={animateText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto?{" "}
          <span>lnik</span> <span>lnik</span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default Book;
