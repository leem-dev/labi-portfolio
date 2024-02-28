import React from "react";
import { ReactComponent as GithubSvg } from "../../assests/githubSVG.svg";
import { ReactComponent as LinkedinSvg } from "../../assests/svgLink.svg";
import { ReactComponent as GmailSvg } from "../../assests/gmail-icon.svg";

const ShowPage = () => {
  const svg = {
    width: "28px",
    height: "32px",
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
        <p className="github svg-file">View my previous project</p>
      </div>
      <div className="svg" onClick={handleLinkedinClick}>
        <LinkedinSvg style={svg} />
        <p className="linkedin svg-file">Read more about me</p>
      </div>
      <div className="svg" onClick={handleGmailClick}>
        <GmailSvg style={svg} />
        <p className="gmail svg-file">Send me a mail</p>
      </div>
    </div>
  );
};

export default ShowPage;
