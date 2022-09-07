import React from "react";

function Room({ picture, name, price }) {
  return (
    <div className="room">
      <img alt="" src={picture} className="room-image" />
      <div className="room-info">
        <div className="room-name">{name}</div>
        <div className="room-price">{price}</div>
      </div>
    </div>
  );
}

export default Room;
