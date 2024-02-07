// ProjectCard.js

import React from 'react';
import './ProjectCard.css'; // Import the corresponding CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
