import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import thumbnail from "./Pictures/booking-thumbnail.PNG";

function Book({ t }) {
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
            {t("back_to_main_page")}
          </motion.button>
        </NavLink>
      </nav>
      <motion.h1 variants={animateText}>{t("BOOK_NOW")}</motion.h1>
      <motion.p variants={animateText}>{t("book_now_text")}</motion.p>

      <motion.div className="booking-card" variants={animateText}>
        <a
          href="https://forms.gle/DE3GSpYPo9k7qu567"
          target="_blank"
          rel="noreferrer"
        >
          <img src={thumbnail} alt="" />
        </a>

        <motion.p variants={animateText}>
          {t("book_now_text_2")}
          <span>lnik</span> <span>lnik</span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default Book;
