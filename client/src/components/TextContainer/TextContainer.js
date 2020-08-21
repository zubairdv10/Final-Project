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
      <h3>How to join:</h3>
      <h3>Enter name</h3>
      <h3>Join or create a room with any name you want</h3>
      <h3>Tell friends/family or colleges to join the same room</h3>
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
