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
        "We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist. ",
      link: "https://little-lemon-restuarant-gold.vercel.app/",
      tool: "ReactJS, NPM, JEST, CSS",
    },
    {
      id: 2,
      title: "Lead Tracker",
      img: require("../../assests/lead-tracker.png"),
      description:
        "A Google Chrome extension crafted to transform how you manage leads. Effortlessly organize and monitor your leads right from your browser, simplifying your workflow and boosting productivity.",
      link: "https://github.com/leem-dev/Functioning-Lead-Tracker-Chrome-",
      tool: "JavaScript, CSS, HTML",
    },
    {
      id: 3,
      title: "Dashboard",
      img: require("../../assests/dashboard.jpg"),
      description:
        "A single-page dashboard presents essential metrics, data, or information pertinent to a particular objective in a clear and concentrated manner. ",
      link: "https://dashboard-leem-dev.vercel.app/",
      tool: "ReactJS, NPM, CSS",
    },
    {
      id: 4,
      title: "Password Generator",
      img: require("../../assests/"),
      description:
        "This project will allow users to generate random passwords with customizable length and options for including uppercase letters, lowercase letters, numbers, and special characters.",
      link: "https://password-generator-lemon-two.vercel.app/",
      tool: "ReactJS, NPM, CSS",
    },
    {
      id: 5,
      title: "Guess Game",
      img: require("../../assests/Guess-game.jpg"),
      description:
        "Lifespan is 3, Guess from 1 - 30, it informs you about the trials left, it renders your input and the comp- chice, the SUBMIT button checks for inputLength",
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
