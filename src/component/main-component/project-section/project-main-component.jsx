import React from "react";
import Project from "./project-showmore";

const ProjectFolder = ({ projects }) => {
  return (
    <div id="project" className="project-container">
      <h3>Project</h3>
      <div>
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
