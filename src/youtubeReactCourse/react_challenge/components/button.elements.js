import styled from "styled-components/macro";

const ButtonUnstyled = ({ id, className, children, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonUnstyled)`
  border-radius: 3px;

  background: palevioletred;
  color: white;

  border: 2px solid palevioletred;

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
