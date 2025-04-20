// src/components/ExperienceSection.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Experience } from '../types/resumeTypes';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionTitle title="Experience" />
      {experiences.map((job, index) => (
        <ExperienceItem key={`experience-${index}`} job={job} />
      ))}
    </section>
  );
};

export default ExperienceSection;