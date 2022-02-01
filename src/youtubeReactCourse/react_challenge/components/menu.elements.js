import React, { useState } from "react";
import { StyledLink } from "./styledLink.elements";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.menuOpen && "green"};
`;

const Ul = styled.ul`
  display: ${(props) => props.menuOpen && "flex !important"};
`;

function UnstyledMenu({ className }) {
  const [menuOpen, setMenuState] = useState(false);

  function toggleMenu() {
    setMenuState(!menuOpen);
  }

  return (
    <div className={className}>
      <Button id="nav-button" onClick={toggleMenu} menuOpen={menuOpen}>
        <div></div>
        <div></div>
        <div></div>
      </Button>

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
