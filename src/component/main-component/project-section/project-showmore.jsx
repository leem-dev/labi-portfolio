import React, { useState } from "react";
import "./project-card-component.css";

const Project = ({ title, img, description, link, tool }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="project-box">
      <img
        src={img}
        alt="project-img"
        className="project-card-img"
        onClick={() => window.open(link, "_blank")}
      />
      <div className="project-card-description">
        <h3>{title}</h3>
        <p>{showMore ? description : description.substring(0, 100)}</p>
        {description.length > 100 && (
          <button onClick={toggleDescription}>
            {showMore ? "Read less" : "Read more"}
          </button>
        )}
        <p>{tool}</p>
      </div>
    </div>
  );
};

export default Project;
