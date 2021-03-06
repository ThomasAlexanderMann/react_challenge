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

// Where should I keep these functions?
const showNewsletterSignupModal = () => {
  const modal = document.getElementById('newsLetterSignupModal'); 
  modal.classList.remove('hide');
};

const hideNewsletterSignupModal = () => {
  const modal = document.getElementById('newsLetterSignupModal');
  modal.classList.add('hide'); 
}

export function Home() {
  return (
    <>
      <Page>
        <h1>Adopt a dog today</h1>
        <h4>more changes</h4>
        <p>Start your journey of adoption today</p>
        <h2>Browse our dogs</h2>
        <div className="card-container">{dogProfiles}</div>
        <div className="flex-center newsletter">
          <Button id="test" onClick={showNewsletterSignupModal}>Sign up to our newsletter</Button>
        </div>
        <Modal id="newsLetterSignupModal">
          <h2>Sign up to our newsletter</h2>
          <p>Form goes here</p>
          <Button>Sign up</Button>
          <Button onClick={hideNewsletterSignupModal}>Close</Button>
        </Modal>
      </Page>
    </>
  );
}
