import React from "react";

// component
import { Card } from "./Card";

// array of data
import { vacationRentals } from "./vacationRentalsData";

// map data into component
const rentalElements = vacationRentals.map((rental, index) => {
  return (
    <Card
      key={"rental-" + index} // not used currently
      name={rental.name}
      img={rental.image}
      rating={rental.rating}
      pricePerNight={rental.pricePerNight}
      available={rental.available}
    />
  );
});

console.log((rentalElements[0]));

// console.log(JSON.stringify(<h1>Hi Tom!!!!</h1>));

export function Main() {
  return (
    <main>
      <div className="card-container">{rentalElements}</div>
    </main>
  );
}
