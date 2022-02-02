import React, { useState } from "react";
import styled from "styled-components";

// import: components
import { InputSubmit, Input, TextArea } from "../components/inputs.elements";

function UnstyledContactForm({ className }) {
  // name
  const [name, setName] = useState("");

  // email
  const [email, setEmail] = useState("");

  // message
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      alert(`Name: ${name} \r email:  ${email} \r Message: ${message} 
      \r `);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Your message:
        <TextArea
          type=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>
      </label>

      <InputSubmit type="submit" value="send"></InputSubmit>
    </form>
  );
}

export const ContactForm = styled(UnstyledContactForm)`
  // form container styles
  width: 100%;
  max-width: 450px;
  margin: 1rem auto 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: antiquewhite;
  border: 6px solid #fff;
  border-radius: 10px;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;
