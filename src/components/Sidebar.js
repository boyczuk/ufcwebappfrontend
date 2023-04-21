import React, { useState } from 'react';
import './Sidebar.css';

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
      <div className="Collapsible">
        <button className="Collapsible__Button" onClick={toggleCollapsible1}>
          Fighters
        </button>
        {isOpen1 && (
          <div className="Collapsible__Content">
            <p>Content 1</p>
          </div>
        )}
      </div>
      <div className="Collapsible">
        <button className="Collapsible__Button" onClick={toggleCollapsible2}>
          myGym
        </button>
        {isOpen2 && (
          <div className="Collapsible__Content">
            <p>Content 2</p>
          </div>
        )}
      </div>
      <div className="Collapsible">
        <button className="Collapsible__Button" onClick={toggleCollapsible3}>
          TBD
        </button>
        {isOpen3 && (
          <div className="Collapsible__Content">
            <p>Content 3</p>
          </div>
        )}
      </div>

      <div>
        <button>
          <p>Login/Register</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
