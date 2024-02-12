import { ReactComponent as Arrowright } from "../../assests/arrow-right.svg";

const AboutFolder = () => {
  const svg = {
    width: "150px",
    height: "35px",
  };

  const aboutMe = [
    "Greetings, I'm Seleem Alabi, an enthusiastic software developer specializing in Front-End development. With a solid background of 2 years, I excel in crafting compelling website and mobile pages, constantly seeking fresh challenges and pioneering solutions. Proficient in JavaScript, ReactJS, Node, CSS, and HTML, I am committed to perpetual learning and advancement in the dynamic tech landscape.",
    "I hold a Bachelor's degree in Civil Engineering and have completed the Meta Front-End Developer Specialization from Meta. Beyond coding, I have a keen interest in exploring emerging technologies and am enthusiastic about collaborating with fellow enthusiasts to contribute to meaningful projects. Please take a moment to browse through my portfolio, and don't hesitate to reach out!",
  ];
  return (
    <div className="about-container">
      <h3 id="about">About Me</h3>
      <div className="about-details">
        {aboutMe.map((about, index) => (
          <div key={index} className="about-parag">
            <Arrowright style={svg} className="svg" />
            <p>{about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFolder;
