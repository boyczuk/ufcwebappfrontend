import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleCollapsible1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleCollapsible2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleCollapsible3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="Sidebar">
      <div className="website__logo">
        <Link to="/">
          UFC myGym
        </Link>
      </div>
      <div className="Collapsible">
        <Link to="/">
          <button className="Collapsible__Button">Home</button>
        </Link>
      </div>
      <div className="Collapsible">
        <button className="Collapsible__Button" onClick={toggleCollapsible1}>
          myGym
        </button>
        {isOpen1 && (
          <div className="Collapsible__Content">
            <div className="Collapsible__Content__Links">
              <Link to="/roster"> Roster </Link>
            </div>
          </div>
        )}
      </div>
      <div className="Collapsible">
        <button className="Collapsible__Button" onClick={toggleCollapsible2}>
          Fighters
        </button>
        {isOpen2 && (
          <div className="Collapsible__Content">
            <div className="Collapsible__Content__Links">
              <Link to="/fighters"> Fighter List </Link>
            </div>
          </div>
        )}
      </div>

      <div>
        <Link to="/login">
          <button>
            <p>Login/Register</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
