import React from "react";
import { NavLink } from "react-router-dom";

function Room({ picture, name, price }) {
  return (
    <div className="room">
      <NavLink to="/book">
        <img alt="" src={picture} className="room-image" />
      </NavLink>
      <div className="room-info">
        <div className="room-name">{name}</div>
        <div className="room-price">{price}</div>
      </div>
    </div>
  );
}

export default Room;
