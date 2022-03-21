import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-image" />
      <h3>{props.name}</h3>
      <p>{props.rating} out of 5</p>
      <p>{props.pricePerNight} per night</p>
      <p>{props.comments}</p>
      {props.available===false && <span>SOLD OUT</span>}
    </div>
  );
}
