import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-left">
        <div className="arrow-up">
          <a href="#home">
            <BsArrowUpCircleFill className="up-arrow-svg" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-links">link here</div>
        <div>created by me</div>
      </div>
    </section>
  );
}

export default Footer;
