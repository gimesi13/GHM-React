import React from "react";
import gemeindealpe from "./Pictures/gemeindealpe-small.jpg";
import mariazell from "./Pictures/mariazell-small.jpg";
import annaberg from "./Pictures/annaberg-small.jpg";

const slopes = [
  {
    name: "Gemeindealple (Mitterbach)",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: gemeindealpe,
    link: "link",
  },
  {
    name: "Mariazell",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: mariazell,
    link: "link",
  },
  {
    name: "Annaberg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nem praesentium recusandae. Porro non a nemo. Officia aspernatur vel minima, vero, molestias nesciunt explicabo eligendi, soluta",
    picture: annaberg,
    link: "link",
  },
];

export default function Slopes() {
  return (
    <section className="slopes">
      <span className="hash" id="slopes"></span>
      <div className="slopes-container">
        <h1>SLOPES</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo
          praesentium recusandae. Porro non a nemo. Officia aspernatur vel
          minima, vero, molestias nesciunt explicabo eligendi, soluta
          accusantium praesentium doloribus fugit!
        </p>
        <div className="slope-cards">
          {slopes.map((slope) => {
            return (
              <Slope
                className="slope"
                key={slope.name}
                name={slope.name}
                picture={slope.picture}
                text={slope.text}
                link={slope.link}
              ></Slope>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Slope({ name, picture, text, link }) {
  return (
    <div className="slope">
      <img src={picture} alt="" className="slope-image" />
      <div className="slope-info">
        <div className="slope-name">{name}</div>
        <div className="slope info">{text}</div>
        {link}
      </div>
    </div>
  );
}
