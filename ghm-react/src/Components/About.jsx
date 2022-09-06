import React from "react";
import dog from "./Pictures/undraw-dog.svg";

function About() {
  return (
    <section className="about">
      <div className="rounded-container abt">
        <span className="hash" id="about"></span>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          maiores autem optio nostrum, neque ipsum eveniet nemo voluptate
          similique consequuntur asperiores accusantium libero. Voluptate
          doloribus nulla, perferendis maxime sint officiis?
        </p>
        <div className="image1">asd</div>
      </div>
      <div className="image">
        <img alt="diner" src={dog}></img>
      </div>
    </section>
  );
}

export default About;
