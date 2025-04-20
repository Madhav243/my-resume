// src/components/SkillsSection.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import { Skills } from '../types/resumeTypes';

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { languages, devTools, technologies } = skills;
  
  return (
    <section className="skills-section">
      <SectionTitle title="Skills" />
      <p>
        <span className="skills-category">Languages:</span> {languages || 'None specified'}
      </p>
      <p>
        <span className="skills-category">Developer Tools:</span> {devTools || 'None specified'}
      </p>
      <p>
        <span className="skills-category">Technologies/Frameworks:</span> {technologies || 'None specified'}
      </p>
    </section>
  );
};

export default SkillsSection;