import styled from "styled-components";

export const Button = styled.button`
  background: palevioletred;
  color: white;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0.5rem auto;
  padding: 0.5rem 1.5rem;

  &:hover {
    background: #fff;
    color: palevioletred;
  }

  ${(props) =>
    props.primary &&
    `
      background: green;
      color: white;
    `};
`;
