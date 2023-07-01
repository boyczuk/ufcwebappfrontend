import React from "react";
import { Link } from "react-router-dom";
import pfp from "./assets/user-default.avif";
import "./Sidebar.css";

const Sidebar = () => {
  // Check if valid auth token and if valid put name/pfp of respective user

  return (
    <div className="Sidebar">
      <div className="user__profile__picture">
        <img src={pfp} alt="Pfp" />
      </div>

      <div className="website__logo">
        <Link to="/" className="logo__link">
          UFC myGym
        </Link>
      </div>

      <Link to="/">
        <button className="sidebar_button">Home</button>
      </Link>

      <Link to="/myGym">
        <button className="sidebar_button">My Gym</button>
      </Link>

      <Link to="/fighters">
        <button className="sidebar_button">Fighter List</button>
      </Link>

      <div>
        <Link to="/login">
          <button className="sidebar_button">Login/Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
