// src/components/EducationSection.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import EducationItem from './EducationItem';
import { Education } from '../types/resumeTypes';

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  if (!educations || educations.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionTitle title="Education" />
      {educations.map((edu, index) => (
        <EducationItem key={`education-${index}`} education={edu} />
      ))}
    </section>
  );
};

export default EducationSection;