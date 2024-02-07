// ProjectsPage.js

import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import './MyProjects.css'; // Import the corresponding CSS file


const projects = [
  {
    name: 'Project 1',
    description: 'Description for Project 1',
    image: 'img/project.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description for Project 2',
    image: "img/project.jpg",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
