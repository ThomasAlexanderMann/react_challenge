import React from "react";
import { Menu } from "./menu.elements";
import { StyledLink } from "./styledLink.elements.js";

export function Header() {
  return (
    <header>
      <nav>
        <StyledLink to="/">
          <h1>Adopt a Dog</h1>
        </StyledLink>
        <Menu></Menu>
      </nav>
    </header>
  );
}
