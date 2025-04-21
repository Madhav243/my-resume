// src/config/resumeData.ts
import { ResumeData } from '../types/resumeTypes';

export const resumeData: ResumeData = {
  header: {
    name: "MADHAV VERMA",
    title: "Software Engineer",
    contact: {
      phone: "+91-9780695105",
      email: "madhav.verma108@gmail.com",
      linkedin: "linkedin.com/in/madhavverma",
      github: "github.com/Madhav243"
    }
  },
  experience: [
    {
      company: "InCred Finance",
      role: "Software Engineer",
      period: "Aug 2024 – Present",
      location: "Bengaluru, Karnataka",
      responsibilities: [
      'Built and launched UBL and SCF LOS portals from scratch using Angular 18, driving faster onboarding and approval workflows—contributing to a ~35% increase in loan disbursal efficiency across SME verticals.',
        'Maintained and upgraded LAP legacy platform (Angular 5) by integrating new features and business flows, ensuring uninterrupted usage by 300+ internal users across Sales and Credit teams.',
        'Developed dynamic Angular Reactive Forms and business rule-driven validations using RxJS and PrimeNG, improving form accuracy and reducing Ops-side rework by ~25%.',
        'Architected reusable components and lazy-loaded modules, improving time-to-market for new LOS features and reducing page load time by ~40% across key journeys.',
        'Implemented seamless LOS-to-LMS (Loan Management System) data push integrations, helping reduce manual handoffs and boosting LMS conversion pipeline by ~30% in Q4 FY24.',
        'Enabled role-based workflows and access control for Ops, Sales, and Credit teams, leading to ~20% faster task completion and improved turnaround times on credit evaluations.',  
      ]
    },
    {
      company: "Paxcom India (P) Ltd - A Paymentus Company",
      role: "Software Engineer",
      period: "Aug 2021 – Aug 2024",
      location: "Gurugram, Haryana",
      responsibilities: [
      'Built and scaled a DIY e-commerce platform enabling SMEs (e.g., restaurants, grocery, electronics) to launch fully functional websites with product management, POS, and order tracking in minutes.',
        'Led the architecture and development of a web & mobile-compatible POS module, the product’s core USP, using Angular 14, RxJS, and Ng Zorro, resulting in a 90%+ adoption rate across businesses.',
        'Developed business-specific features (e.g., QR-scannable menus, combo/addon systems, real-time order notifications) using RxJS, Angular animations, and custom pipes, boosting user engagement by 30%.',
        'Applied RxJS patterns, Angular reactive forms, and stateful components to streamline onboarding workflows, reducing user drop-off during registration by ~20% (based on session analytics).',
        'Used GitLab CI/CD, Agile workflows, and code reviews to streamline development and deployment; mentored juniors on Angular best practices, boosting team velocity by 25%.',  
      ]
    }
  ],
  education: [
    {
      institution: "DAV Institute of Engineering And Technology",
      degree: "Bachelor of Technology in Computer Science",
      gpa: "8.34",
      period: "July 2018 – June 2022",
      location: "Jalandhar, Punjab"
    }
  ],
  projects: [
    {
      title: "Stay Easy - Hotel Management System",
      technologies: "Angular 14, RxJs, Bootstrap",
      description: [
        "Worked as an Angular frontend developer for a Dubai client on the Stay Easy app, a comprehensive hotel management system.",
        "Developed and maintained the user interface, ensuring a seamless and intuitive experience for hotel staff and management.",
        "Implemented various features such as room booking, guest management, and service requests, enhancing operational efficiency.",
        "Collaborated closely with the backend team to integrate APIs and ensure smooth data flow between frontend and backend."
      ],
      github: null
    },
    {
      title: "Natours - A tour booking platform",
      technologies: "Nodejs, ExpressJs, MongoDB, Git, Postman",
      description: [
        "Developed a comprehensive tour booking application using Node.js, Express.js, and MongoDB.",
        "Implemented robust search functionality allowing users to find tours based on various criteria.",
        "Integrated payment services to facilitate secure online transactions for tour bookings.",
        "Implemented user authentication and authorization to ensure secure access to the application.",
        "Developed features for users to review and rate tours, enhancing user engagement and providing valuable feedback to tour operators."
      ],
      github: "https://www.github.com/Madhav243/Natures"
    }
  ],
  skills: {
    languages: "Python, JavaScript, HTML/CSS, TypeScript",
    devTools: "VS Code, Git/Github, GitLab , Jira, Postman, Figma",
    technologies: "NodeJs, Angular2+, React, PrimeNg, ANT Design, Bootstrap, ExpressJs, MongoDB, PostgreSQL, SQL",
  },
  keywords: {
    content: "C# , C++ ,JavaScript frameworks (React, Vue, Angular) ,API development , UX features , technical leadership ,collaboration , curiosity , integrity, results-orientation , self-motivation, problem-solving, empathy for customers, enthusiasm , JavaScript, TypeScript, HTML5, CSS3, Angular, React, Vue, Full Stack Development, Web Application Development, Browser-based UX, Frontend Frameworks, Responsive UI Design, Cross-browser Compatibility, RESTful APIs, API Integration, Backend Development, Custom Connectors, Microsoft Azure, Azure SQL DB, Azure Cosmos DB, Azure Data Factory, Azure Synapse Analytics, Power BI, Azure Service Bus, Azure Event Grid, Software Development Lifecycle (SDLC), Version Control, Git, GitHub, Azure DevOps, Agile, Scrum, Component-based Architecture, Code Quality and Best Practices, Unit Testing, Integration Testing, Debugging and Performance Optimization, CI/CD Pipelines, Cross-functional Collaboration, UX/UI Collaboration, Technical Leadership, Customer-centric Development, Empathy-driven Design, Problem Solving, Innovation Mindset, Curiosity and Experimentation, Team-oriented Mindset, Results-driven Development, Ownership and Accountability"
  }
};