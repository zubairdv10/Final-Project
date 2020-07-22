import React from "react";

import "./TextContainer.css";

//Info about app
const TextContainer = () => (
  <div className="textContainer">
    <div>
      <h1>
        Turbo Chat : the fastest way of connecting with friends
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>Created with : React, Express, Node and Socket.IO </h2>
      <h2>
        Give it a go{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
  </div>
);

export default TextContainer;
