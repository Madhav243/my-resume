// // src/config/resumeData.ts
// import { ResumeData } from '../types/resumeTypes';

// export const resumeData: ResumeData = {
//   header: {
//     name: "MADHAV VERMA",
//     title: "Software Engineer",
//     contact: {
//       phone: "+91-9780695105",
//       email: "madhav.verma108@gmail.com",
//       linkedin: "linkedin.com/in/madhavverma",
//       github: "github.com/Madhav243"
//     }
//   },
//   experience: [
//     {
//       company: "InCred Finance",
//       role: "Software Engineer",
//       period: "Aug 2024 – Present",
//       location: "Bengaluru, Karnataka",
//       responsibilities: [
//         "Developed and maintained a Supply Chain Finance platform for the SME / MSME domain, focusing on improving financial operations for businesses.",
//         "Developed and optimized 8+ reusable Angular components to streamline operations, including real-time data tables, dashboards, and financial transaction views.",
//         "Applied PrimeNG library for enhanced UI/UX, ensuring high accessibility and responsive design.",
//         "Implemented role-based access control and conditional UI rendering based on user permissions, improving security and UX for 10+ user roles (SMEs, financiers, partners).",
//         "Optimized application performance by leveraging RxJS for asynchronous data streams and managing multiple API calls."
//       ]
//     },
//     {
//       company: "Paxcom India (P) Ltd - A Paymentus Company",
//       role: "Software Engineer",
//       period: "Aug 2021 – Aug 2024",
//       location: "Gurugram, Haryana",
//       responsibilities: [
//         "Developed and maintained a business management platform using Angular (version 8 & 14 ) and Node.js, optimizing order and product management features while utilizing GitLab for version control.",
//         "Engineered real-time, user-friendly dashboards and a Point of Sale (POS) system, enhancing load times by 30% and reducing transaction latency by 25%.",
//         "Created and integrated RESTful APIs for seamless data exchange between client and server, improving API response times by 15%.",
//         "Demonstrated strong problem-solving skills by identifying and resolving complex technical issues, including cross-browser compatibility, responsive design challenges, and asynchronous data handling",
//         "Played a key role in optimizing application performance, conducting thorough code reviews, identifying bottlenecks, and implementing performance enhancements in page load times."
//       ]
//     }
//   ],
//   education: [
//     {
//       institution: "DAV Institute of Engineering And Technology",
//       degree: "Bachelor of Technology in Computer Science",
//       gpa: "8.34",
//       period: "July 2018 – June 2022",
//       location: "Jalandhar, Punjab"
//     }
//   ],
//   projects: [
//     {
//       title: "Stay Easy - Hotel Management System",
//       technologies: "Angular 14, RxJs, Bootstrap",
//       description: [
//         "Worked as an Angular frontend developer for a Dubai client on the Stay Easy app, a comprehensive hotel management system.",
//         "Developed and maintained the user interface, ensuring a seamless and intuitive experience for hotel staff and management.",
//         "Implemented various features such as room booking, guest management, and service requests, enhancing operational efficiency.",
//         "Collaborated closely with the backend team to integrate APIs and ensure smooth data flow between frontend and backend."
//       ],
//       github: null
//     },
//     {
//       title: "Natours - A tour booking platform",
//       technologies: "Nodejs, ExpressJs, MongoDB, Git, Postman",
//       description: [
//         "Developed a comprehensive tour booking application using Node.js, Express.js, and MongoDB.",
//         "Implemented robust search functionality allowing users to find tours based on various criteria.",
//         "Integrated payment services to facilitate secure online transactions for tour bookings.",
//         "Implemented user authentication and authorization to ensure secure access to the application.",
//         "Developed features for users to review and rate tours, enhancing user engagement and providing valuable feedback to tour operators."
//       ],
//       github: "https://www.github.com/Madhav243/Natures"
//     }
//   ],
//   skills: {
//     languages: "Python, JavaScript, HTML/CSS, TypeScript, SQL",
//     devTools: "VS Code, Git/Github",
//     technologies: "NodeJs, Angular, React, MongoDB, PostgreSQL"
//   },
//   keywords: {
//     content: "Software Engineer, Full Stack Developer, Web Developer, Frontend Developer, Backend Developer, Angular, React, Node.js, JavaScript, TypeScript, MongoDB, PostgreSQL, REST API, Frontend Development, Backend Development, UI/UX, Web Applications, Single Page Applications, Responsive Design, Software Development, Programming, Computer Science, Bangalore, Karnataka, India, Express.js, Git, HTML, CSS, Python, SQL, Frontend Engineer, Backend Engineer, RxJS, PrimeNG, RESTful services, API Development, Code Optimization, Performance Tuning, Hotel Management System, Tour Booking Platform, Supply Chain Finance, DAV Institute"
//   }
// };


import { ResumeData } from '../types/resumeTypes';

export const resumeData: ResumeData = {
  header: {
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      phone: "+1-123-456-7890",
      email: "john.doe@example.com",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe"
    }
  },
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      period: "Jan 2020 – Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led the development of a scalable e-commerce platform using React, Node.js, and MongoDB.",
        "Implemented CI/CD pipelines to streamline deployment processes, reducing deployment time by 40%.",
        "Mentored junior developers, conducting code reviews and providing technical guidance.",
        "Optimized application performance, improving page load times by 25% through code refactoring and caching strategies."
      ]
    },
    {
      company: "Innovatech Labs",
      role: "Software Engineer",
      period: "Jun 2017 – Dec 2019",
      location: "Austin, TX",
      responsibilities: [
        "Developed RESTful APIs using Express.js and integrated them with frontend applications.",
        "Collaborated with cross-functional teams to design and implement new features for a SaaS product.",
        "Enhanced application security by implementing OAuth2 authentication and role-based access control.",
        "Wrote unit and integration tests to ensure code quality and reliability."
      ]
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.8",
      period: "Aug 2013 – May 2017",
      location: "Berkeley, CA"
    }
  ],
  projects: [
    {
      title: "Task Manager App",
      technologies: "React, Redux, Node.js, MongoDB",
      description: [
        "Built a task management application to help users organize and prioritize their tasks.",
        "Implemented features such as task creation, editing, and drag-and-drop reordering.",
        "Integrated user authentication and authorization for secure access.",
        "Deployed the application on AWS, ensuring high availability and scalability."
      ],
      github: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Weather Dashboard",
      technologies: "HTML, CSS, JavaScript, OpenWeather API",
      description: [
        "Developed a responsive weather dashboard that displays current weather conditions and forecasts.",
        "Integrated the OpenWeather API to fetch real-time weather data.",
        "Implemented a search functionality to allow users to find weather information for any city.",
        "Designed a clean and user-friendly interface using CSS and Bootstrap."
      ],
      github: "https://github.com/johndoe/weather-dashboard"
    }
  ],
  skills: {
    languages: "JavaScript, TypeScript, Python, HTML/CSS, SQL",
    devTools: "VS Code, Git/GitHub, Docker",
    technologies: "React, Node.js, Express.js, MongoDB, PostgreSQL, AWS"
  },
  keywords: {
    content: "Full Stack Developer, Software Engineer, React, Node.js, JavaScript, TypeScript, MongoDB, PostgreSQL, REST API, Frontend Development, Backend Development, Web Applications, Responsive Design, CI/CD, AWS, SaaS, OAuth2, API Development, Code Optimization, Performance Tuning"
  }
};