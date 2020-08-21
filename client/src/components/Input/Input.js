import React from "react";

import "./Inputs.css";

//Sending messages
const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input1"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>
      Send{" "}
    </button>
  </form>
);

export default Input;
