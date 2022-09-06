import React from "react";
import dog from "./Pictures/undraw-dog.svg";

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
        <div className="image1">asd</div>
      </div>
      <div className="image">
        <img alt="diner" src={dog}></img>
      </div>
    </section>
  );
}

export default About;
