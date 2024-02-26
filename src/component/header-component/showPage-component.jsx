import React from "react";
import { ReactComponent as GithubSvg } from "../../assests/githubSVG.svg";
import { ReactComponent as LinkedinSvg } from "../../assests/svgLink.svg";
import { ReactComponent as GmailSvg } from "../../assests/gmail-icon.svg";

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

  const handleGmailClick = () => {
    const recipientEmail = "alabitseleem@gmail.com";
    const subject = "Send Seleem a mail";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="svg-container">
      <div className="svg " onClick={handleGithubClick}>
        <GithubSvg style={svg} />
      </div>
      <div className="svg" onClick={handleLinkedinClick}>
        <LinkedinSvg style={svg} />
      </div>
      <div className="svg" onClick={handleGmailClick}>
        <GmailSvg style={svg} />
      </div>
    </div>
  );
};

export default ShowPage;
