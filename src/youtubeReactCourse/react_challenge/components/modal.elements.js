import styled from "styled-components/macro";

const UnstyledModal = ({ id, className, children }) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export const Modal = styled(UnstyledModal)`
  display: none;
  flex-direction: column;
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;

  width: 100%;
  max-width: 500px;
  margin: auto;
  height: 70vh;
  background-color: white;

  ${(props) =>
    props.show &&
    `display: flex;
    `};
`;
