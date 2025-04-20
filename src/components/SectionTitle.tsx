// src/components/SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <hr />
    </>
  );
};

export default SectionTitle;