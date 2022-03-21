import { findByLabelText } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;

  [type="text"],
  [type="email"],
  textarea {
    margin: 1rem;
    width: 100%;
  }

  label {
    padding: 1rem;
  }
`;

export default function Project() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isChecked: true,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;

    console.log(checked);
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <>
      <Form>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.secondName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="comments"
          placeholder="enter comments here..."
          value={formData.comments}
          onChange={handleChange}
        />

        <label htmlFor="t-and-c-agree">Agree to our terms and condition</label>
        <input
          name="isChecked"
          id="t-and-c-agree"
          type="checkbox"
          checked={formData.isChecked}
          onChange={handleChange}
        />
      </Form>
    </>
  );
}
