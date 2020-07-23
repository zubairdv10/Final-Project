import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  //Makes everything lower case
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  //Message sent by current user
  return isSentByCurrentUser ? (
    <div className="messageContainer End">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox background">
        <p className="messageText color">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer Start">
      <div className="messageBox background2">
        <p className="messageText color2">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
