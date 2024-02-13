import React from "react";
import DevText from "./typing-component";
import AboutFolder from "./about-main-component";
import ProjectFolder from "./project-section/project-main-component";
import Leem from "../../assests/leem.jpg";

import "./main-styles.css";

const Main = () => {
  const projects = [
    {
      id: 1,
      title: "Little Lemon",
      img: require("../../assests/little-lemon.jpg"),
      description:
        "Little Lemon, We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist. ",
      link: "https://little-lemon-restuarant-gold.vercel.app/",
      tool: "ReactJS, NPM, JEST, CSS",
    },
    {
      id: 2,
      title: "Dashboard",
      img: require("../../assests/dashboard.jpg"),
      description:
        "A single-page dashboard is a concise and focused display of key metrics, data, or information relevant to a specific purpose or goal. It's designed to provide users with a quick overview of important insights without requiring them to navigate through multiple pages or interfaces.",
      link: "https://dashboard-leem-dev.vercel.app/",
      tool: "ReactJS, NPM, CSS",
    },
    {
      id: 3,
      title: "Guess Game",
      img: require("../../assests/Guess-game.jpg"),
      description:
        "lifespan is 3, Guess from 1 - 30, it informs you about the trials left, it renders your input and the comp- chice, the SUBMIT button checks for inputLength, if its lesser than 1, it gives nothing. the CLEAR button clears the inputText and compText NOT the trialCount",
      link: "https://guess-game-reactjs.vercel.app/",
      tool: "ReactJS, NPM, CSS",
    },
  ];

  return (
    <div className="main-container">
      <section className="dev-section">
        <div className="dev-img-folder">
          <img src={Leem} alt="leem" className="dev-img" />
        </div>
        <DevText />
      </section>
      <AboutFolder />
      <ProjectFolder projects={projects} />
    </div>
  );
};

export default Main;
