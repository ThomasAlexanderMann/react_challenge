import React from "react";

// component
 import { Card } from "./Card";

// // array of data
import { dogs } from "../data/dogs.js";

// map data into component
const dogProfiles = dogs.map((dog, index) => {
  return (
    <Card
      key={"dog-" + index} // not used currently
      name={dog.name}
      image={dog.image}
      breed={dog.breed}
      gender={dog.gender}
      age={dog.age}
      viciousness={dog.viciousness}
      available={dog.available}
    />
  );
});

// console.log((rentalElements[0]));

console.log(JSON.stringify(dogProfiles));

export function Main() {
  return (
    <main>
      <div className="card-container">{dogProfiles}</div>
    </main>
  );
}
