import React from "react";
import { NavLink } from "react-router-dom";
import thumbnail from "./Pictures/booking-thumbnail.PNG";

function Book() {
  return (
    <section className="book">
      <nav className="book-nav" role="navigation">
        <NavLink to="/">
          <button className="back-home-btn">Back to Main page</button>
        </NavLink>
      </nav>
      <h1>BOOK NOW</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ea
        possimus, inventore cum soluta quo!
      </p>

      <div className="booking-card">
        <img src={thumbnail} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto?{" "}
          <span>lnik</span> <span>lnik</span>
        </p>
      </div>
    </section>
  );
}

export default Book;
