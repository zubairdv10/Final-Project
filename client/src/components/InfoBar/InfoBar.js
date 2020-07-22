import React from "react";

import "./InfoBar.css";

import closeIcon from "../../Icons/xIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";

//Shows what room you are in
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online" />
      <h3>{room}</h3>
    </div>
    <div className="rightContainer">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoBar;
