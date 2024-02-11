import React from "react";
import { ReactComponent as GithubSvg } from "../../assests/githubSVG.svg";
import { ReactComponent as LinkedinSvg } from "../../assests/svgLink.svg";

const ShowPage = () => {
  const svg = {
    width: "30px",
    height: "34px",
    cursor: "pointer",
  };

  const handleGithubClick = () => {
    window.open("https://github.com/leem-dev", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/seleem-alabi-b20877a6/", "_blank");
  };

  return (
    <div className="svg-container">
      <div className="svg " onClick={handleGithubClick}>
        <GithubSvg style={svg} />
      </div>
      <div className="svg" onClick={handleLinkedinClick}>
        <LinkedinSvg style={svg} />
      </div>
    </div>
  );
};

export default ShowPage;
