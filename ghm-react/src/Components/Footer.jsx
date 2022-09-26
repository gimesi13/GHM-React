import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUpCircleFill } from "react-icons/bs";
import {
  TbBrandAirbnb,
  TbBrandBooking,
  TbBrandFacebook,
  TbBrandInstagram,
} from "react-icons/tb";

function Footer({ t }) {
  const [scrolltop, setScrollTop] = useState(false);

  // arrow on scroll behavior
  const handleArrowScroll = () => {
    if (window.scrollY >= 1000) {
      !scrolltop && setScrollTop(true);
    } else {
      scrolltop && setScrollTop(false);
    }
  };

  useEffect(() => {
    if (scrolltop === true) {
      let nav = document.getElementById("uparrow");
      nav.classList.add("visible-svg");
    } else {
      let nav = document.getElementById("uparrow");
      nav.classList.remove("visible-svg");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolltop]);

  window.addEventListener("scroll", handleArrowScroll, { passive: true });

  return (
    <section className="footer">
      <div className="footer-left">
        <div className="arrow-up">
          <div
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BsArrowUpCircleFill id="uparrow" className="up-arrow-svg" />
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-links">
          <a
            href="https://www.facebook.com/guesthousemitt"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandFacebook />
          </a>
          <a
            href="https://www.instagram.com/guesthousemitterbach/"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandInstagram />
          </a>

          <a
            href="https://www.airbnb.com/rooms/41781311"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandAirbnb />
          </a>
          <a href="https://www.booking.com/" target="_blank" rel="noreferrer">
            <TbBrandBooking />
          </a>
        </div>
        <div>{t("created_by")}</div>
      </div>
    </section>
  );
}

export default Footer;
