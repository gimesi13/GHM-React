import React from "react";
import Room from "./Room";
import doubleroom from "./Pictures/room-double.jpg";
import room4 from "./Pictures/room-4.jpg";
import room6 from "./Pictures/room-6.jpg";
import room8 from "./Pictures/room-8.jpg";

const rooms = [
  {
    name: "Double Bedrooms",
    price: "From €25.-*",
    picture: doubleroom,
    capacity: "2",
  },
  {
    name: "4-bed Dormitory Room:",
    price: "From €20.-*",
    picture: room4,
    capacity: "4",
  },
  {
    name: "6-bed Dormitory Rooms:",
    price: "From €20.-*",
    picture: room6,
    capacity: "6",
  },
  {
    name: "8-bed Dormitory Room:",
    price: "From €20.-*",
    picture: room8,
    capacity: "8",
  },
];

function Rooms() {
  return (
    <section className="rooms">
      <span className="hash" id="rooms"></span>
      <div className="rooms-container">
        <h1>ROOMS</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo
          praesentium recusandae. Porro non a nemo. Officia aspernatur vel
          minima, vero, molestias nesciunt explicabo eligendi, soluta
          accusantium praesentium doloribus fugit!
        </p>
        <div className="room-cards">
          {rooms.map((room) => {
            return (
              <Room
                key={room.name}
                name={room.name}
                price={room.price}
                picture={room.picture}
                capacity={room.capacity}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
