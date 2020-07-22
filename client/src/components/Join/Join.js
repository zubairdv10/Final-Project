import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import TextContainer from "../TextContainer/TextContainer";
import "../TextContainer/TextContainer.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  //Where you log in
  return (
    <div className="joinContainer1">
      <div className="joinContainer2">
        <h1 className="heading">Welcome</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign into a room
          </button>
        </Link>
      </div>
      <TextContainer />
    </div>
  );
};

export default Join;
