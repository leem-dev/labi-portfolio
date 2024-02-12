import React from "react";
import DevText from "./typing-component";
import AboutFolder from "./about-main-component";
import ProjectFolder from "./project-section/project-main-component";
import Leem from "../../assests/leem.jpg";

import "./main-styles.css";

const Main = () => {
  return (
    <div className="main-container">
      <section className="dev-section">
        <div className="dev-img-folder">
          <img src={Leem} alt="leem" className="dev-img" />
        </div>
        <DevText />
      </section>
      <AboutFolder />
      <ProjectFolder />
    </div>
  );
};

export default Main;
