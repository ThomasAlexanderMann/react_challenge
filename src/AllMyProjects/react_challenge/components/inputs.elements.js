import styled from "styled-components";
// import styles to style input submit the same as a button
import { buttonstyles } from "./button.elements";

const inputAndTextAreaStyles = `
    width: 100%;
    padding: .7rem 0.5rem;
    border-radius: 10px;
    border: none;
    text-align: center;

    &:focus-visible{
        outline: 2px solid palevioletred;;
    }
    `;

export const Input = styled.input`
  ${inputAndTextAreaStyles}
`;

export const TextArea = styled.input`
  ${inputAndTextAreaStyles}
`;

// styled like a button
export const InputSubmit = styled.input`
  ${buttonstyles}
  width: 100%;
  max-width: 10rem;
`;
