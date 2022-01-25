import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-image" />
      <h3>{props.name}</h3>
      <p>Breed: {props.breed}</p>
      <p>Gender: {props.gender}</p>
      <p>Age: {props.age.years} years, {props.age.months} months</p>
      <p>viciousness: {props.viciousness}</p>
      {props.available === false && <span>I have been adopted</span>}
    </div>
  );
}