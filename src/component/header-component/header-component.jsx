import React, { Fragment } from "react";
import ShowPage from "./showPage-component";

import "./header-styles.css";
import Logo from "./logo-component";

const Header = () => {
  return (
    <Fragment>
      <div id="header">
        <div className="header-container">
          <Logo />
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
      </div>
    </Fragment>
  );
};

export default Header;
