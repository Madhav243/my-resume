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
      // responsibilities: [
      //   'Built and launched UBL and SCF LOS portals from scratch using React 18, streamlining onboarding and approval workflows—contributing to a ~35% increase in loan disbursal efficiency across SME verticals.',
      //     'Maintained and modernized a legacy LOS platform (built with class-based React components) by introducing new features and business flows using Hooks and Context API, ensuring uninterrupted usage by 300+ Sales and Credit team users.',
      //     'Developed dynamic React forms using Formik and Yup with custom validation logic driven by business rules, significantly improving form accuracy and reducing Ops-side rework by ~25%.',
      //     'Architected reusable components and implemented code-splitting via React.lazy and Suspense, enhancing time-to-market for new LOS features and reducing initial load time by ~40% across core user journeys.',
      //     'Built seamless integrations between LOS and LMS platforms via REST APIs, eliminating manual handoffs and improving the LMS conversion pipeline by ~30% in Q4 FY24.',
      //     'Implemented role-based access control and conditional rendering for workflows across Ops, Sales, and Credit teams, enabling ~20% faster task completion and better turnaround times on credit evaluations.',  
      //   ]
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
      // responsibilities: [
      //   'Built and scaled a DIY e-commerce platform enabling SMEs (e.g., restaurants, grocery, electronics) to launch fully functional websites with product management, POS, and order tracking in minutes.',
      //   'Led the architecture and development of a web & mobile-compatible POS module, the product’s core USP, using React 18, Context API, and Ant Design, achieving 90%+ adoption across active businesses.',
      //   'Delivered SME-specific features like QR-based menus, combo/addon builders, and real-time order alerts using custom hooks, Framer Motion, and utility-driven components—resulting in a 30% uplift in user engagement.',
      //   'Applied React Hook Form, reusable components, and client-side state management via Zustand, streamlining user onboarding and reducing registration drop-off by ~20% based on session analytics.',
      //   'Used GitLab CI/CD, Agile practices, and peer code reviews to maintain release quality and deployment velocity; mentored junior developers on React architecture and best practices, boosting team productivity by 25%.',  
      
      // ]
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
      technologies: "Angular 14, RxJs, Bootstrap, Git, Github",
      description: [
        "Developed a hotel management system using Angular 14 and Bootstrap, providing a user-friendly interface for hotel staff to manage bookings, check-ins, and check-outs.",
        "Implemented RxJS for efficient data handling and state management, ensuring smooth user interactions and real-time updates.",
        "Designed responsive UI components using Bootstrap, ensuring compatibility across various devices and screen sizes.",
        "Utilized Git and GitHub for version control and collaboration, enabling seamless integration of features and bug fixes."
      ],
      github: null
    },
    {
      title: "Natours - A tour booking platform",
      technologies: "Nodejs, ExpressJs, Angular14, MongoDB, Git, Postman",
      description: [
        "Developed a comprehensive tour booking application using Node.js, Express.js, and MongoDB.",
        "Implemented robust search functionality allowing users to find tours based on various criteria.",
        "Implemented user authentication and authorization to ensure secure access to the application.",
        "Developed features for users to review and rate tours, enhancing user engagement and providing valuable feedback to tour operators."
      ],
      github: "https://www.github.com/Madhav243/Natures"
    },
    // {
    //   title : "Fittr - An Exercise App",
    //   technologies: "React, Material UI, Git, RapidAPI, ExerciseDB, Youtube API",
    //   description: [
    //     "Developed a fitness application using React and Material UI, providing users with a platform to track their workouts and nutrition.",
    //     "Integrated ExerciseDB API for comprehensive exercise data, enabling users to search and filter exercises based on various criteria.",
    //     "Utilized Youtube API to provide video demonstrations of exercises, enhancing user understanding and engagement.",
    //     "Designed a responsive UI using Material UI components, ensuring a seamless experience across devices."
    //   ],
    //   github: "https://github.com/Madhav243/fitness-app"
    // },
    // {
    //   title : "Chatzz - the Saas for students",
    //   technologies: "React, NextJs, Tailwind CSS, Stripe, Prisma ORM, OpenAI API",
    //   description: [
    //     "Developed a SaaS application for students using Next.js and Tailwind CSS, providing a platform that enables users to upload PDF files and engage in interactive conversations with their content .",
    //     "Integrated Stripe for secure payment processing, enabling subscription-based access to premium features.",
    //     "Utilized Prisma ORM for efficient database management and data retrieval.",
    //     "Implemented OpenAI API for intelligent chat functionalities, enhancing user interaction and support.",
    //   ],
    //   github: "https://github.com/Madhav243/fitness-app"
    // },
    // {
    //   title : "InstaBook - A Social Media App",
    //   technologies: "EJS Template, Node.js, Express, and MongoDB",
    //   description: [
    //     "Developed a social media application using EJS Template, Node.js, Express, and MongoDB, providing users with a platform to share and connect.",
    //     "Implemented user authentication and authorization for secure access to the application.",
    //     "Designed a responsive UI using EJS templates, ensuring compatibility across various devices.",
    //     "Utilized MongoDB for efficient data storage and retrieval, enabling fast access to user-generated content.",
    //     "Incorporated features for users to post updates, comment, and like posts, enhancing user engagement."
    //   ],
    //   github: "https://github.com/Madhav243/Instabook"
    // }

  ],
  skills: {
    languages: "Python, JavaScript, HTML/CSS, TypeScript",
    devTools: "VS Code, Git/Github, GitLab , Jira, Postman, Figma",
    technologies: "NodeJs, Angular2+, React, NextJs, PrimeNg, ANT Design, Bootstrap, ExpressJs, MongoDB, PostgreSQL",
  },
  keywords: {
    content: "C# , C++ ,JavaScript frameworks (React, Vue, Angular) ,API development , UX features , technical leadership ,collaboration , curiosity , integrity, results-orientation , self-motivation, problem-solving, empathy for customers, enthusiasm , JavaScript, TypeScript, HTML5, CSS3, Angular, React, Vue, Full Stack Development, Web Application Development, Browser-based UX, Frontend Frameworks, Responsive UI Design, Cross-browser Compatibility, RESTful APIs, API Integration, Backend Development, Custom Connectors, Microsoft Azure, Azure SQL DB, Azure Cosmos DB, Azure Data Factory, Azure Synapse Analytics, Power BI, Azure Service Bus, Azure Event Grid, Software Development Lifecycle (SDLC), Version Control, Git, GitHub, Azure DevOps, Agile, Scrum, Component-based Architecture, Code Quality and Best Practices, Unit Testing, Integration Testing, Debugging and Performance Optimization, CI/CD Pipelines, Cross-functional Collaboration, UX/UI Collaboration, Technical Leadership, Customer-centric Development, Empathy-driven Design, Problem Solving, Innovation Mindset, Curiosity and Experimentation, Team-oriented Mindset, Results-driven Development, Ownership and Accountability"
  }
};