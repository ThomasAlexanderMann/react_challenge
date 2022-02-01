import styled from "styled-components/macro";
import { useState } from "react";
import { Button } from "../components/button.elements";

// dislay modal div based on state
const ModalDiv = styled.div`
  display: ${(props) => props.modalOpen && "flex !important;"};
`;

// modal component before styling
const UnstyledModal = ({ id, className, children, buttonText }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {buttonText}
      </Button>

      <ModalDiv id={id} className={className} modalOpen={modalOpen} >
        {children}
        <Button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Close
        </Button>
      </ModalDiv>
    </>
  );
};

export const Modal = styled(UnstyledModal)`
  z-index: 1;
  display: none;
  flex-direction: column;
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  top: 15vh;

  width: 90%;
  max-width: 500px;
  height: 70vh;
  margin: auto;
  background-color: antiquewhite;
  border: 6px solid #fff;
  border-radius: 10px; ;
`;

export const ModalBackground = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.5);
`;
