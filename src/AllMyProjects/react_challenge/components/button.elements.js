import styled from "styled-components";

export const buttonstyles = `
background: palevioletred;
color: white;
border: 2px solid palevioletred;
border-radius: 3px;
margin: 0.5rem auto;
padding: .7rem 1rem;
box-shadow: 6px 8px 8px #ccc;

&:hover {
  background: #fff;
  color: palevioletred;
}

&:focus {
  background: palevioletred;
  color: white;
}
`;

export const Button = styled.button`
  ${buttonstyles}
`;