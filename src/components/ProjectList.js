import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectsMap = projects.map(project => {
    return <span key={project}>{project}</span>
  })

  return (
    <div id="projects">

      <h2>My Projects</h2>
      
      <div id="project-list">
        <span>{projectsMap}</span>
      </div>
    </div>
  );
}

export default ProjectList;
