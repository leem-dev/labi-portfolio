import { useState } from "react";
import "./main-styles.css";

const AboutFolder = () => {
  const aboutMe = [
    {
      id: 1,
      content:
        "Greetings, I'm Seleem Alabi, an enthusiastic software developer specializing in Front-End development. With a solid background of 2 years, I excel in crafting compelling website and mobile pages, constantly seeking fresh challenges and pioneering solutions. Proficient in JavaScript, ReactJS, Node, CSS, and HTML, I am committed to perpetual learning and advancement in the dynamic tech landscape.",
    },
    {
      id: 2,
      content:
        "I hold a Bachelor's degree in Civil Engineering and have completed the Meta Front-End Developer Specialization from Meta. Beyond coding, I have a keen interest in exploring emerging technologies and am enthusiastic about collaborating with fellow enthusiasts to contribute to meaningful projects. Please take a moment to browse through my portfolio, and don't hesitate to reach out!",
    },
  ];

  const [scrollUp, setScrollUp] = useState(false);

  const handleMouseEnter = () => {
    setScrollUp(true);
  };

  const handleMouseLeave = () => {
    setScrollUp(false);
  };

  return (
    <div
      className="about-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 id="about">About Me</h3>
      <div className="about-details">
        <div className={`paragraph ${scrollUp ? "scroll-up" : ""}`}>
          {aboutMe.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFolder;
