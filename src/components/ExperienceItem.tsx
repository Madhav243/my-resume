// src/components/ExperienceItem.tsx
import React from 'react';
import { Experience } from '../types/resumeTypes';

interface ExperienceItemProps {
  job: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job }) => {
  const { company, role, period, location, responsibilities } = job;
  
  return (
    <div className="job">
      <div className="company-title-line clearfix">
        <span className="date-location">
          {period || 'Date not specified'}<br />
          {location || 'Location not specified'}
        </span>
        <div>
          <span className="company-name">{company || 'Company not specified'}</span>
          <span className="job-title">{role || 'Role not specified'}</span>
        </div>
      </div>
      <ul>
        {responsibilities && responsibilities.length > 0 ? (
          responsibilities.map((responsibility, index) => (
            <li key={`responsibility-${index}`}>{responsibility}</li>
          ))
        ) : (
          <li>No responsibilities specified</li>
        )}
      </ul>
    </div>
  );
};

export default ExperienceItem;