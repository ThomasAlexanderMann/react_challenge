import React, { useEffect, useState } from "react";

// components
import { ProfilePicture } from "./Project.elements";

import { isEmpty, notEmpty } from "./utils";

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
      <h2>Who is following you?</h2>
      {
        /* 
        followers is an array of objects
        for each follower I want a picture and a name
        
      */
        notEmpty(followers) ? (
          followers.map((element) => {
            return (
              <div>
                <ProfilePicture src={element.avatar_url} />
              </div>
            );
          })
        ) : (
          <p>"no followers..."</p>
        )
      }
    </>
  );
}
