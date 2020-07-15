import React from "react";

import onlineIcon from "../../Icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Turbo Chat : a real time chatting application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with : React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Give it a go{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
