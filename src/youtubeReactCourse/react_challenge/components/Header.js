import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <h1>Adopt a Dog</h1>
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
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
