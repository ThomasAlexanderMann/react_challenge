import React from "react";

// Import: components
import { Page } from "../components/Page";
import { Card } from "../components/Card";
import { Input } from "../components/inputs.elements";
import { Ul } from "../components/ul.elements";

// Import: styled components
import { Button } from "../components/button.elements";
import { Modal } from "../components/modal.elements";

// Import: array of objects
import { dogs } from "../data/dogs.js";

// map data into component -- dog cards
const dogProfiles = dogs.map((dog, index) => {
  return (
    <Card
      key={"dog-" + index} // not used currently - makes error go away
      dog={dog}
    />
  );
});

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
            <Input type="text" placeholder="Your email here..." />
            <Button>Sign up</Button>

            <Modal openModalButtonText={"Whats in our newsletter?"}>
              <h2>Whats in our newsletter?</h2>
              <Ul>
                <li>New arrivals</li>
                <li>Adoption stories</li>
                <li>Tips and activities for dog owners</li>
              </Ul>
            </Modal>
          </Modal>
        </div>
      </Page>
    </>
  );
}
