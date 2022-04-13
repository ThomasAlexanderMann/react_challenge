import React from "react";
import Styled from "styled-components";

const colours = {
  red: "#ee6b61",
  cream: "#eff2dd",
  darkGrey: "#516365",
  lighterGrey: "#7f9d9d",
  lightestGrey: "#bdd7d6",
};

const borderRadius = "border-Radius: 5px;";

export const AppContainer = Styled.div`
    margin: 120px 0 0;
    color: ${colours.darkGrey};
`;

export const Nav = Styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colours.red};
    padding: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;

    }
`;



export const ProfilePicture = Styled.img`
    display: block;
    margin: auto;
    width: 100%;
    max-width: 200px;
    ${(props) => props.smallPicture && "max-width: 70px;"}
    border-Radius: 50%;
`;

export const Input = Styled.input`
    max-width: 100%;
    margin: .5rem;
    padding: .7rem;

    color: ${colours.darkGrey};
    border: 1px solid ${colours.darkGrey};
    ${borderRadius}
`;

export const Button = Styled.button`
    margin: .5rem;
    padding: .7rem;

    color: #fff;
    border: 1px solid ${colours.darkGrey};
    ${borderRadius}
    background-color: ${colours.lighterGrey};
    outline: none;  
`;
