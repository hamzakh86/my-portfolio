import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Menu,
  X,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Download,
  Code,
  Briefcase,
  Award,
  MessageSquare,
  User,
  ChevronDown,
  Star,
  Moon,
  Sun,
  Copy,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  ArrowUp,
  Globe,
  Smartphone,
  Brain,
  Settings,
  Palette,
  Lightbulb
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import heroImage from './assets/herohamza.png';
import certification1 from './assets/certification1.png';
import certification2 from './assets/certification2.png';
import certification3 from './assets/certification3.png';
import certification4 from './assets/certification4.png';
import certification5 from './assets/certification5.png';
import certification6 from './assets/certification6.png';
import certification8 from './assets/certification8.png';
import certification9 from './assets/certification9.png';
import wordpress from './assets/wordpress.png';

import dataanalysiswithpythoncertificate from './assets/dataanalysiswithpythoncertificate.png';
import devopsprerequisite from './assets/devopsprerequisite.png';
import dockerforabsolutebeginners from './assets/dockerforabsolutebeginners.png';
import kubermetesforabsolutebeginnerscertificate from './assets/kubermetesforabsolutebeginnerscertificate.png';
import linuxforabsolutebeginners from './assets/linuxforabsolutebeginners.png';
import machinelearningwithpython from './assets/machinelearningwithpython.png';
import scientificcomputingwithpython from './assets/scientificcomputingwithpython.png';
import codealphaLogo from './assets/codealpha-logo.png';
import prodigyLogo from './assets/prodigy-logo.png';
import celestialLogo from './assets/celestial-logo.jpeg';
import gomycodeLogo from './assets/gomycode-logo.jpg';
import fullstackLogo from './assets/fullstack-logo.png';
import frontendLogo from './assets/frontend-logo.png';
import backendLogo from './assets/backend-logo.png';
import reactNativeLogo from './assets/react-native-logo.png';
import htmlLogo from './assets/html.webp';
import cssLogo from './assets/css.webp';
import jsLogo from './assets/javascript.webp';
import reactLogo from './assets/reactjs.webp';
import typescriptLogo from './assets/typescript.webp';
import nodejsLogo from './assets/nodejs.webp';
import mongodbLogo from './assets/mongodb.webp';
import tailwindLogo from './assets/tailwind.webp';
import reduxLogo from './assets/redux.webp';
import threejsLogo from './assets/threejs.webp';
import gitLogo from './assets/git.webp';
import nextLogo from './assets/next.webp';
import nestLogo from './assets/nest.webp';

import './App.css';
import { Database } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const roles = [
    "Full Stack JS Developer",
    "Freelancer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer"
  ];

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'technologies', label: 'Technologies', icon: Code },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const services = [
    {
      title: "Full Stack JS Developer",
      description: "End-to-end web application development using modern JavaScript technologies",
      logo: fullstackLogo
    },
    {
      title: "Frontend Developer",
      description: "Creating responsive and interactive user interfaces with React.js and modern frameworks",
      logo: frontendLogo
    },
    {
      title: "Backend Developer",
      description: "Building robust server-side applications with Node.js, Express, and databases",
      logo: backendLogo
    },
    {
      title: "React Native Developer",
      description: "Cross-platform mobile app development for iOS and Android",
      logo: reactNativeLogo
    }
  ];

const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "from-blue-600 to-blue-400" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "from-purple-500 to-pink-500" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "from-cyan-400 to-teal-500" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-500" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", color: "from-gray-600 to-gray-400" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-600 to-red-500" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "from-gray-800 to-gray-600" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-gray-800 to-gray-600" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", color: "from-red-600 to-pink-500" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-600 to-yellow-500" },

];

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "CodeAlpha (Remote)",
      duration: "June 10, 2025 – July 10, 2025",
      logo: codealphaLogo,
      points: [
        "Completed intensive full-stack development training program focusing on modern web technologies",
        "Developed and deployed full-stack applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and integrated third-party services in project work",
        "Participated in code reviews and agile development methodologies"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Prodigy InfoTech (Remote)",
      duration: "June 15, 2025 – July 15, 2025",
      logo: prodigyLogo,
      points: [
        "Gained hands-on experience with modern web development frameworks and tools",
        "Contributed to building responsive web applications with React and Node.js",
        "Collaborated with team members on version control using Git and GitHub",
        "Learned best practices for UI/UX design and front-end development"
      ]
    },
    {
      title: "Front End Developer",
      company: "Celestial Wave Digital",
      duration: "Jun 2024 - October 2024",
      logo: celestialLogo,
      points: [
        "Developed and integrated user interfaces based on design specifications to create intuitive, responsive layouts",
        "Implemented API integration to ensure smooth data exchange between front-end and back-end systems",
        "Ensured adherence to coding standards and best practices, including web accessibility and performance optimization",
        "Integrated design elements into the codebase to deliver cohesive user experiences",
        "Followed industry standards for version control (Git) to manage code changes and maintain collaboration across the development team"
      ]
    },
    {
      title: "Full Stack JS Developer",
      company: "Gomycode",
      duration: "Sep 2023 - Feb 2024",
      logo: gomycodeLogo,
      points: [
        "Developed and maintained web applications using React.js and related technologies, ensuring efficient and scalable solutions",
        "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality digital products",
        "Implemented responsive design to ensure applications were optimized for various devices and ensured cross-browser compatibility",
        "Actively participated in code reviews, providing and receiving constructive feedback to maintain clean, efficient, and maintainable code"
      ]
    }
  ];

  const projects = [
  {
    name: "E-Commerce Website (Hachka Shopping)",
    description: "Complete e-commerce platform with admin dashboard, payment system, and product management. Features secure authentication and advanced search functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PayPal API"],
    github: "https://github.com/hamzakh86/codealpha-s-ecommerce",
    demo: "https://hachkashopping.netlify.app",
    image: "/project1.png"
  },
  {
    name: "Project Management Website (TeamSpace)",
    description: "Trello-inspired task management application with real-time collaboration features. Allows creation of customizable workspaces and deadline tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets"],
    github: "https://github.com/hamzakh86/codealpha-teamspace",
    demo: "https://teamspaces.netlify.app",
    image: "/project2.png"
  },
  {
    name: "Social Media Website (SocialWave)",
    description: "Complete social network with posts, comments, and likes system. Features user following functionality and content moderation tools.",
    technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Mongoose"],
    github: "https://github.com/hamzakh86/codeAlpha-SocialWave",
    demo: "https://socialwav.netlify.app",
    image: "/project3.png"
  },
  {
    name: "Modern Real Estate Marketplace",
    description: "Real estate marketplace with CRUD property management, image upload, and advanced search. Secured with JWT and optimized with Redux Toolkit.",
    technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Cloudinary"],
    github: "https://github.com/hamzakh86/A-modern-real-estate-",
    demo: "https://hamzaestate.netlify.app",
    image: "/project4.png"
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio with interactive animations using Three.js and Framer Motion. Responsive design optimized for all screen sizes with functional contact form.",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "EmailJS"],
    github: "https://github.com/hamzakh86/PRODIGY_WD_04",
    demo: "https://hamza-khaled.netlify.app",
    image: "/project5.png"
  },
  {
    name: "Responsive Landing Page (AI Revolution)",
    description: "Professional homepage for an AI platform with interactive data visualizations. Responsive design with theme switching and smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
    github: "https://github.com/hamzakh86/PRODIGY_WD_01",
    demo: "https://ia-revolution.netlify.app",
    image: "/project6.png"
  },
  {
    name: "Stopwatch Web Application (Chrono Elite Pro)",
    description: "Professional stopwatch with lap system, advanced statistics, and CSV export. Supports keyboard shortcuts and hundredth-second precision.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/hamzakh86/PRODIGY_WD_02",
    demo: "https://chrono-elite-pro.netlify.app",
    image: "/project7.png"
  },
  {
    name: "Tic-Tac-Toe Web Application",
    description: "Interactive Tic-Tac-Toe game with AI at multiple difficulty levels. Features game statistics tracking and responsive UI.",
    technologies: ["React", "Vite", "Tailwind CSS", "Shadcn/ui"],
    github: "https://github.com/hamzakh86/PRODIGY_WD_03",
    demo: "https://game-tic-tac-toeh.netlify.app",
    image: "/project8.png"
  },
];
  const certifications = [
    {
      title: "GOMYCODE",
      description: "The Full-Stack Javascript Bootcamp Graduate",
      link: "https://diploma.gomycode.app/?id=31705411332830853",
      image: certification1
    },
    {
      title: "freeCodeCamp",
      description: "Front End Development Libraries",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/front-end-development-libraries",
      image: certification4
    },
    {
      title: "freeCodeCamp",
      description: "Back End Development and APIs",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/back-end-development-and-apis",
      image: certification5
    },
    {
      title: "Postman",
      description: "Postman API Fundamentals Student Expert",
      link: "https://badges.parchment.com/print-certificate/66a41b7a1ea7d93715e019af",
      image: certification6
    },
    {
      title: "KodeKloud",
      description: "DevOps Prerequisite Course",
      link: "https://learn.kodekloud.com/certificate/4763e3e8-653e-43f7-b9d4-e714a10b11b1",
      image: devopsprerequisite
    },
    {
      title: "KodeKloud",
      description: "Docker For Absolute Beginners",
      link: "https://learn.kodekloud.com/certificate/f8f9a88a-8a2c-403e-b371-775f140c1bfc",
      image: dockerforabsolutebeginners
    },
    {
      title: "KodeKloud",
      description: "Linux For Absolute Beginners",
      link: "https://learn.kodekloud.com/certificate/cba3757a-6510-4bae-93cb-a218f5be7d55",
      image: linuxforabsolutebeginners
    },
    {
      title: "KodeKloud",
      description: "Kubernetes For Absolute Beginners",
      link: "https://learn.kodekloud.com/certificate/98212e05-54d8-4e41-9b43-12e5f9fefcb7",
      image: kubermetesforabsolutebeginnerscertificate
    },
    {
      title: "freeCodeCamp",
      description: "Machine Learning with Python",
      link: "https://freecodecamp.org/certification/hamzakh06082000/machine-learning-with-python-v7",
      image: machinelearningwithpython
    },
    {
      title: "freeCodeCamp",
      description: "Data Analysis with Python",
      link: "https://freecodecamp.org/certification/hamzakh06082000/data-analysis-with-python-v7",
      image: dataanalysiswithpythoncertificate
    },
    {
      title: "freeCodeCamp",
      description: "Scientific Computing with Python",
      link: "https://freecodecamp.org/certification/hamzakh06082000/scientific-computing-with-python-v7",
      image: scientificcomputingwithpython
    },
    {
      title: "freeCodeCamp",
      description: "JavaScript Algorithms and Data Structures (Beta)",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/javascript-algorithms-and-data-structures-v8",
      image: certification3
    },
    {
      title: "freeCodeCamp",
      description: "Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/responsive-web-design",
      image: certification2
    },
    {
      title: "Coursera",
      description: "Website with WordPress",
      link: "https://www.coursera.org/account/accomplishments/records/N2F712XKEWW4",
      image: wordpress
    },
    {
      title: "SCRUMstudy",
      description: "Scrum for Ops and DevOps Fundamentals",
      link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1011595",
      image: certification8
    },
    {
      title: "SCRUMstudy",
      description: "Scrum Fundamentals Certified (SFC)",
      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1036406",
      image: certification9
    }
  ];

  const testimonials = [
    {
      name: "Sabrine Loussaief",
      role: "Instructor at GOMYCODE",
      content: "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape.",
      image: "/sabrine-profile.webp"
    },
    {
      name: "Mohamed Amine Sefi",
      role: "UI/UX Designer at CWD",
      content: "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave Digital. As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications.",
      image: "/amine-profile.webp"
    },
    {
      name: "Sarra Fersi",
      role: "Intern at CWD",
      content: "I've had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer. His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart. Whether it's creating robust backend systems building dynamic user interfaces or Hamza consistently delivers high-quality work. His passion for technology and continuous learning is evident in every project he tackles. I highly recommend Hamza to anyone seeking a dedicated and skilled developer.",
      image: "/sarah-profile.webp"
    },
    {
      name: "Hazem Khaled",
      role: "Student at FSEG Nabeul",
      content: "I am very grateful for the valuable support I received during my internship project. The guidance provided was not only technically precise but also patient and encouraging. This experience helped me overcome challenges with confidence and achieve better results. I highly recommend him to anyone looking for a skilled and reliable web developer.",
      image: "/hazem-profile.webp"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Gérer la visibilité du bouton de retour en haut - visible dès qu'on commence à scroller
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    // Fermer le menu mobile d'abord
    setIsMenuOpen(false);
    
    // Ajouter un petit délai pour permettre au menu de se fermer avant le scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const downloadCV = (language = 'english') => {
    // Ouvrir le CV dans un nouvel onglet au lieu de le télécharger directement
    if (language === 'french') {
      window.open('/cv/Hamza_Khaled_CV_French.pdf', '_blank');
    } else {
      window.open('/cv/Hamza_Khaled_CV_English.pdf', '_blank');
    }
    setShowCVOptions(false);
  };

  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Configuration EmailJS avec les variables d'environnement
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config:', { serviceId, templateId, publicKey });

      // Vérifier que les variables d'environnement sont configurées
      if (!serviceId || serviceId === 'your_service_id_here') {
        throw new Error('Service ID manquant ou non configuré dans le fichier .env');
      }
      if (!templateId || templateId === 'your_template_id_here') {
        throw new Error('Template ID manquant ou non configuré dans le fichier .env');
      }
      if (!publicKey || publicKey === 'your_public_key_here') {
        throw new Error('Public Key manquante ou non configurée dans le fichier .env');
      }

      // Paramètres du template EmailJS
      const templateParams = {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
      };

      console.log('Sending email with params:', templateParams);

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);

      // Afficher l'erreur spécifique dans la console pour le débogage
      if (error.message) {
        console.error('Error details:', error.message);
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              HK
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border relative z-40"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                    }`}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Hamza Khaled</span>
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                From Tunisia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection('contact')} size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <div className="relative">
                  <Button
                    variant="outline"
                    onClick={() => setShowCVOptions(!showCVOptions)}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <AnimatePresence>
                    {showCVOptions && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <button
                          onClick={() => downloadCV('english')}
                          className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
                        >
                          <span className="text-lg">🇺🇸</span>
                          English CV
                        </button>
                        <button
                          onClick={() => downloadCV('french')}
                          className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 border-t border-border"
                        >
                          <span className="text-lg">🇫🇷</span>
                          French CV
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Hamza Khaled"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-accent animate-float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-card">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a skilled software developer with experience in TypeScript and JavaScript,
              and expertise in frameworks like React.js, Next.js, Node.js, Nest.js, and Three.js.
              I'm a quick learner and collaborate closely with clients to create efficient,
              scalable, and user-friendly solutions that solve real-world problems.
              Let's work together to bring your ideas to life!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <img
                        src={service.logo}
                        alt={service.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey</p>
          </motion.div>

          {/* Mobile Experience Timeline */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 h-full w-0.5 bg-primary/20">
                  {index === experiences.length - 1 ? null : (
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary to-transparent"></div>
                  )}
                </div>

                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>

                  <Card className="overflow-hidden">
                    <div className="flex items-center gap-4 p-4 border-b">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-12 w-12 object-contain rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4 pt-2">
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Experience Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary via-primary to-transparent"></div>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>

                    <Card className={`w-full max-w-2xl ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="flex items-center gap-4 p-6 pb-4">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-14 w-14 object-contain rounded-md"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>

                      <CardContent className="px-6 pb-6 pt-0">
                        <Badge variant="secondary" className="mb-4">
                          {exp.duration}
                        </Badge>

                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                              <span className="text-sm text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="technologies" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

  <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Technologies
      </h2>
      <p className="text-lg text-muted-foreground">Technologies I work with</p>
    </motion.div>

    {/* Technologies Grid */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            z: 50
          }}
          className="group relative flex flex-col items-center"
        >
          <div className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg`}>
            <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <h3 className="text-xs font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">
            {tech.name}
          </h3>
        </motion.div>
      ))}
    </div>

    {/* Floating Animation Elements */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  </div>
</section>



      <section id="projects" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Following projects showcase my skills and experience through real-world examples of my work.
              Each project is briefly described with links to code repositories and live demos.
              It reflects my ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  {project.image && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {projects.length > 3 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                variant="outline"
                size="lg"
              >
                {showAllProjects ? 'Show Less' : 'Show More'}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="certifications" className="py-20 bg-card">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllCertifications ? certifications : certifications.slice(0, 3)).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  {cert.image && (
                    <div className="w-full h-auto overflow-hidden rounded-t-lg bg-white flex items-center justify-center ">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      {cert.title}
                    </CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  {cert.link && (
                    <CardContent>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {certifications.length > 3 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                variant="outline"
                size="lg"
              >
                {showAllCertifications ? 'Show Less' : 'Show More'}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllCertifications ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-lg text-muted-foreground">What others say about my work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllTestimonials ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {testimonials.length > 3 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                variant="outline"
                size="lg"
              >
                {showAllTestimonials ? 'Show Less' : 'Show More'}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllTestimonials ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          )}
        </div>
      </section>

    <section id="contact" className="py-20 bg-card">
  <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-lg text-muted-foreground">
        Have a project in mind? Don't hesitate to contact me!
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
      {/* Formulaire de contact - Largeur réduite */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              I'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Mail className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Informations de contact - Grille pour aligner les sections */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Email Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Email me at
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">khaledhamza251785@gmail.com</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard('khaledhamza251785@gmail.com')}
                className="h-8 w-8 p-0"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            {emailCopied && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-green-600 mt-2"
              >
                Email copied to clipboard!
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Socials Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Socials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Github, url: 'https://github.com/hamzakh86', label: 'GitHub' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/hamza-khaled-16a114290/', label: 'LinkedIn' },
                { icon: Instagram, url: 'https://www.instagram.com/hamzakhaledofficial86/', label: 'Instagram' },
                { icon: Facebook, url: 'https://www.facebook.com/hamzakhaledofficial86/', label: 'Facebook' },
                { icon: Phone, url: 'https://wa.me/21625178855', label: 'WhatsApp' },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(social.url, '_blank')}
                  className="w-10 h-10 bg-accent rounded-md flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location Section */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-muted-foreground">Sousse, Tunisia</p>
            </div>
            
            {/* Map Section */}
            <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102834.57537117855!2d10.566667!3d35.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a7ca7d7b0d7%3A0x8a7ca7d7b0d7b0d7!2sSousse%2C%20Tunisia!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sousse, Tunisia Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

      <footer className="bg-background/80 backdrop-blur-md border-t border-border text-foreground py-12">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                HK
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer passionate about creating modern and performant web applications.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('technologies')}
                  className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm"
                >
                  Technologies
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm"
                >
                  Projects
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground text-sm">khaledhamza251785@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-muted-foreground text-sm">
                  © 2024 Hamza Khaled. All rights reserved.
                </p>
                <div className="mt-1">
                  <a
                    href="#"
                    className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Redirect to PortfolioAdmin');
                    }}
                  >
                    PortfolioAdmin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('hero')}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
