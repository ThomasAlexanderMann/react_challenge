import React from "react";

// Import: components
import { Page } from "../components/Page";
import { Card } from "../components/Card";
import { Input } from "../components/inputs.elements";

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
  const modal = document.getElementById("newsLetterSignupModal");
  modal.classList.remove("hide");
};

const hideNewsletterSignupModal = () => {
  const modal = document.getElementById("newsLetterSignupModal");
  modal.classList.add("hide");
};

const testFunc = () => {
  alert("testing...");
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
          <Modal openModalButtonText={"Sign up to our newsletter"}>
            <h2>Sign up to our newsletter</h2>
            <Input type="text" placeholder="Your email here..."/>
            <Button>Sign up</Button>

            <Modal openModalButtonText={"Whats in our newsletter?"}>
              <h2>Whats in our newsletter?</h2>
              <ul>
                <li>New arrivals</li>
                <li>Adoption stories</li>
                <li>Tips and activities for dog owners</li>
              </ul>
            </Modal>
          </Modal>

        </div>
      </Page>
    </>
  );
}
