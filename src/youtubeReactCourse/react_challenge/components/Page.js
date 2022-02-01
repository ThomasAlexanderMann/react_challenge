import React, {useState} from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Page(props) {
  const [modalOpen, setModalState] = useState(false);

  function toggleModal() {
    setModalState(!modalOpen);
  }

  // to work out 
  // get this function into a button?
  // setup modal to style based on modalOpen prop
  // Maybe leave this for now

  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
}
