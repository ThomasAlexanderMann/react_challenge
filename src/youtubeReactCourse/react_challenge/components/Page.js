import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Page(props) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
}
