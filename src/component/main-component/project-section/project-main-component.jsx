import React from "react";
import Project from "./project-showmore";

const ProjectFolder = ({ projects }) => {
  return (
    <div id="project" className="project-container">
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
  );
};

export default ProjectFolder;
