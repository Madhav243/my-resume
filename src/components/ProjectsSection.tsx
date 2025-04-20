// src/components/ProjectsSection.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import { Project } from '../types/resumeTypes';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionTitle title="Projects" />
      {projects.map((project, index) => (
        <ProjectItem key={`project-${index}`} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;