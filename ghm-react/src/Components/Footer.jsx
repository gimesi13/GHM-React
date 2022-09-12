import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

function Footer({ route }) {
  return (
    <section className="footer">
      <div className="footer-left">
        <div className="arrow-up">
          {route === "main" && (
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <BsArrowUpCircleFill className="up-arrow-svg" />
            </div>
          )}
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
