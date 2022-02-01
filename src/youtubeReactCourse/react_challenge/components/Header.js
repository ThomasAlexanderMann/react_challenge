import React from "react";
import {Menu} from './menu.elements';
import { StyledLink } from "./styledLink.elements.js";

export function Header() {
  return (
    <header>
      <nav>
        <StyledLink to="/"><h1>Adopt a Dog</h1></StyledLink>
        <Menu></Menu>
      </nav>
    </header>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function Home() {
  return <h2>Home</h2>;
}
