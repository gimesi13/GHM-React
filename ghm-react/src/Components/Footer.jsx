import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import {
  TbBrandAirbnb,
  TbBrandBooking,
  TbBrandFacebook,
  TbBrandInstagram,
} from "react-icons/tb";

function Footer() {
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
          <TbBrandFacebook />
          <TbBrandInstagram />
          <TbBrandAirbnb />
          <TbBrandBooking />
        </div>
        <div>created by me</div>
      </div>
    </section>
  );
}

export default Footer;
