import React, { useState, useEffect } from 'react';
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
  GraduationCap,
  Rocket,
  MapPin as MapPinIcon,
  Cpu,
  Smartphone,
  Box,
  Zap
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
import './App.css';

const roles = [
  "Full Stack JS Developer",
  "MERN Stack Expert",
  "React Native Developer",
  "Docker Enthusiast",
  "Freelancer"
];

const navItems = [
  { id: 'hero',           label: 'Home',           icon: User },
  { id: 'about',          label: 'About',          icon: User },
  { id: 'experience',     label: 'Experience',     icon: Briefcase },
  { id: 'technologies',   label: 'Technologies',   icon: Code },
  { id: 'projects',       label: 'Projects',       icon: Code },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'testimonials',   label: 'Testimonials',   icon: MessageSquare },
  { id: 'contact',        label: 'Contact',        icon: Mail }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  /* ── Typing effect state ── */
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  /* ── Typing effect logic ── */
  useEffect(() => {
    const target = roles[roleIndex];
    const speed = isDeleting ? 42 : 72;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = target.slice(0, displayedRole.length + 1);
        setDisplayedRole(next);
        if (next === target) {
          /* pause at full word, then start deleting */
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const next = target.slice(0, displayedRole.length - 1);
        setDisplayedRole(next);
        if (next === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Dark mode ── */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  /* ── Intersection Observer — scroll-reveal ── */
  useEffect(() => {
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale', '.exp-card-left', '.exp-card-right', '.section-title'];
    const allElements = document.querySelectorAll(revealClasses.join(','));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    allElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAllProjects, showAllCertifications, showAllTestimonials]);
  // Re-run when "show more" items appear so newly added cards get observed

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  /* ── Collapse a "show more" section and scroll back to its top ── */
  const handleCollapse = (setter, sectionId) => {
    setter(false);
    // Wait one frame for React to re-render with fewer items, then scroll
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = 80; // navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    });
  };

  const downloadCV = (language = 'english') => {
    if (language === 'french') {
      window.open('/cv/Hamza_Khaled_CV_French.pdf', '_blank');
    } else {
      window.open('/cv/Hamza_Khaled_CV_English.pdf', '_blank');
    }
    setShowCVOptions(false);
  };

  const handleContactFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId  || serviceId  === 'your_service_id_here')  throw new Error('Service ID missing');
      if (!templateId || templateId === 'your_template_id_here') throw new Error('Template ID missing');
      if (!publicKey  || publicKey  === 'your_public_key_here')  throw new Error('Public Key missing');

      await emailjs.send(serviceId, templateId, { ...contactForm }, publicKey);
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
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

  /* ── Data ── */
  const services = [
    { title: "Full Stack JS Developer",  description: "End-to-end web application development using modern JavaScript technologies", logo: fullstackLogo },
    { title: "Frontend Developer",       description: "Creating responsive and interactive user interfaces with React.js and modern frameworks", logo: frontendLogo },
    { title: "Backend Developer",        description: "Building robust server-side applications with Node.js, Express, and databases", logo: backendLogo },
    { title: "React Native Developer",   description: "Cross-platform mobile app development for iOS and Android", logo: reactNativeLogo }
  ];

  const technologies = [
    { name: "HTML5",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                              color: "from-orange-500 to-red-500" },
    { name: "CSS3",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                               color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                   color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",            color: "from-blue-600 to-blue-400" },
    { name: "React",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                            color: "from-cyan-400 to-blue-500" },
    { name: "Redux",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",                            color: "from-purple-500 to-pink-500" },
    { name: "Tailwind",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",         color: "from-cyan-400 to-teal-500" },
    { name: "Node.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                          color: "from-green-500 to-emerald-500" },
    { name: "Express.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",                 color: "from-gray-600 to-gray-400" },
    { name: "MongoDB",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                        color: "from-green-600 to-green-400" },
    { name: "PostgreSQL",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",           color: "from-blue-600 to-blue-400" },
    { name: "Redis",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",                    color: "from-red-600 to-red-400" },
    { name: "AngularJS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",            color: "from-red-600 to-red-400" },
    { name: "Next.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                         color: "from-gray-800 to-gray-600" },
    { name: "NestJS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",                  color: "from-red-600 to-pink-500" },
    { name: "React Native",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",                    color: "from-cyan-400 to-blue-500" },
    { name: "Docker",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                  color: "from-blue-500 to-blue-400" },
    { name: "GitHub Actions",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",    color: "from-gray-700 to-gray-500" },
    { name: "Jest",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",                         color: "from-red-500 to-red-400" },
    { name: "Python",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",                         color: "from-blue-600 to-yellow-500" },
    { name: "Git",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                               color: "from-orange-600 to-red-500" },
    { name: "GitHub",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                         color: "from-gray-800 to-gray-600" },
  ];

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "CodeAlpha (Remote)",
      duration: "June 2025 – Aug 2025",
      logo: codealphaLogo,
      points: [
        "Developed and deployed 4 full stack applications (e-commerce, project management, social network) with React, Node.js, and MongoDB using component-based architecture, delivered in 3-week sprints following Scrum methodology.",
        "Designed RESTful APIs with 15+ endpoints; integrated PayPal payment and JWT authentication; wrote unit and integration tests with Jest.",
        "Automated deployments via CI/CD pipeline using GitHub Actions and Docker; managed code with Git and weekly code reviews; used Jira for task tracking.",
        "Reduced API response time by 60% using Redis caching."
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "CelestialWave Digital (Sousse, Tunisia)",
      duration: "June 2024 – Oct 2024",
      logo: celestialLogo,
      points: [
        "Developed responsive UI components using React Hooks; ensured cross-browser compatibility (Chrome, Firefox, Safari) and accessibility (a11y) with semantic HTML and ARIA attributes.",
        "Collaborated in cross-functional teams to integrate REST APIs and ensure smooth frontend/backend communication.",
        "Implemented lazy loading and performance optimizations; managed code using Git feature branching."
      ]
    },
    {
      title: "Web Development Intern",
      company: "Prodigy InfoTech (Remote)",
      duration: "May 2024 – June 2024",
      logo: prodigyLogo,
      points: [
        "Delivered 4 production-ready projects in 6 weeks, all meeting 100% of requirements — demonstrating adaptability and time management under constraints.",
        "Chrono Elite Pro: TypeScript stopwatch with lap tracking, CSV export and 10+ keyboard shortcuts.",
        "Tic-Tac-Toe AI: Minimax AI opponent with 3 difficulty levels and real-time statistics.",
        "Portfolio: built with React.js, fully responsive, deployed via Netlify with SSR support via Next.js"
      ]
    },
    {
      title: "Full Stack JS Developer Trainee",
      company: "GoMyCode (Sousse, Tunisia)",
      duration: "Sep 2023 – Feb 2024",
      logo: gomycodeLogo,
      points: [
        "Completed 500+ hours of hands-on MERN stack training; developed 5+ web applications with React.js and Node.js during a 6-month intensive bootcamp.",
        "Collaborated in teams of 3 to 5 developers using Git and Agile practices to deliver SPAs with cross-browser compatibility."
      ]
    }
  ];

  const projects = [
    { name: "Hachka User - E-Commerce Website", description: "AngularJS e-commerce website with product browsing, categories, advanced filters, shopping cart, and JWT authentication. Connected to centralized RESTful API backend.", technologies: ["AngularJS", "JavaScript", "HTML5", "CSS3", "REST API", "JWT"], github: "https://github.com/hamzakh86/HachkaWeb", demo: "", image: "/project11.png" },
    { name: "Hachka Admin - Dashboard", description: "AngularJS admin dashboard for complete CRUD operations on products (50+), categories, orders, and user management. Secure JWT authentication and role-based access control.", technologies: ["AngularJS", "JavaScript", "Chart.js", "REST API", "JWT", "Bootstrap"], github: "https://github.com/hamzakh86/hachkadashboard", demo: "", image: "/project10.png" },
    { name: "Hachka Mobile - E-Commerce App", description: "React Native mobile app with 15+ screens including product discovery, shopping cart, checkout, order tracking, and push notifications. Cross-platform iOS/Android solution.", technologies: ["React Native", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"], github: "https://github.com/hamzakh86/HachkaMobileApp", demo: "", image: "/project9.png" },
    { name: "E-Commerce Website (Hachka Shopping)", description: "Complete e-commerce platform with admin dashboard, payment system, and product management. Features secure authentication and advanced search functionality.", technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PayPal API"], github: "https://github.com/hamzakh86/codealpha-s-ecommerce", demo: "https://hachkashopping.netlify.app", image: "/project1.png" },
    { name: "Project Management Website (TeamSpace)", description: "Trello-inspired task management application with real-time collaboration features. Allows creation of customizable workspaces and deadline tracking.", technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets"], github: "https://github.com/hamzakh86/codealpha-teamspace", demo: "https://teamspaces.netlify.app", image: "/project2.png" },
    { name: "Social Media Website (SocialWave)", description: "Complete social network with posts, comments, and likes system. Features user following functionality and content moderation tools.", technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Mongoose"], github: "https://github.com/hamzakh86/codeAlpha-SocialWave", demo: "https://socialwav.netlify.app", image: "/project3.png" },
    { name: "Modern Real Estate Marketplace", description: "Real estate marketplace with CRUD property management, image upload, and advanced search. Secured with JWT and optimized with Redux Toolkit.", technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Cloudinary"], github: "https://github.com/hamzakh86/A-modern-real-estate-", demo: "https://hamzaestate.netlify.app", image: "/project4.png" },
    { name: "Portfolio Website", description: "Modern portfolio with interactive animations using Three.js and Framer Motion. Responsive design optimized for all screen sizes with functional contact form.", technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "EmailJS"], github: "https://github.com/hamzakh86/PRODIGY_WD_04", demo: "https://hamza-khaled.netlify.app", image: "/project5.png" },
    { name: "Responsive Landing Page (AI Revolution)", description: "Professional homepage for an AI platform with interactive data visualizations. Responsive design with theme switching and smooth animations.", technologies: ["React", "Tailwind CSS", "Framer Motion", "Recharts"], github: "https://github.com/hamzakh86/PRODIGY_WD_01", demo: "https://ia-revolution.netlify.app", image: "/project6.png" },
    { name: "Stopwatch Web Application (Chrono Elite Pro)", description: "Professional stopwatch with lap system, advanced statistics, and CSV export. Supports keyboard shortcuts and hundredth-second precision.", technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"], github: "https://github.com/hamzakh86/PRODIGY_WD_02", demo: "https://chrono-elite-pro.netlify.app", image: "/project7.png" },
    { name: "Tic-Tac-Toe Web Application", description: "Interactive Tic-Tac-Toe game with AI at multiple difficulty levels. Features game statistics tracking and responsive UI.", technologies: ["React", "Vite", "Tailwind CSS", "Shadcn/ui"], github: "https://github.com/hamzakh86/PRODIGY_WD_03", demo: "https://game-tic-tac-toeh.netlify.app", image: "/project8.png" },
  ];

  const certifications = [
    { title: "GOMYCODE",      description: "The Full-Stack Javascript Bootcamp Graduate",                      link: "https://diploma.gomycode.app/?id=31705411332830853",                                                                      image: certification1 },
    { title: "freeCodeCamp",  description: "Front End Development Libraries",                                  link: "https://www.freecodecamp.org/certification/hamzakh06082000/front-end-development-libraries",                            image: certification4 },
    { title: "freeCodeCamp",  description: "Back End Development and APIs",                                    link: "https://www.freecodecamp.org/certification/hamzakh06082000/back-end-development-and-apis",                              image: certification5 },
    { title: "Postman",       description: "Postman API Fundamentals Student Expert",                          link: "https://badges.parchment.com/print-certificate/66a41b7a1ea7d93715e019af",                                              image: certification6 },
    { title: "KodeKloud",     description: "DevOps Prerequisite Course",                                       link: "https://learn.kodekloud.com/certificate/4763e3e8-653e-43f7-b9d4-e714a10b11b1",                                         image: devopsprerequisite },
    { title: "KodeKloud",     description: "Docker For Absolute Beginners",                                    link: "https://learn.kodekloud.com/certificate/f8f9a88a-8a2c-403e-b371-775f140c1bfc",                                         image: dockerforabsolutebeginners },
    { title: "KodeKloud",     description: "Linux For Absolute Beginners",                                     link: "https://learn.kodekloud.com/certificate/cba3757a-6510-4bae-93cb-a218f5be7d55",                                         image: linuxforabsolutebeginners },
    { title: "KodeKloud",     description: "Kubernetes For Absolute Beginners",                                link: "https://learn.kodekloud.com/certificate/98212e05-54d8-4e41-9b43-12e5f9fefcb7",                                         image: kubermetesforabsolutebeginnerscertificate },
    { title: "freeCodeCamp",  description: "Machine Learning with Python",                                     link: "https://freecodecamp.org/certification/hamzakh06082000/machine-learning-with-python-v7",                               image: machinelearningwithpython },
    { title: "freeCodeCamp",  description: "Data Analysis with Python",                                        link: "https://freecodecamp.org/certification/hamzakh06082000/data-analysis-with-python-v7",                                  image: dataanalysiswithpythoncertificate },
    { title: "freeCodeCamp",  description: "Scientific Computing with Python",                                 link: "https://freecodecamp.org/certification/hamzakh06082000/scientific-computing-with-python-v7",                           image: scientificcomputingwithpython },
    { title: "freeCodeCamp",  description: "JavaScript Algorithms and Data Structures (Beta)",                 link: "https://www.freecodecamp.org/certification/hamzakh06082000/javascript-algorithms-and-data-structures-v8",               image: certification3 },
    { title: "freeCodeCamp",  description: "Responsive Web Design",                                           link: "https://www.freecodecamp.org/certification/hamzakh06082000/responsive-web-design",                                     image: certification2 },
    { title: "Coursera",      description: "Website with WordPress",                                           link: "https://www.coursera.org/account/accomplishments/records/N2F712XKEWW4",                                               image: wordpress },
    { title: "SCRUMstudy",    description: "Scrum for Ops and DevOps Fundamentals",                            link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1011595",                                            image: certification8 },
    { title: "SCRUMstudy",    description: "Scrum Fundamentals Certified (SFC)",                               link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1036406",                                              image: certification9 },
  ];

  const testimonials = [
    { name: "Sabrine Loussaief", role: "Instructor at GOMYCODE",       content: "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape.", image: "/sabrine-profile.webp" },
    { name: "Mohamed Amine Sefi", role: "UI/UX Designer at CWD",       content: "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave Digital. As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications.", image: "/amine-profile.webp" },
    { name: "Sarra Fersi",       role: "Intern at CWD",                content: "I've had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer. His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart. Whether it's creating robust backend systems building dynamic user interfaces or Hamza consistently delivers high-quality work. His passion for technology and continuous learning is evident in every project he tackles. I highly recommend Hamza to anyone seeking a dedicated and skilled developer.", image: "/sarah-profile.webp" },
    { name: "Hazem Khaled",      role: "Student at FSEG Nabeul",       content: "I am very grateful for the valuable support I received during my internship project. The guidance provided was not only technically precise but also patient and encouraging. This experience helped me overcome challenges with confidence and achieve better results. I highly recommend him to anyone looking for a skilled and reliable web developer.", image: "/hazem-profile.webp" },
  ];

  /* ── Render ── */
  return (
    <div className="min-h-screen bg-background">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HK
            </div>

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
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="ml-4">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
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

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border relative z-40">
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
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════
          HERO SECTION  — fully animated
         ══════════════════════════════════════════ */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-x-hidden">

        {/* Subtle background particles */}
        <span className="hero-particle" style={{ width: 7,  height: 7,  background: 'var(--portfolio-accent-blue)', opacity: 0.18, top: '18%', left:  '4%',  animation: 'particle-float 7s 0.0s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width: 5,  height: 5,  background: 'var(--portfolio-light-blue)', opacity: 0.15, top: '65%', left:  '7%',  animation: 'particle-float 9s 1.2s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width: 6,  height: 6,  background: 'var(--portfolio-accent-blue)', opacity: 0.12, top: '28%', left: '91%', animation: 'particle-float 8s 2.0s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width: 4,  height: 4,  background: 'var(--portfolio-dark-blue)',  opacity: 0.10, top: '78%', left: '88%', animation: 'particle-float 6s 0.6s ease-in-out infinite' }} />

        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT COLUMN ── */}
            <div className="text-center lg:text-left">

              {/* Available badge */}
              <div className="animate-hero-1 inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <span className="available-dot" />
                Available for opportunities
              </div>

              {/* Name */}
              <h1 className="animate-hero-2 text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Hamza Khaled</span>
              </h1>

              {/* Typing-effect role */}
              <div className="animate-hero-3 text-xl sm:text-2xl text-muted-foreground mb-5 h-10 flex items-center justify-center lg:justify-start">
                <span>{displayedRole}</span>
                <span className="typing-cursor" aria-hidden="true" />
              </div>

              {/* Shimmer divider */}
              <div className="animate-hero-3 shimmer-divider" />

              {/* Info lines */}
              <div className="animate-hero-4 space-y-2 mb-5">
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    Currently studying at{' '}
                    <span className="font-semibold text-primary">EPS Sousse</span>{' '}
                    (Polytechnic School of Sousse)
                  </span>
                </p>
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <Rocket className="w-5 h-5 text-primary flex-shrink-0" />
                  Engineering student passionate about building modern web and mobile applications
                </p>
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  From Tunisia
                </p>
              </div>

              {/* Tech-stack badge pills */}
              <div className="animate-hero-5 flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <div className="animate-badge-1 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm">
                  <Cpu size={15} className="text-primary" />
                  MERN Stack
                </div>
                <div className="animate-badge-2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm">
                  <Smartphone size={15} className="text-primary" />
                  React Native
                </div>
                <div className="animate-badge-3 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm">
                  <Box size={15} className="text-primary" />
                  Docker
                </div>
              </div>

              {/* CTA buttons */}
              <div className="animate-hero-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${showCVOptions ? 'rotate-180' : ''}`} />
                  </Button>

                  {showCVOptions && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                      <button
                        onClick={() => downloadCV('english')}
                        className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 text-sm"
                      >
                        <span className="text-base">🇺🇸</span>
                        English CV
                      </button>
                      <button
                        onClick={() => downloadCV('french')}
                        className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 text-sm border-t border-border"
                      >
                        <span className="text-base">🇫🇷</span>
                        French CV
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — animated avatar ── */}
            <div className="animate-hero-avatar flex justify-center lg:justify-end">

              {/*
                Mobile  : no padding, avatar 220px, chips hidden
                Desktop : padding gives room for chips that stick out
              */}
              <div className="relative avatar-wrapper">

                {/* Avatar circle */}
                <div className="relative avatar-circle-size">

                  {/* Rotating rings */}
                  <div className="avatar-ring-outer" />
                  <div className="avatar-ring-inner" />

                  {/* Photo */}
                  <img
                    src={heroImage}
                    alt="Hamza Khaled"
                    className="animate-float w-full h-full object-cover rounded-full border-4 border-accent relative z-10"
                  />

                  {/* Chips — hidden on mobile via CSS, visible only on lg+ */}
                  <div className="hero-chip hero-chip--react animate-chip-1" style={{ top: '6%', right: '-90px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                    React
                  </div>

                  <div className="hero-chip hero-chip--node animate-chip-2" style={{ bottom: '12%', right: '-96px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" />
                    Node.js
                  </div>

                  <div className="hero-chip hero-chip--docker animate-chip-3" style={{ bottom: '12%', left: '-80px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-4 h-4" />
                    Docker
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── end Hero ── */}

      {/* ── About ── */}
      <section id="about" className="py-32 bg-card">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a skilled software developer with experience in TypeScript and JavaScript,
              and expertise in frameworks like React.js, Next.js, Node.js, Nest.js, and Three.js.
              Currently pursuing my engineering degree at{' '}
              <span className="font-semibold text-primary">EPS Sousse (Polytechnic School of Sousse)</span>,
              I combine academic excellence with practical development experience.
              I'm a quick learner and collaborate closely with clients to create efficient,
              scalable, and user-friendly solutions that solve real-world problems.
              Let's work together to bring your ideas to life!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className={`reveal reveal-scale reveal-d${i + 1}`}>
                <Card className="h-full card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <img src={service.logo} alt={service.title} className="w-10 h-10 object-contain" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">My professional journey</p>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative reveal">
                <div className="absolute left-5 top-6 h-full w-0.5 bg-primary/20">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary to-transparent" />
                  )}
                </div>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <Card className="overflow-hidden card-hover">
                    <div className="flex items-center gap-4 p-4 border-b">
                      <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain rounded-md" />
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <Badge variant="secondary" className="mt-1 text-xs">{exp.duration}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 pt-2">
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary via-primary to-transparent" />
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="absolute left-1/2 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/10 timeline-dot">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <Card className={`w-full max-w-2xl card-hover ${index % 2 === 0 ? 'mr-auto exp-card-left' : 'ml-auto exp-card-right'}`}>
                      <div className="flex items-center gap-4 p-6 pb-4">
                        <img src={exp.logo} alt={exp.company} className="h-14 w-14 object-contain rounded-md" />
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <CardContent className="px-6 pb-6 pt-0">
                        <Badge variant="secondary" className="mb-4">{exp.duration}</Badge>
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                              <span className="text-sm text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section id="technologies" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technologies & Tools
            </h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">My technical expertise</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 justify-items-center">
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                className="reveal reveal-scale tech-icon-wrap group relative flex flex-col items-center"
                style={{ transitionDelay: `${(i % 8) * 0.06}s` }}
              >
                <div className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xs font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Following projects showcase my skills and experience through real-world examples of my work.
              Each project is briefly described with links to code repositories and live demos.
              It reflects my ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, i) => (
              <div
                key={project.name}
                className="reveal card-hover"
                style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
              >
                <Card className="h-full overflow-hidden">
                  {project.image && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}>
                        <Github className="w-4 h-4 mr-2" />Code
                      </Button>
                      {project.demo && (
                        <Button size="sm" onClick={() => window.open(project.demo, '_blank')}>
                          <ExternalLink className="w-4 h-4 mr-2" />Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button
                onClick={() => {
                  if (showAllProjects) {
                    handleCollapse(setShowAllProjects, 'projects');
                  } else {
                    setShowAllProjects(true);
                  }
                }}
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

      {/* ── Certifications ── */}
      <section id="certifications" className="py-20 bg-card">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">Professional certifications and achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllCertifications ? certifications : certifications.slice(0, 3)).map((cert, index) => (
              <div
                key={index}
                className="reveal card-hover"
                style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
              >
                <Card className="h-full">
                  {cert.image && (
                    <div className="w-full h-auto overflow-hidden rounded-t-lg bg-white flex items-center justify-center">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
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
                      <Button variant="outline" size="sm" onClick={() => window.open(cert.link, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />View Certificate
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
          {certifications.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button
                onClick={() => {
                  if (showAllCertifications) {
                    handleCollapse(setShowAllCertifications, 'certifications');
                  } else {
                    setShowAllCertifications(true);
                  }
                }}
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

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">What others say about my work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllTestimonials ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
              <div
                key={index}
                className="reveal card-hover"
                style={{ transitionDelay: `${(index % 3) * 0.13}s` }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="star-animated w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-border"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {testimonials.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button
                onClick={() => {
                  if (showAllTestimonials) {
                    handleCollapse(setShowAllTestimonials, 'testimonials');
                  } else {
                    setShowAllTestimonials(true);
                  }
                }}
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

      {/* ── Contact ── */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">Have a project in mind? Don't hesitate to contact me!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
            <div className="reveal-left">
              <Card className="h-full contact-card-glow">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" name="name" value={contactForm.name} onChange={handleContactFormChange} placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" name="email" value={contactForm.email} onChange={handleContactFormChange} placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" name="message" value={contactForm.message} onChange={handleContactFormChange} placeholder="Your message..." rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      <Mail className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {submitStatus === 'success' && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
                    {submitStatus === 'error'   && <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="reveal-right grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center"><Mail className="w-5 h-5 mr-2" />Email me at</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">khaledhamza251785@gmail.com</p>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard('khaledhamza251785@gmail.com')} className="h-8 w-8 p-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  {emailCopied && <div className="text-xs text-green-600 mt-2">Email copied to clipboard!</div>}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center"><MessageSquare className="w-5 h-5 mr-2" />Socials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Github,    url: 'https://github.com/hamzakh86',                              label: 'GitHub' },
                      { icon: Linkedin,  url: 'https://www.linkedin.com/in/hamza-khaled-16a114290/',       label: 'LinkedIn' },
                      { icon: Instagram, url: 'https://www.instagram.com/hamzakhaledofficial86/',          label: 'Instagram' },
                      { icon: Facebook,  url: 'https://www.facebook.com/hamzakhaledofficial86/',           label: 'Facebook' },
                      { icon: Phone,     url: 'https://wa.me/21625178855',                                 label: 'WhatsApp' },
                    ].map((social, index) => (
                      <button
                        key={index}
                        onClick={() => window.open(social.url, '_blank')}
                        className="w-10 h-10 bg-accent rounded-md flex items-center justify-center hover:bg-accent/80 hover:scale-110 transition-all duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center"><MapPin className="w-5 h-5 mr-2" />Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <p className="text-muted-foreground">Sousse, Tunisia</p>
                  </div>
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
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-background/80 backdrop-blur-md border-t border-border text-foreground py-12">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">HK</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer passionate about creating modern and performant web applications.
                Currently studying at EPS Sousse.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {['about','experience','technologies','projects'].map((id) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm capitalize">
                    {id}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <p className="text-muted-foreground text-sm">khaledhamza251785@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm text-center sm:text-left">© 2025 Hamza Khaled. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top button ── */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
      )}

    </div>
  );
};

export default App;