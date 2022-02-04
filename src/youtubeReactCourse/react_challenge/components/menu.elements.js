import React, { useState } from "react";
import { StyledLink } from "./styledLink.elements";
import styled from "styled-components";

const Ul = styled.ul`
  display: ${(props) => props.menuOpen && "flex !important"};
`;

function UnstyledMenu({ className }) {
  // Menu state
  const [menuOpen, setMenuState] = useState(false);

  function toggleMenu() {
    // The argument to the setter should be a function for some reason. -- best practice
    // This function gets provided with the old state value
    setMenuState((prevState) => !prevState);
  }

  return (
    <div className={className}>
      <button id="nav-button" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Ul className="nav-items" menuOpen={menuOpen}>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </Ul>
    </div>
  );
}

export const Menu = styled(UnstyledMenu)`
  #nav-button {
    height: fit-content;
    padding: 1rem;
    background-color: antiquewhite;
    border: none;
  }

  #nav-button:hover {
    cursor: pointer;
  }
  #nav-button:focus {
    outline: none;
  }

  #nav-button div {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 8px 0;
  }

  .nav-items {
    position: absolute;
    right: 0;
    top: 100%;
    display: none;
    flex-direction: column;
    list-style: none;
    padding: 1.5rem 2rem;
    background-color: antiquewhite;
    margin: 0;
  }

  .nav-items li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;
