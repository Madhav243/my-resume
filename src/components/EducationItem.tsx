// src/components/EducationItem.tsx
import React from 'react';
import { Education } from '../types/resumeTypes';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const { institution, degree, gpa, period, location } = education;
  
  return (
    <div className="education-entry">
      <div className="education-line clearfix">
        <span className="date-location">
          {period || 'Date not specified'}<br />
          {location || 'Location not specified'}
        </span>
        <div>
          <span className="institution-name">{institution || 'Institution not specified'}</span>
          <span className="degree-info">
            {degree || 'Degree not specified'}, 
            <span style={{ fontWeight: 'bold' }}>CGPA:</span> {gpa || 'Not specified'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;