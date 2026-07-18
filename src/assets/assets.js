import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

import profileImg from '../assets/Profile.png';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML5 & CSS3', 'JavaScript', 'React.js', 'Tailwind CSS',]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'JWT Authentication', 'REST API Design']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Mongoose']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code', 'MS Excel', 'MS Word', 'Postman','EmailJS']
  }
];



export const projects = [
   {
    title: "CareerPilot AI",
    description: "AI-powered MERN application that analyzes job descriptions, resume and self description to generate personalized interview strategies using Google Gemini AI.",
    image: projectImg5,
    tech: ["React.js", "SCSS", "JavaScript","Gemini API", "Node.js", "Express.js", "MongoDB"],
    demo: "https://career-pilot-ai-eta-taupe.vercel.app/login",
    code: "https://github.com/DeveloperSharad2004/CareerPilot-AI",
  },
  {
    title: "Ai Virtual Assistant",
    description: "An AI-powered assistant that understands user input, performs actions, and offers efficient, automated assistance.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Gemini API", "Tailwind CSS"],
    demo: "https://ai-voice-assistant-frontend-y1n9.onrender.com/signup",
    code: "https://github.com/DeveloperSharad2004/Ai-Voice-Assistant",
  },
  {
    title: "E-Commerce Website",
    description: "A MERN-based e-commerce platform with secure user accounts, product browsing, cart features, and Stripe-powered payments.",
    image: projectImg2,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "Tailwind CSS"],
    demo: "https://mern-e-commerce-website-frontend-mu.vercel.app/",
    code: "https://github.com/DeveloperSharad2004/MERN-E-Commerce-Website",
  },
  {
    title: "GTA-Themed Website",
    description: "A GTA-themed interactive website built with React and GSAP, featuring smooth animations and an immersive UI experience.",
    image: projectImg3,
    tech: ["React.js", "Tailwind CSS", "GSAP"],
    demo: "https://inquisitive-kelpie-73c79f.netlify.app/",
    code: "https://github.com/DeveloperSharad2004/GTA-Website",
  },
  {
    title: "Quiz App",
    description: "A React-based quiz application styled with Tailwind CSS, offering real-time scoring, interactive questions, and smooth UI flow.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://dreamy-parfait-f3ea72.netlify.app/",
    code: "https://github.com/DeveloperSharad2004/Quiz-App",
  },
  {
    title: "Netflix Clone",
    description: "A Netflix-inspired website built with HTML and CSS, featuring a modern layout, movie sections, and a fully responsive UI design.",
    image: projectImg6,
    tech: ["HTML", "CSS"],
    demo: "https://inquisitive-fenglisu-bb6fdd.netlify.app/",
    code: "https://github.com/DeveloperSharad2004/Netflix-Clone",
  }
];



