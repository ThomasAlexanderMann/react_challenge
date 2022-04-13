import React, { useEffect, useState } from "react";

// components
import { ProfilePicture } from "../Project.elements";

import { FollowerContainer, FollowersContainer } from "./Followers.elements";

import { isEmpty, notEmpty } from "../utils";

export function Followers({ followers_url }) {
  console.log("Followers rendered");

  const [followers, setFollowers] = useState([]);

  console.log("Followers", followers);

  useEffect(() => {
    console.log("Followers use effect");

    fetch(followers_url)
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
      });
  }, [followers_url]);

  return (
    <>
      <FollowersContainer>
        <h2>Who is following you?</h2>
        {notEmpty(followers) ? (
          followers.map((follower) => {
            return (
              <FollowerContainer>
                <ProfilePicture src={follower.avatar_url} smallPicture />
                <h3>{follower.login}</h3>
              </FollowerContainer>
            );
          })
        ) : (
          <p>"no followers..."</p>
        )}
      </FollowersContainer>
    </>
  );
}
