import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Import components
import {
  AppContainer,
  Nav,
  ProfilePicture,
  Input,
  Button,
} from "./Project.elements";

import { isEmpty, notEmpty } from "./utils";

import { Followers } from "./Followers";

export default function Project() {
  console.log("Project render");

  function printUserObject(object) {
    //create an array of JSX elements from object
    const arr = [];
    let i = 0; // give it a key to keep it happy
    for (const property in object) {
      arr.push(<p key={i}>{`${property}: ${object[property]}`}</p>);
      i++;
    }
    return arr;
  }

  // State
  const [gitHubResponse, setgitHubResponse] = useState({
    user: {},
    searchCriteria: "",
    searchFailed: false,
  });

  function handleChange(event) {
    // alphanumeric and hyphens only in github usernames
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9\- ]+/, ""); // this goes back into the input -- allows spaces

    setgitHubResponse((prev) => ({
      ...prev,
      searchCriteria: event.target.value.replace(/[ ]+/g, ""), // this is used for the search - remove spaces
    }));
  }

  function submitSearch() {
    fetch(`https://api.github.com/users/${gitHubResponse.searchCriteria}`)
      .then((response) => response.json())
      .then((data) => {
        if (
          data.message === "Not Found" ||
          data.message ===
            "You have sent an invalid request. Please do not send this request again."
        ) {
          setgitHubResponse((prev) => ({
            ...prev,
            user: {},
            searchFailed: true,
          }));
        } else {
          setgitHubResponse((prev) => ({
            ...prev,
            user: data,
            searchFailed: false,
          }));
        }
      });
  }

  return (
    <AppContainer>
      <Nav>
        <Input
          type="text"
          onChange={handleChange}
          placeholder="Enter your GitHub username ..."
          maxLength="39"
        />
        <Button onClick={submitSearch}>Submit</Button>
      </Nav>

      {notEmpty(gitHubResponse.user) && (
        <>
          <h1>{gitHubResponse.user.login}'s github info!</h1>

          <ProfilePicture
            src={gitHubResponse.user.avatar_url}
            alt={`${gitHubResponse.user.login}'s profile picture`}
          />

          <Followers followers_url={gitHubResponse.user.followers_url} />
          {printUserObject(gitHubResponse.user)}
        </>
      )}

      {gitHubResponse.searchFailed && (
        <>
          <h2>User not found.</h2>
        </>
      )}
    </AppContainer>
  );
}
