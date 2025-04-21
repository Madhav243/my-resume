// src/components/Keywords.tsx
import React from 'react';
import { Keywords as KeywordsType } from '../types/resumeTypes';

interface KeywordsProps {
  keywords: KeywordsType;
}

const Keywords: React.FC<KeywordsProps> = ({ keywords }) => {
  // This component will not be visible to users but will be in the DOM for SEO
  return (
    <div 
      style={{
        position: "absolute",
  left: "-9999px",
  top: "auto",
  height: "auto",
  width: "auto",
  overflow: "hidden",
      }}
    >
      {keywords.content}
    </div>
  );
};

export default Keywords;