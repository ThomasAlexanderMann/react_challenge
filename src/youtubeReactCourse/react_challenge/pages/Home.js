import React from "react";

// Import: components
import { Page } from "../components/Page";
import { Card } from "../components/Card";

// Import: styled components
import { Button } from "../components/button.elements";
import { Modal } from "../components/modal.elements";

// Import: array of data
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


const showNewsletterModal = () => {
  alert('show the modal');
};


export function Home() {
  return (
    <>
      <Page>
        <h1>Adopt a dog today</h1>
        <p>Start your journey of adoption today</p>
        <h2>Browse our dogs</h2>
        <div className="card-container">{dogProfiles}</div>
        <div className="flex-center newsletter">
          <Button id="test" onClick={showNewsletterModal}>Sign up to our newsletter</Button>
        </div>
        <Modal id="newsLetterSignup">
          <h2>Sign up to our newsletter</h2>
          <p>Form goes here</p>
          <Button>Sign up</Button>
        </Modal>
      </Page>
    </>
  );
}
