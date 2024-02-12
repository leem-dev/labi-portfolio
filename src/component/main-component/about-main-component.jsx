import { ReactComponent as Arrowright } from "../../assests/arrow-right.svg";

const AboutFolder = () => {
  const svg = {
    width: "30px",
    height: "25px",
  };
  return (
    <div className="about-container">
      <h3 id="about">About Me</h3>
      <div className="about-details">
        <section className="about-top-details">
          <Arrowright style={svg} className="svg" />
          <p>
            Greetings, I'm Seleem Alabi, an enthusiastic software developer
            specializing in Front-End development. With a solid background of 2
            years, I excel in crafting compelling website and mobile pages,
            constantly seeking fresh challenges and pioneering solutions.
            Proficient in JavaScript, ReactJS, Node, CSS, and HTML, I am
            committed to perpetual learning and advancement in the dynamic tech
            landscape.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutFolder;
