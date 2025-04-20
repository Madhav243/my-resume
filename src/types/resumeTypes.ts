// src/types/resumeTypes.ts

export interface ContactInfo {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  }
  
  export interface Header {
    name: string;
    title: string;
    contact: ContactInfo;
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    responsibilities: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    gpa: string;
    period: string;
    location: string;
  }
  
  export interface Project {
    title: string;
    technologies: string;
    description: string[];
    github: string | null;
  }
  
  export interface Skills {
    languages: string;
    devTools: string;
    technologies: string;
  }
  
  export interface Keywords {
    content: string;
  }
  
  export interface ResumeData {
    header: Header;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skills;
    keywords: Keywords;
  }