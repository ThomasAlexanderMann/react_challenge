// import: packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import: styling
import "./index.css";

// import: components
// import App from "./youtubeReactCourse/project3/Project";
// import { App } from "./youtubeReactCourse/react_challenge/App.js";
// import App from "./youtubeReactCourse/tablescroll/project";
// import App from "./youtubeReactCourse/project4/Project";
// import App from "./AllMyProjects/emojitest/Project";
// import App from "./youtubeReactCourse/lifecycle/Project";
// import App from "./AllMyProjects/useRef/Project";
// import App from "./AllMyProjects/useEffect/Project";
import App from "./AllMyProjects/github_api_project/Project";
import "./AllMyProjects/github_api_project/app.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
