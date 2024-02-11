import React from "react";
import ShowPage from "./showPage-component";

import "./header-styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <p className="header-text">
        la<span>bi</span>
      </p>
      <ul className="header-ul">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ShowPage />
    </div>
  );
};

export default Header;
