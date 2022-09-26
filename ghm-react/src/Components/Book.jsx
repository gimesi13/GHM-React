import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import thumbnaileng from "./Pictures/booking-thumbnail-eng.PNG";
import thumbnailger from "./Pictures/booking-thumbnail-ger.PNG";
import thumbnailhun from "./Pictures/booking-thumbnail-hun.PNG";

function Book({ t, activelanguage }) {
  /* STATES */
  const [activethumbnail, setActiveThumbnail] = useState(thumbnaileng);
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

  /* FUNCTIONS */
  useEffect(() => {
    if (activelanguage === "en") {
      setActiveThumbnail(thumbnaileng);
    } else if (activelanguage === "ge") {
      setActiveThumbnail(thumbnailger);
    } else if (activelanguage === "hu") {
      setActiveThumbnail(thumbnailhun);
    }
  }, [activelanguage]);

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
          <img src={activethumbnail} alt="" />
        </a>

        <motion.p variants={animateText}>
          {t("book_now_text_2")} <br></br>
          <a
            className="airbnb-link"
            href="https://www.airbnb.com/rooms/41781311"
            target="_blank"
            rel="noreferrer"
          >
            https://www.airbnb.com/rooms/41781311
          </a>
          <br></br>
          <a
            className="booking-link"
            href="https://www.booking.com/"
            target="_blank"
            rel="noreferrer"
          >
            www.booking.com
          </a>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default Book;
