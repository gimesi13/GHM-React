import React from "react";
import Slider from "./Slider";
import dog from "./Pictures/undraw-dog.svg";
import rv1 from "./Pictures/review1.png";
import rv2 from "./Pictures/review2.png";
import rv3 from "./Pictures/review3.png";
import rv4 from "./Pictures/sonja-review.PNG";
import rv5 from "./Pictures/paul-review.PNG";
/* import {
  TbBrandAirbnb,
  TbBrandBooking,
  TbBrandFacebook,
  TbBrandInstagram,
} from "react-icons/tb";

//images array
const images = [
  { img: <img alt="" src={rv1} />, name: "1" },
  { img: <img alt="" src={rv2} />, name: "2" },
  { img: <img alt="" src={rv3} />, name: "3" },
  { img: <img alt="" src={rv4} />, name: "4" },
];

//breakpoints for the carousel slider
const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 800,
    itemsToShow: 2,
  },
  {
    width: 992,
    itemsToShow: 4,
  },
  {
    width: 1200,
    itemsToShow: 5,
  },
]; */

function About() {
  return (
    <section className="about">
      <div className="rounded-container abt">
        <span className="hash" id="about"></span>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          sequi maxime voluptates. Possimus reiciendis eveniet accusamus,
          quibusdam nam dolorem labore laboriosam sapiente odit, explicabo velit
          facere suscipit architecto eius voluptatibus ipsum? Qui ea expedita
          quas molestias perferendis fugit obcaecati cupiditate quaerat eos
          dolorum dolorem delectus m
        </p>
        <div className="slider-abt">
          <Slider
            classNames="slider"
            images={[rv1, rv2, rv3, rv4, rv5]}
          ></Slider>
        </div>
      </div>
      <div className="image">
        <img alt="dog" src={dog}></img>
      </div>
    </section>
  );
}

export default About;
