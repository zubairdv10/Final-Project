import React from "react";

import onlineIcon from "../../Icons/onlineIcon.png";

const Users = ({ users }) => (
  <div className="textContainer2">
    {users ? (
      <div>
        <h1>People currently online:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="online">
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

export default Users;
