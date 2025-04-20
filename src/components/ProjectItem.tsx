// src/components/ProjectItem.tsx
import React from 'react';
import { Project } from '../types/resumeTypes';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, technologies, description, github } = project;
  
  return (
    <div className="project">
      <p className="project-title-line">
        <span className="project-title">{title || 'Project title not specified'}</span> | 
        <span className="project-tech">{technologies || 'Technologies not specified'}</span>
      </p>
      <ul>
        {description && description.length > 0 ? (
          description.map((item, index) => (
            <li key={`description-${index}`}>{item}</li>
          ))
        ) : (
          <li>No project description available</li>
        )}
        {github && (
          <li className="github-link">
            Github: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectItem;