import React from "react";

import "./InfoBar.css";

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
        <button class="button2 button1" type="button">
          <span>Sign Out</span>
        </button>
      </a>
    </div>
  </div> 
);

export default InfoBar;
