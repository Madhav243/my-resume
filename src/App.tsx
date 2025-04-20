// src/App.tsx
import React from 'react';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Keywords from './components/Keywords';
import { resumeData } from './config/resumeData';
import './styles/globalStyles.css';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="resume-container">
        <Keywords keywords={resumeData.keywords} />
        <Header header={resumeData.header} />
        <ExperienceSection experiences={resumeData.experience} />
        <EducationSection educations={resumeData.education} />
        <ProjectsSection projects={resumeData.projects} />
        <SkillsSection skills={resumeData.skills} />
      </div>
    </ErrorBoundary>
  );
};

export default App;