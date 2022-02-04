// React
import React from "react";

// CSS
import "./project.css";

// Components
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Main } from "./Main";
import { Footer } from "./Footer";

export default function Project() {
  const [things, setThings] = React.useState(["thing1", "thing2"]);

  console.log(things);

  const thingselements = things.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  const addThing = () => {
    setThings((prevState) => { return ['Some','other elements'] });
  };

  const addThingButton = <button onClick={addThing}>add thing</button>;

  return (
    <>
      {addThingButton}
      {thingselements}
    </>
  );
}
