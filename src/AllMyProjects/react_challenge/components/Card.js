import React from "react";

export function Card(props) {

  let dog = props.dog;

  return (
    <div className="card">
      <img src={dog.image} className="card-image" />
      <h3>{dog.name}</h3>
      <p>Breed: {dog.breed}</p>
      <p>Gender: {dog.gender}</p>
      <p>
        Age: {dog.age.years} years, {dog.age.months} months
      </p>
      <p>viciousness: {dog.viciousness}</p>

      {
        // conditional rendering
        dog.available === false && <div><p className="onhold">On Hold</p></div>
      }
    </div>
  );
}



