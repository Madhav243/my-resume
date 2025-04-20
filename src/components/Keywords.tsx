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
        position: 'absolute',
        color: 'black',
        backgroundColor: 'white',
        zIndex: -1,
        opacity: 0,
        userSelect: 'none',
        pointerEvents: 'none',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {keywords.content}
    </div>
  );
};

export default Keywords;