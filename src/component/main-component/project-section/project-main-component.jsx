import React from "react";
import Project from "./project-showmore";

const ProjectFolder = ({ projects }) => {
  return (
    <div id="project" className="project">
      <h3>Projects</h3>
      <div className="project-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            tool={project.tool}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectFolder;
