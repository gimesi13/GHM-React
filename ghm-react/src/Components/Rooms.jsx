import React from "react";
import Room from "./Room";
import doubleroom from "./Pictures/room-double.jpg";
import room4 from "./Pictures/room-4.jpg";
import room6 from "./Pictures/room-6.jpg";
import room8 from "./Pictures/room-8.jpg";

function Rooms({ t }) {
  const rooms = [
    {
      name: t("double_bedrooms"),
      price: t("double_bedrooms_price"),
      picture: doubleroom,
      capacity: "2",
    },
    {
      name: t("4_bed_dorm_room"),
      price: t("4_bed_dorm_room_price"),
      picture: room4,
      capacity: "4",
    },
    {
      name: t("6_bed_dorm_rooms"),
      price: t("6_bed_dorm_rooms_price"),
      picture: room6,
      capacity: "6",
    },
    {
      name: t("8_bed_dorm_room"),
      price: t("8_bed_dorm_room_price"),
      picture: room8,
      capacity: "8",
    },
  ];
  return (
    <section className="rooms">
      <span className="hash" id="rooms"></span>
      <div className="rooms-container">
        <h1>{t("ROOMS")}</h1>
        <p>{t("rooms_text")}</p>
        <div className="room-cards">
          {rooms.map((room) => {
            return (
              <Room
                t={t}
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
