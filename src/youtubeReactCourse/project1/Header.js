import React from "react";

// Import Logo
import logo from "../logo.svg";

export function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React Facts</h3>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
