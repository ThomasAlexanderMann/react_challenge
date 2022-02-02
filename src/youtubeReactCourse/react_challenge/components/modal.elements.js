import styled from "styled-components/macro";
import { useState } from "react";
import { Button } from "../components/button.elements";

// display modal div based on state passed as props
const ModalDiv = styled.div`
  display: ${(props) => props.modalOpen && "flex !important;"};
`;

// modal component before styling
const UnstyledModal = ({ className, children, openModalButtonText }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {openModalButtonText}
      </Button>

      <ModalDiv className={className} modalOpen={modalOpen}>
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
  padding: 1rem;
  background-color: antiquewhite;
  border: 6px solid #fff;
  border-radius: 10px;
`;


