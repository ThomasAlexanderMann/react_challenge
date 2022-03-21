import styled from "styled-components/macro";
import { useState } from "react";
import { Button } from "../components/button.elements";

// display modal div based on state passed as props
const ModalDiv = styled.div`
  display: ${(props) => props.modalOpen && "flex !important;"};
`;

// modal component before styling
const UnstyledModal = ({ className, children, openModalButtonText }) => {
  //modal state
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Open modal button */}
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {openModalButtonText}
      </Button>

      <ModalDiv className={className} modalOpen={modalOpen}>
        {children}

        {/* Close modal button */}
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
  justify-content: space-evenly;
  position: fixed;
  top: 10vh;
  left: 0;
  right: 0;

  width: 90%;
  max-width: 500px;
  height: 400px;
  max-height: 400px;
  margin: auto;
  padding: 1.5rem;
  background-color: antiquewhite;
  border: 6px solid #fff;
  border-radius: 10px;
`;
