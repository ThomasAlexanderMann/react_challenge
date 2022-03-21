import React, { useState } from "react";
import styled from "styled-components";

// import: components
import { InputSubmit, Input, TextArea } from "../components/inputs.elements";

function UnstyledContactForm({ className }) {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState({ name: [] });

  function updateName(name) {
    setFields((prevState) => {
      return { ...prevState, name: name };
    });
  }

  // How would i write tests for this function?

  const handleSubmit = (event) => {
    event.preventDefault();

    // reset fieldErrors
    setFieldErrors((prevState) => ({ name: [] }));

    // What rules do we actually need to enforce for a first name
    // trim input
    // remove duplicate spaces
    // -- only accept letters and spaces
    // -- at least 1 letter in length - not a space though
    // -- max length 40 chars

    // assign and trim
    let name = fields.name.trim();

    // validate name
    // at least 1 letter
    const regex1 = /[a-zA-Z]/;
    if (!regex1.test(name)) {
      setFieldErrors((prevState) => ({
        name: [...prevState.name, "Please enter a name"],
      }));
    }

    // only accept letters and spaces
    const regex2 = /[^a-zA-Z ]/;
    if (regex2.test(name)) {
      // what unwanted characters were there?

      // add error to fieldErrors
      setFieldErrors((prevState) => ({
        name: [...prevState.name, "Only letters and spaces allowed"],
      }));
    }

    // replace duplicate spaces with a single space
    // const regex = / /;
  }; // end of handleSubmit

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label>
        Name:
        <Input
          type="text"
          value={fields?.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </label>

      <p>{`name: ${fields.name}`}</p>
      <h1>errors below</h1>
      <p>{`nameErrors: ${fieldErrors.name}`}</p>
      {/* <label>
        Email:
        <Input
          type="email"
          value={fields?.email}
          onChange={(e) => setFields(e.target.value)}
        />
      </label> */}

      {/* <label>
        Your message:
        <TextArea
          type=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>
      </label> */}

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
