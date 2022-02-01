import styled from "styled-components/macro";
import { useState } from 'react';


// add state to this component
 const UnstyledModal = ({ id, className, children }) => {

  const [modalVisible, toggleModal] = useState(0);

  return (
    <div id={id} className={className + " hide"}>
      {children}
      <p>The modal is currently {modalVisible}</p>
    </div>
  );
};

export const ModalBackground = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.5);
`;

export const Modal = styled(UnstyledModal)`
  z-index: 1;
  display: flex;
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
  border-radius: 10px;
`;

// this is a test comment
