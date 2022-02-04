// import: packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import: styling
import "./index.css";

// import: components
import {App}  from "./youtubeReactCourse/react_challenge/App.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


