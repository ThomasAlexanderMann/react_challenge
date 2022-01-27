import styled from "styled-components/macro";

const UnstyledModal = ({ id, className, children }) => {
  return (
    <div id={id} className={className + " hide"}>
      {children}
    </div>
  );
};

export const Modal = styled(UnstyledModal)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  
  width: 100%;
  max-width: 500px;
  height: 70vh;
  margin: auto;
  background-color: white;
  border-radius: 10px;
`;
