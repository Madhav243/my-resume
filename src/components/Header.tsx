// src/components/Header.tsx
import React from 'react';
import ContactInfo from './ContactInfo';
import { Header as HeaderType } from '../types/resumeTypes';

interface HeaderProps {
  header: HeaderType;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  const { name, title } = header;
  
  return (
    <header>
      <h1>{name || 'Name Not Available'}</h1>
      <p className="subtitle">{title || 'Title Not Available'}</p>
      <ContactInfo contact={header.contact} />
    </header>
  );
};

export default Header;