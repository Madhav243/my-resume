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
        "Developed and maintained a Supply Chain Finance platform for the SME / MSME domain, focusing on improving financial operations for businesses.",
        "Developed and optimized 8+ reusable Angular components to streamline operations, including real-time data tables, dashboards, and financial transaction views.",
        "Applied PrimeNG library for enhanced UI/UX, ensuring high accessibility and responsive design.",
        "Implemented role-based access control and conditional UI rendering based on user permissions, improving security and UX for 10+ user roles (SMEs, financiers, partners).",
        "Optimized application performance by leveraging RxJS for asynchronous data streams and managing multiple API calls."
      ]
    },
    {
      company: "Paxcom India (P) Ltd - A Paymentus Company",
      role: "Software Engineer",
      period: "Aug 2021 – Aug 2024",
      location: "Gurugram, Haryana",
      responsibilities: [
        "Developed and maintained a business management platform using Angular (version 8 & 14 ) and Node.js, optimizing order and product management features while utilizing GitLab for version control.",
        "Engineered real-time, user-friendly dashboards and a Point of Sale (POS) system, enhancing load times by 30% and reducing transaction latency by 25%.",
        "Created and integrated RESTful APIs for seamless data exchange between client and server, improving API response times by 15%.",
        "Demonstrated strong problem-solving skills by identifying and resolving complex technical issues, including cross-browser compatibility, responsive design challenges, and asynchronous data handling",
        "Played a key role in optimizing application performance, conducting thorough code reviews, identifying bottlenecks, and implementing performance enhancements in page load times."
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
    languages: "Python, JavaScript, HTML/CSS, TypeScript, SQL",
    devTools: "VS Code, Git/Github",
    technologies: "NodeJs, Angular, React, MongoDB, PostgreSQL"
  },
  keywords: {
    content: "Software Engineer, Full Stack Developer, Web Developer, Frontend Developer, Backend Developer, Angular, React, Node.js, JavaScript, TypeScript, MongoDB, PostgreSQL, REST API, Frontend Development, Backend Development, UI/UX, Web Applications, Single Page Applications, Responsive Design, Software Development, Programming, Computer Science, Bangalore, Karnataka, India, Express.js, Git, HTML, CSS, Python, SQL, Frontend Engineer, Backend Engineer, RxJS, PrimeNG, RESTful services, API Development, Code Optimization, Performance Tuning, Hotel Management System, Tour Booking Platform, Supply Chain Finance, DAV Institute"
  }
};