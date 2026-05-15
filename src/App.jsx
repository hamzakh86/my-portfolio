import React, { useState, useEffect, useRef, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { GitHubCalendar } from 'react-github-calendar';
import {
  Menu, X, Github, ExternalLink, Mail, MapPin, Download, Code, Briefcase,
  Award, MessageSquare, User, ChevronDown, Star, Moon, Sun, Copy, Linkedin,
  Facebook, Instagram, Phone, ArrowUp, GraduationCap, Rocket, MapPin as MapPinIcon,
  Cpu, Smartphone, Box, Clock, Star as StarIcon, GitFork, Globe, School,
  BookOpen, Languages,
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';

/* ── i18n ── */
import { useLanguage } from './hooks/useLanguage';

/* ── Case study page ── */
import HachkaCaseStudy from './pages/HachkaCaseStudy';

/* ── Assets ── */
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

/* ── Lighthouse scores (update after running audit) ── */
const LIGHTHOUSE = {
  performance:    95,
  accessibility:  98,
  seo:            100,
  bestPractices:  96,
};

const App = () => {
  const { lang, t, toggleLang } = useLanguage();

  /* ── Nav items (uses t for labels) – memoized to avoid recreating on every render ── */
  const navItems = useMemo(() => [
    { id: 'hero',           label: t.nav.home },
    { id: 'about',          label: t.nav.about },
    { id: 'experience',     label: t.nav.experience },
    { id: 'technologies',   label: t.nav.technologies },
    { id: 'github',         label: t.nav.github },
    { id: 'opensource',     label: t.nav.opensource },
    { id: 'projects',       label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'testimonials',   label: t.nav.testimonials },
    { id: 'contact',        label: t.nav.contact },
  ], [t]);

  const [isMenuOpen, setIsMenuOpen]                     = useState(false);
  const [activeSection, setActiveSection]               = useState('hero');
  const [isDarkMode, setIsDarkMode]                     = useState(false);
  const [emailCopied, setEmailCopied]                   = useState(false);
  const [showCVOptions, setShowCVOptions]               = useState(false);
  const [contactForm, setContactForm]                   = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting]                 = useState(false);
  const [submitStatus, setSubmitStatus]                 = useState('');
  const [showScrollTop, setShowScrollTop]               = useState(false);
  const [showAllProjects, setShowAllProjects]           = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials]   = useState(false);
  const [showCaseStudy, setShowCaseStudy]               = useState(false);

  /* ── Open Source repos state ── */
  const [repos, setRepos]           = useState([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [reposError, setReposError] = useState(false);

  /* ── Stats counter state ── */
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible]   = useState(false);
  const [counters, setCounters]           = useState({ hours: 0, projects: 0, internships: 0, certs: 0 });

  /* ── Typing effect state ── */
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting]       = useState(false);
  const [roleIndex, setRoleIndex]         = useState(0);

  /* ── SEO: update <title> & meta description on lang change ── */
  useEffect(() => {
    document.title = lang === 'fr'
      ? 'Hamza Khaled — Développeur Full Stack JS & React Native | Tunisie'
      : 'Hamza Khaled — Full Stack JS & React Native Developer | Tunisia';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = lang === 'fr'
      ? 'Portfolio de Hamza Khaled, développeur Full Stack JavaScript spécialisé MERN, React Native et Docker. Étudiant ingénieur à EPS Sousse, Tunisie.'
      : 'Portfolio of Hamza Khaled, Full Stack JavaScript developer specializing in MERN, React Native and Docker. Engineering student at EPS Sousse, Tunisia.';

    /* Open Graph */
    const ogTags = {
      'og:title':       document.title,
      'og:description': meta.content,
      'og:type':        'website',
      'og:url':         'https://hamza-khaled.netlify.app',
      'og:image':       'https://hamza-khaled.netlify.app/og-image.png',
      'twitter:card':   'summary_large_image',
      'twitter:title':  document.title,
      'twitter:description': meta.content,
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        const attr = prop.startsWith('twitter') ? 'name' : 'property';
        el.setAttribute(attr, prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });
  }, [lang]);

  /* Fetch GitHub repos with sessionStorage cache */
  useEffect(() => {
    const CACHE_KEY = 'gh_repos_hamzakh86';
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        setRepos(JSON.parse(cached));
        setReposLoading(false);
        return;
      } catch {
        // Invalid JSON in cache – ignore and fetch fresh data
      }
    }
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/users/hamzakh86/repos?sort=updated&per_page=6&type=public'
        );
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        const filtered = data.filter(r => !r.fork);
        setRepos(filtered);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(filtered));
      } catch {
        setReposError(true);
      } finally {
        setReposLoading(false);
      }
    };
    fetchRepos();
  }, []);

  /* ── Typing effect ── */
  useEffect(() => {
    const target = roles[roleIndex];
    const speed = isDeleting ? 42 : 72;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = target.slice(0, displayedRole.length + 1);
        setDisplayedRole(next);
        if (next === target) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        const next = target.slice(0, displayedRole.length - 1);
        setDisplayedRole(next);
        if (next === '') {
          setIsDeleting(false);
          setRoleIndex(p => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map(i => i.id);
      const pos = window.scrollY + 100;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) { setActiveSection(ids[i]); break; }
      }
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, navItems]);

  /* ── Dark mode ── */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  /* ── Scroll-reveal ── */
  useEffect(() => {
    const sel = '.reveal,.reveal-left,.reveal-right,.reveal-scale,.exp-card-left,.exp-card-right,.section-title';
    const els = document.querySelectorAll(sel);

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
      } else {
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, [showAllProjects, showAllCertifications, showAllTestimonials, showCaseStudy, repos, reposError]);

  /* ── Stats counter ── */
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsVisible) {
        setStatsVisible(true);
        const targets = { hours: 500, projects: 11, internships: 4, certs: 16 };
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const ease = 1 - Math.pow(1 - step / 60, 3);
          setCounters({
            hours:       Math.round(targets.hours       * ease),
            projects:    Math.round(targets.projects    * ease),
            internships: Math.round(targets.internships * ease),
            certs:       Math.round(targets.certs       * ease),
          });
          if (step >= 60) clearInterval(timer);
        }, 1800 / 60);
      }
    }, { threshold: 0.35 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [statsVisible]);

  const toggleDarkMode = () => setIsDarkMode(d => !d);

  const scrollToSection = id => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCollapse = (setter, sectionId) => {
    setter(false);
    requestAnimationFrame(() => setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }, 50));
  };

  const downloadCV = (language = 'english') => {
    window.open(language === 'french' ? '/cv/Hamza_Khaled_CV_French.pdf' : '/cv/Hamza_Khaled_CV_English.pdf', '_blank');
    setShowCVOptions(false);
  };

  const handleContactFormChange = e => setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const handleContactSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const sId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const pk  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!sId || sId === 'your_service_id_here')   throw new Error('Service ID missing');
      if (!tId || tId === 'your_template_id_here') throw new Error('Template ID missing');
      if (!pk  || pk  === 'your_public_key_here')  throw new Error('Public Key missing');
      await emailjs.send(sId, tId, { ...contactForm }, pk);
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  /* ─────────────────── DATA ─────────────────── */

  const services = [
    { title: t.about.services.fullstack.title, description: t.about.services.fullstack.desc, logo: fullstackLogo },
    { title: t.about.services.frontend.title,  description: t.about.services.frontend.desc,  logo: frontendLogo  },
    { title: t.about.services.backend.title,   description: t.about.services.backend.desc,   logo: backendLogo   },
    { title: t.about.services.mobile.title,    description: t.about.services.mobile.desc,    logo: reactNativeLogo },
  ];

  const technologies = [
    { name: "HTML5",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                            color: "from-orange-500 to-red-500" },
    { name: "CSS3",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                             color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                 color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",          color: "from-blue-600 to-blue-400" },
    { name: "React",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                          color: "from-cyan-400 to-blue-500" },
    { name: "Redux",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",                          color: "from-purple-500 to-pink-500" },
    { name: "Tailwind",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",       color: "from-cyan-400 to-teal-500" },
    { name: "Node.js",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                        color: "from-green-500 to-emerald-500" },
    { name: "Express.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",               color: "from-gray-600 to-gray-400" },
    { name: "MongoDB",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                      color: "from-green-600 to-green-400" },
    { name: "PostgreSQL",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",         color: "from-blue-600 to-blue-400" },
    { name: "Redis",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",                   color: "from-red-600 to-red-400" },
    { name: "AngularJS",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",           color: "from-red-600 to-red-400" },
    { name: "Next.js",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                       color: "from-gray-800 to-gray-600" },
    { name: "NestJS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",                 color: "from-red-600 to-pink-500" },
    { name: "React Native",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",                   color: "from-cyan-400 to-blue-500" },
    { name: "Docker",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                 color: "from-blue-500 to-blue-400" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",   color: "from-gray-700 to-gray-500" },
    { name: "Jest",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",                        color: "from-red-500 to-red-400" },
    { name: "Python",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",                        color: "from-blue-600 to-yellow-500" },
    { name: "Git",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                              color: "from-orange-600 to-red-500" },
    { name: "GitHub",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                        color: "from-gray-800 to-gray-600" },
  ];

  const experiences = [
    {
      title: "Full Stack Development Intern", company: "CodeAlpha (Remote)", duration: "June 2025 – Aug 2025", logo: codealphaLogo,
      points: [
        "Developed and deployed 4 full stack applications with React, Node.js, and MongoDB in 3-week Scrum sprints.",
        "Designed RESTful APIs with 15+ endpoints; integrated PayPal & JWT; wrote unit/integration tests with Jest.",
        "Automated deployments via CI/CD using GitHub Actions and Docker; used Jira for task tracking.",
        "Reduced API response time by 60% using Redis caching.",
      ],
    },
    {
      title: "Front-End Developer Intern", company: "CelestialWave Digital (Sousse, Tunisia)", duration: "June 2024 – Oct 2024", logo: celestialLogo,
      points: [
        "Developed responsive UI components using React Hooks with cross-browser compatibility and a11y (ARIA).",
        "Collaborated in cross-functional teams to integrate REST APIs.",
        "Implemented lazy loading & performance optimizations; managed code using Git feature branching.",
      ],
    },
    {
      title: "Web Development Intern", company: "Prodigy InfoTech (Remote)", duration: "May 2024 – June 2024", logo: prodigyLogo,
      points: [
        "Delivered 4 production-ready projects in 6 weeks, all meeting 100% of requirements.",
        "Chrono Elite Pro: TypeScript stopwatch with lap tracking, CSV export & 10+ keyboard shortcuts.",
        "Tic-Tac-Toe AI: Minimax AI opponent with 3 difficulty levels and real-time statistics.",
        "Portfolio: built with React.js, deployed via Netlify with SSR support via Next.js.",
      ],
    },
    {
      title: "Full Stack JS Developer Trainee", company: "GoMyCode (Sousse, Tunisia)", duration: "Sep 2023 – Feb 2024", logo: gomycodeLogo,
      points: [
        "Completed 500+ hours of hands-on MERN stack training; developed 5+ web apps in a 6-month bootcamp.",
        "Collaborated in teams of 3–5 using Git and Agile to deliver SPAs with cross-browser compatibility.",
      ],
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      school: 'EPS Sousse — École Polytechnique de Sousse',
      degree: lang === 'fr' ? 'Étudiant Ingénieur' : 'Engineering Student',
      period: '2025 – Present',
      location: 'Sousse, Tunisia',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      school: 'GoMyCode',
      degree: lang === 'fr' ? 'Bootcamp Full Stack JavaScript' : 'Full Stack JavaScript Bootcamp',
      period: 'Sep 2023 – Feb 2024',
      location: 'Sousse, Tunisia',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: School,
      school: 'IPEIGabès — Institut Préparatoire aux Études d\'Ingénierie',
      degree: lang === 'fr' ? 'Classe Préparatoire Maths & Physique' : 'Preparatory Class — Mathematics & Physics',
      period: '2020 – 2023',
      location: 'Gabès, Tunisia',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      school: lang === 'fr' ? 'Lycée Abou L Kassem L Chebbi' : 'Abou L Kassem L Chebbi High School',
      degree: lang === 'fr' ? 'Baccalauréat Mathématiques' : 'Baccalaureate in Mathematics',
      period: '2016 – 2020',
      location: 'Médenine, Tunisia',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const projects = [
    { name: "Hachka User - E-Commerce Website",       description: "AngularJS e-commerce website with product browsing, categories, advanced filters, shopping cart, and JWT authentication.", technologies: ["AngularJS","JavaScript","HTML5","CSS3","REST API","JWT"],              github: "https://github.com/hamzakh86/HachkaWeb",              demo: "",                                   image: "/project11.png", demo_video: "", hachka: true },
    { name: "Hachka Admin - Dashboard",               description: "AngularJS admin dashboard for complete CRUD operations on products (50+), categories, orders, and user management.",        technologies: ["AngularJS","JavaScript","Chart.js","REST API","JWT","Bootstrap"],    github: "https://github.com/hamzakh86/hachkadashboard",        demo: "",                                   image: "/project10.png", demo_video: "", hachka: true },
    { name: "Hachka Mobile - E-Commerce App",         description: "React Native mobile app with 15+ screens including product discovery, shopping cart, checkout, and order tracking.",         technologies: ["React Native","Redux","Node.js","Express.js","MongoDB","JWT"],       github: "https://github.com/hamzakh86/HachkaMobileApp",        demo: "",                                   image: "/project9.png",  demo_video: "", hachka: true },
    { name: "E-Commerce Website (Hachka Shopping)",   description: "Complete e-commerce platform with admin dashboard, payment system, and product management.",                                technologies: ["React","Node.js","Express","MongoDB","Redux","PayPal API"],           github: "https://github.com/hamzakh86/codealpha-s-ecommerce",  demo: "https://hachkashopping.netlify.app", image: "/project1.png",  demo_video: "" },
    { name: "Project Management Website (TeamSpace)", description: "Trello-inspired task management application with real-time collaboration features.",                                        technologies: ["React","Node.js","MongoDB","Express","WebSockets"],                  github: "https://github.com/hamzakh86/codealpha-teamspace",    demo: "https://teamspaces.netlify.app",     image: "/project2.png",  demo_video: "" },
    { name: "Social Media Website (SocialWave)",      description: "Complete social network with posts, comments, and likes system.",                                                           technologies: ["MERN Stack","JWT","Redux Toolkit","Mongoose"],                       github: "https://github.com/hamzakh86/codeAlpha-SocialWave",   demo: "https://socialwav.netlify.app",      image: "/project3.png",  demo_video: "" },
    { name: "Modern Real Estate Marketplace",         description: "Real estate marketplace with CRUD property management, image upload, and advanced search.",                                 technologies: ["MERN Stack","JWT","Redux Toolkit","Cloudinary"],                     github: "https://github.com/hamzakh86/A-modern-real-estate-",  demo: "https://hamzaestate.netlify.app",    image: "/project4.png",  demo_video: "" },
    { name: "Portfolio Website",                      description: "Modern portfolio with interactive animations using Three.js and Framer Motion.",                                            technologies: ["React","Three.js","Framer Motion","Tailwind CSS","EmailJS"],         github: "https://github.com/hamzakh86/PRODIGY_WD_04",          demo: "https://hamza-khaled.netlify.app",   image: "/project5.png",  demo_video: "" },
    { name: "Responsive Landing Page (AI Revolution)",description: "Professional homepage for an AI platform with interactive data visualizations.",                                            technologies: ["React","Tailwind CSS","Framer Motion","Recharts"],                   github: "https://github.com/hamzakh86/PRODIGY_WD_01",          demo: "https://ia-revolution.netlify.app",  image: "/project6.png",  demo_video: "" },
    { name: "Stopwatch Web Application (Chrono Elite Pro)", description: "Professional stopwatch with lap system, advanced statistics, and CSV export.",                                       technologies: ["React","TypeScript","Tailwind CSS","Framer Motion"],                 github: "https://github.com/hamzakh86/PRODIGY_WD_02",          demo: "https://chrono-elite-pro.netlify.app", image: "/project7.png", demo_video: "" },
    { name: "Tic-Tac-Toe Web Application",            description: "Interactive Tic-Tac-Toe game with AI at multiple difficulty levels.",                                                      technologies: ["React","Vite","Tailwind CSS","Shadcn/ui"],                           github: "https://github.com/hamzakh86/PRODIGY_WD_03",          demo: "https://game-tic-tac-toeh.netlify.app", image: "/project8.png", demo_video: "" },
  ];

  const certifications = [
    { title: "GOMYCODE",     description: "The Full-Stack Javascript Bootcamp Graduate",             link: "https://diploma.gomycode.app/?id=31705411332830853",                                                              image: certification1 },
    { title: "freeCodeCamp", description: "Front End Development Libraries",                         link: "https://www.freecodecamp.org/certification/hamzakh06082000/front-end-development-libraries",                    image: certification4 },
    { title: "freeCodeCamp", description: "Back End Development and APIs",                           link: "https://www.freecodecamp.org/certification/hamzakh06082000/back-end-development-and-apis",                      image: certification5 },
    { title: "Postman",      description: "Postman API Fundamentals Student Expert",                 link: "https://badges.parchment.com/print-certificate/66a41b7a1ea7d93715e019af",                                      image: certification6 },
    { title: "KodeKloud",    description: "DevOps Prerequisite Course",                              link: "https://learn.kodekloud.com/certificate/4763e3e8-653e-43f7-b9d4-e714a10b11b1",                                 image: devopsprerequisite },
    { title: "KodeKloud",    description: "Docker For Absolute Beginners",                           link: "https://learn.kodekloud.com/certificate/f8f9a88a-8a2c-403e-b371-775f140c1bfc",                                 image: dockerforabsolutebeginners },
    { title: "KodeKloud",    description: "Linux For Absolute Beginners",                            link: "https://learn.kodekloud.com/certificate/cba3757a-6510-4bae-93cb-a218f5be7d55",                                 image: linuxforabsolutebeginners },
    { title: "KodeKloud",    description: "Kubernetes For Absolute Beginners",                       link: "https://learn.kodekloud.com/certificate/98212e05-54d8-4e41-9b43-12e5f9fefcb7",                                 image: kubermetesforabsolutebeginnerscertificate },
    { title: "freeCodeCamp", description: "Machine Learning with Python",                            link: "https://freecodecamp.org/certification/hamzakh06082000/machine-learning-with-python-v7",                       image: machinelearningwithpython },
    { title: "freeCodeCamp", description: "Data Analysis with Python",                               link: "https://freecodecamp.org/certification/hamzakh06082000/data-analysis-with-python-v7",                          image: dataanalysiswithpythoncertificate },
    { title: "freeCodeCamp", description: "Scientific Computing with Python",                        link: "https://freecodecamp.org/certification/hamzakh06082000/scientific-computing-with-python-v7",                   image: scientificcomputingwithpython },
    { title: "freeCodeCamp", description: "JavaScript Algorithms and Data Structures (Beta)",        link: "https://www.freecodecamp.org/certification/hamzakh06082000/javascript-algorithms-and-data-structures-v8",       image: certification3 },
    { title: "freeCodeCamp", description: "Responsive Web Design",                                  link: "https://www.freecodecamp.org/certification/hamzakh06082000/responsive-web-design",                             image: certification2 },
    { title: "Coursera",     description: "Website with WordPress",                                  link: "https://www.coursera.org/account/accomplishments/records/N2F712XKEWW4",                                       image: wordpress },
    { title: "SCRUMstudy",   description: "Scrum for Ops and DevOps Fundamentals",                   link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1011595",                                    image: certification8 },
    { title: "SCRUMstudy",   description: "Scrum Fundamentals Certified (SFC)",                      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1036406",                                      image: certification9 },
  ];

  const testimonials = [
    { name: "Sabrine Loussaief",  role: "Instructor at GOMYCODE", content: "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape.", image: "/sabrine-profile.webp" },
    { name: "Mohamed Amine Sefi", role: "UI/UX Designer at CWD",  content: "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave Digital. As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications.", image: "/amine-profile.webp" },
    { name: "Sarra Fersi",        role: "Intern at CWD",          content: "I've had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer. His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart. I highly recommend Hamza to anyone seeking a dedicated and skilled developer.", image: "/sarah-profile.webp" },
    { name: "Hazem Khaled",       role: "Student at FSEG Nabeul", content: "I am very grateful for the valuable support I received during my internship project. The guidance provided was not only technically precise but also patient and encouraging. This experience helped me overcome challenges with confidence and achieve better results. I highly recommend him to anyone looking for a skilled and reliable web developer.", image: "/hazem-profile.webp" },
  ];

  /* scroll to top when case study opens */
  useEffect(() => {
    if (showCaseStudy) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [showCaseStudy]);

  /* Render case study if active */
  if (showCaseStudy) {
    return <HachkaCaseStudy onBack={() => { setShowCaseStudy(false); setTimeout(() => scrollToSection('projects'), 200); }} />;
  }

  /* ─────────────────── MAIN RENDER ─────────────────── */
  return (
    <div className="min-h-screen bg-background" lang={lang}>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" aria-label="Hamza Khaled — Home">
              HK
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary'}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              {/* Language switch */}
              <button onClick={toggleLang} aria-label="Switch language"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Languages className="w-4 h-4" />
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleLang} aria-label="Switch language"
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-border text-xs font-medium hover:bg-accent transition-colors"
              >
                <Languages className="w-3 h-3" />
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative z-50" aria-label="Toggle mobile menu" aria-expanded={isMenuOpen}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border relative z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${activeSection === item.id ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-x-hidden" aria-label="Hero section">
        <span className="hero-particle" style={{ width:7,  height:7,  background:'var(--portfolio-accent-blue)', opacity:0.18, top:'18%', left:'4%',  animation:'particle-float 7s 0.0s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width:5,  height:5,  background:'var(--portfolio-light-blue)', opacity:0.15, top:'65%', left:'7%',  animation:'particle-float 9s 1.2s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width:6,  height:6,  background:'var(--portfolio-accent-blue)', opacity:0.12, top:'28%', left:'91%', animation:'particle-float 8s 2.0s ease-in-out infinite' }} />
        <span className="hero-particle" style={{ width:4,  height:4,  background:'var(--portfolio-dark-blue)',  opacity:0.10, top:'78%', left:'88%', animation:'particle-float 6s 0.6s ease-in-out infinite' }} />

        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-hero-1 inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <span className="available-dot" aria-hidden="true" />
                {t.hero.available}
              </div>
              <h1 className="animate-hero-2 text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                {t.hero.greeting}{' '}<span className="gradient-text">Hamza Khaled</span>
              </h1>
              <div className="animate-hero-3 text-xl sm:text-2xl text-muted-foreground mb-5 h-10 flex items-center justify-center lg:justify-start" aria-live="polite">
                <span>{displayedRole}</span>
                <span className="typing-cursor" aria-hidden="true" />
              </div>
              <div className="animate-hero-3 shimmer-divider" aria-hidden="true" />
              <div className="animate-hero-4 space-y-2 mb-5">
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{t.hero.school} <span className="font-semibold text-primary">EPS Sousse</span> (Polytechnic School of Sousse)</span>
                </p>
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <Rocket className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  {t.hero.passion}
                </p>
                <p className="text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  {t.hero.location}
                </p>
              </div>
              <div className="animate-hero-5 flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <div className="animate-badge-1 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm"><Cpu size={15} className="text-primary" aria-hidden="true" /> MERN Stack</div>
                <div className="animate-badge-2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm"><Smartphone size={15} className="text-primary" aria-hidden="true" /> React Native</div>
                <div className="animate-badge-3 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm"><Box size={15} className="text-primary" aria-hidden="true" /> Docker</div>
              </div>
              <div className="animate-hero-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection('contact')} size="lg"><Mail className="mr-2 h-4 w-4" aria-hidden="true" />{t.hero.getInTouch}</Button>
                <div className="relative">
                  <Button variant="outline" onClick={() => setShowCVOptions(!showCVOptions)} size="lg" className="w-full sm:w-auto" aria-expanded={showCVOptions}>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t.hero.resume}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${showCVOptions ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </Button>
                  {showCVOptions && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden" role="menu">
                      <button onClick={() => downloadCV('english')} className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 text-sm" role="menuitem"><span className="text-base">🇺🇸</span>{t.hero.resumeEn}</button>
                      <button onClick={() => downloadCV('french')} className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 text-sm border-t border-border" role="menuitem"><span className="text-base">🇫🇷</span>{t.hero.resumeFr}</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="animate-hero-avatar flex justify-center lg:justify-end">
              <div className="relative avatar-wrapper">
                <div className="relative avatar-circle-size">
                  <div className="avatar-ring-outer" aria-hidden="true" />
                  <div className="avatar-ring-inner" aria-hidden="true" />
                  <img src={heroImage} alt="Hamza Khaled" className="animate-float w-full h-full object-cover rounded-full border-4 border-accent relative z-10" />
                  <div className="hero-chip hero-chip--react animate-chip-1" style={{ top:'6%', right:'-90px' }} aria-hidden="true">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="w-4 h-4" />React
                  </div>
                  <div className="hero-chip hero-chip--node animate-chip-2" style={{ bottom:'12%', right:'-96px' }} aria-hidden="true">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" className="w-4 h-4" />Node.js
                  </div>
                  <div className="hero-chip hero-chip--docker animate-chip-3" style={{ bottom:'12%', left:'-80px' }} aria-hidden="true">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="" className="w-4 h-4" />Docker
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="py-32 bg-card" aria-labelledby="about-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="about-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.about.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground max-w-3xl mx-auto">{t.about.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className={`reveal reveal-scale reveal-d${i + 1}`}>
                <Card className="h-full card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <img src={service.logo} alt="" className="w-10 h-10 object-contain" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent><CardDescription className="text-center">{service.description}</CardDescription></CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Stats animées */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16" aria-label="Key statistics">
            {[
              { icon: Clock,     value: counters.hours,       suffix: '+', label: t.about.stats.hours },
              { icon: Code,      value: counters.projects,    suffix: '+', label: t.about.stats.projects },
              { icon: Briefcase, value: counters.internships, suffix: '',  label: t.about.stats.internships },
              { icon: Award,     value: counters.certs,       suffix: '',  label: t.about.stats.certs },
            ].map((stat, i) => (
              <div key={i} className="reveal reveal-scale bg-accent/40 rounded-xl p-6 text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" aria-hidden="true" />
                <div className="text-3xl font-bold text-foreground mb-1" aria-live="polite">{stat.value}{stat.suffix}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EXPERIENCE ══════════ */}
      <section id="experience" className="py-20" aria-labelledby="experience-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="experience-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.experience.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.experience.subtitle}</p>
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative reveal">
                <div className="absolute left-5 top-6 h-full w-0.5 bg-primary/20">{index < experiences.length - 1 && <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary to-transparent" />}</div>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"><div className="h-3 w-3 rounded-full bg-primary" /></div>
                  <Card className="overflow-hidden card-hover">
                    <div className="flex items-center gap-4 p-4 border-b">
                      <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain rounded-md" />
                      <div><h3 className="font-semibold">{exp.title}</h3><p className="text-sm text-muted-foreground">{exp.company}</p><Badge variant="secondary" className="mt-1 text-xs">{exp.duration}</Badge></div>
                    </div>
                    <CardContent className="p-4 pt-2"><ul className="space-y-2">{exp.points.map((pt, i) => (<li key={i} className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" /><span className="text-sm text-muted-foreground">{pt}</span></li>))}</ul></CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20"><div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary via-primary to-transparent" /></div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="absolute left-1/2 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/10 timeline-dot"><div className="h-3 w-3 rounded-full bg-primary" /></div>
                    <Card className={`w-full max-w-2xl card-hover ${index % 2 === 0 ? 'mr-auto exp-card-left' : 'ml-auto exp-card-right'}`}>
                      <div className="flex items-center gap-4 p-6 pb-4"><img src={exp.logo} alt={exp.company} className="h-14 w-14 object-contain rounded-md" /><div><h3 className="text-lg font-semibold">{exp.title}</h3><p className="text-muted-foreground">{exp.company}</p></div></div>
                      <CardContent className="px-6 pb-6 pt-0"><Badge variant="secondary" className="mb-4">{exp.duration}</Badge><ul className="space-y-3">{exp.points.map((pt, i) => (<li key={i} className="flex items-start gap-3"><div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /><span className="text-sm text-muted-foreground">{pt}</span></li>))}</ul></CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EDUCATION TIMELINE ══════════ */}
      <section id="education" className="py-20 bg-card" aria-labelledby="education-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="education-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">
              {lang === 'fr' ? 'Formation' : 'Education'}
            </h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">
              {lang === 'fr' ? 'Mon parcours académique' : 'My academic journey'}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-border hidden sm:block" aria-hidden="true" />
              <div className="space-y-8">
                {education.map((item, i) => (
                  <div key={i} className="reveal flex gap-6 items-start" style={{ transitionDelay: `${i * 0.12}s` }}>
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`} aria-hidden="true">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{item.period}</Badge>
                        <Badge variant="secondary" className="text-xs">{item.location}</Badge>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-0.5">{item.school}</h3>
                      <p className="text-sm text-muted-foreground">{item.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TECHNOLOGIES ══════════ */}
      <section id="technologies" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden" aria-labelledby="tech-title">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 id="tech-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t.technologies.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.technologies.subtitle}</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 justify-items-center">
            {technologies.map((tech, i) => (
              <div key={tech.name} className="reveal reveal-scale tech-icon-wrap group relative flex flex-col items-center" style={{ transitionDelay: `${(i % 8) * 0.06}s` }}>
                <div className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-transform duration-300" loading="lazy" />
                  </div>
                </div>
                <h3 className="text-xs font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GITHUB ACTIVITY ══════════ */}
      <section id="github" className="py-20 bg-card" aria-labelledby="github-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-12">
            <h2 id="github-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.github.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.github.subtitle}</p>
          </div>
          <div className="reveal flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar username="hamzakh86" colorScheme={isDarkMode ? 'dark' : 'light'} blockSize={14} blockMargin={4} fontSize={13} />
          </div>
          <div className="reveal reveal-d2 text-center mt-6">
            <Button variant="outline" onClick={() => window.open('https://github.com/hamzakh86', '_blank')}>
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />{t.github.viewProfile}
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ OPEN SOURCE ══════════ */}
      <section id="opensource" className="py-20" aria-labelledby="opensource-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-12">
            <h2 id="opensource-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.opensource.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.opensource.subtitle}</p>
          </div>

          {reposLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="status" aria-live="polite" aria-label={t.opensource.loading}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5 space-y-3 animate-pulse">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-accent/60 rounded w-2/3" />
                    <div className="h-5 bg-accent/60 rounded w-14" />
                  </div>
                  <div className="h-3 bg-accent/40 rounded w-full" />
                  <div className="h-3 bg-accent/40 rounded w-4/5" />
                  <div className="flex gap-4 pt-1">
                    <div className="h-3 bg-accent/40 rounded w-10" />
                    <div className="h-3 bg-accent/40 rounded w-10" />
                    <div className="h-3 bg-accent/40 rounded w-16" />
                  </div>
                  <div className="h-8 bg-accent/40 rounded w-full mt-2" />
                </div>
              ))}
            </div>
          )}
          {reposError && (
            <div className="text-center text-muted-foreground py-12" role="alert">{t.opensource.error}</div>
          )}
          {!reposLoading && !reposError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <div key={repo.id} className="reveal card-hover" style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                  <Card className="h-full flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <Github className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                          <CardTitle className="text-sm font-semibold truncate">{repo.name}</CardTitle>
                        </div>
                        {repo.language && (
                          <Badge variant="outline" className="text-xs flex-shrink-0">{repo.language}</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs line-clamp-2 mt-1">
                        {repo.description || (lang === 'fr' ? 'Pas de description disponible.' : 'No description available.')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 mt-auto">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1" aria-label={`${repo.stargazers_count} ${t.opensource.stars}`}>
                          <StarIcon className="w-3.5 h-3.5" aria-hidden="true" />{repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1" aria-label={`${repo.forks_count} ${t.opensource.forks}`}>
                          <GitFork className="w-3.5 h-3.5" aria-hidden="true" />{repo.forks_count}
                        </span>
                        {repo.updated_at && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {new Date(repo.updated_at).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(repo.html_url, '_blank')}>
                        <ExternalLink className="w-3.5 h-3.5 mr-2" aria-hidden="true" />{t.opensource.viewRepo}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
          <div className="reveal text-center mt-10">
            <Button variant="outline" onClick={() => window.open('https://github.com/hamzakh86?tab=repositories', '_blank')}>
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              {lang === 'fr' ? 'Voir tous les dépôts' : 'View all repositories'}
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ PROJECTS ══════════ */}
      <section id="projects" className="py-20 bg-card" aria-labelledby="projects-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="projects-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.projects.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground max-w-3xl mx-auto">{t.projects.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, i) => (
              <div key={project.name} className="reveal card-hover" style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                <Card className="h-full overflow-hidden flex flex-col">
                  {(project.demo_video || project.image) && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg relative group">
                      <img src={project.demo_video || project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      {project.demo_video && <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">▶ Live preview</span>}
                      {project.hachka && (
                        <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">Freelance</span>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">{project.technologies.map(tech => (<Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>))}</div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}><Github className="w-4 h-4 mr-2" aria-hidden="true" />{t.projects.code}</Button>
                      {project.demo && <Button size="sm" onClick={() => window.open(project.demo, '_blank')}><ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />{t.projects.demo}</Button>}
                      {project.hachka && <Button size="sm" variant="secondary" onClick={() => setShowCaseStudy(true)}><BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />{t.projects.caseStudy}</Button>}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button onClick={() => { showAllProjects ? handleCollapse(setShowAllProjects, 'projects') : setShowAllProjects(true); }} variant="outline" size="lg">
                {showAllProjects ? t.projects.showLess : t.projects.showMore}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════ CERTIFICATIONS ══════════ */}
      <section id="certifications" className="py-20" aria-labelledby="certs-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="certs-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.certifications.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.certifications.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllCertifications ? certifications : certifications.slice(0, 3)).map((cert, index) => (
              <div key={index} className="reveal card-hover" style={{ transitionDelay: `${(index % 3) * 0.12}s` }}>
                <Card className="h-full">
                  {cert.image && (<div className="w-full h-auto overflow-hidden rounded-t-lg bg-white flex items-center justify-center"><img src={cert.image} alt={cert.description} className="w-full h-full object-contain" loading="lazy" /></div>)}
                  <CardHeader><CardTitle className="text-lg flex items-center"><Award className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />{cert.title}</CardTitle><CardDescription>{cert.description}</CardDescription></CardHeader>
                  {cert.link && (<CardContent><Button variant="outline" size="sm" onClick={() => window.open(cert.link, '_blank')}><ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />{t.certifications.view}</Button></CardContent>)}
                </Card>
              </div>
            ))}
          </div>
          {certifications.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button onClick={() => { showAllCertifications ? handleCollapse(setShowAllCertifications, 'certifications') : setShowAllCertifications(true); }} variant="outline" size="lg">
                {showAllCertifications ? t.certifications.showLess : t.certifications.showMore}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllCertifications ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section id="testimonials" className="py-20 bg-card" aria-labelledby="testimonials-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="testimonials-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllTestimonials ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
              <div key={index} className="reveal card-hover" style={{ transitionDelay: `${(index % 3) * 0.13}s` }}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4" aria-label="5 stars rating">{[...Array(5)].map((_, i) => (<Star key={i} className="star-animated w-4 h-4 fill-primary text-primary" aria-hidden="true" />))}</div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-border" loading="lazy" />
                      <div><p className="font-semibold">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {testimonials.length > 3 && (
            <div className="reveal text-center mt-12">
              <Button onClick={() => { showAllTestimonials ? handleCollapse(setShowAllTestimonials, 'testimonials') : setShowAllTestimonials(true); }} variant="outline" size="lg">
                {showAllTestimonials ? t.testimonials.showLess : t.testimonials.showMore}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllTestimonials ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="py-20" aria-labelledby="contact-title">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="text-center mb-16">
            <h2 id="contact-title" className="section-title reveal text-3xl sm:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="reveal reveal-d2 text-lg text-muted-foreground">{t.contact.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
            <div className="reveal-left">
              <Card className="h-full contact-card-glow">
                <CardHeader><CardTitle>{t.contact.form.title}</CardTitle><CardDescription>{t.contact.form.subtitle}</CardDescription></CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">{t.contact.form.name}</label>
                      <Input id="name" name="name" value={contactForm.name} onChange={handleContactFormChange} placeholder={t.contact.form.namePlaceholder} required autoComplete="name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">{t.contact.form.email}</label>
                      <Input id="email" type="email" name="email" value={contactForm.email} onChange={handleContactFormChange} placeholder={t.contact.form.emailPlaceholder} required autoComplete="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">{t.contact.form.message}</label>
                      <Textarea id="message" name="message" value={contactForm.message} onChange={handleContactFormChange} placeholder={t.contact.form.messagePlaceholder} rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                      {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                    </Button>
                    {submitStatus === 'success' && <p className="text-green-600 text-sm mt-2" role="alert">{t.contact.form.success}</p>}
                    {submitStatus === 'error'   && <p className="text-red-600 text-sm mt-2" role="alert">{t.contact.form.error}</p>}
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="reveal-right grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center"><Mail className="w-5 h-5 mr-2" aria-hidden="true" />{t.contact.emailTitle}</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">khaledhamza251785@gmail.com</p>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard('khaledhamza251785@gmail.com')} className="h-8 w-8 p-0" aria-label="Copy email"><Copy className="w-4 h-4" /></Button>
                  </div>
                  {emailCopied && <div className="text-xs text-green-600 mt-2" role="status">{t.contact.copied}</div>}
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center"><MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />{t.contact.socialsTitle}</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Github,    url: 'https://github.com/hamzakh86',                        label: 'GitHub' },
                      { icon: Linkedin,  url: 'https://www.linkedin.com/in/hamza-khaled-16a114290/', label: 'LinkedIn' },
                      { icon: Instagram, url: 'https://www.instagram.com/hamzakhaledofficial86/',    label: 'Instagram' },
                      { icon: Facebook,  url: 'https://www.facebook.com/hamzakhaledofficial86/',     label: 'Facebook' },
                      { icon: Phone,     url: 'https://wa.me/21625178855',                           label: 'WhatsApp' },
                    ].map((social, index) => (
                      <button key={index} onClick={() => window.open(social.url, '_blank')} className="w-10 h-10 bg-accent rounded-md flex items-center justify-center hover:bg-accent/80 hover:scale-110 transition-all duration-200" aria-label={social.label}>
                        <social.icon className="w-5 h-5" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 card-hover">
                <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center"><MapPin className="w-5 h-5 mr-2" aria-hidden="true" />{t.contact.locationTitle}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-primary" aria-hidden="true" /><p className="text-muted-foreground">Sousse, Tunisia</p></div>
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102834.57537117855!2d10.566667!3d35.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a7ca7d7b0d7%3A0x8a7ca7d7b0d7b0d7!2sSousse%2C%20Tunisia!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sousse, Tunisia Location" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-background/80 backdrop-blur-md border-t border-border text-foreground py-12" role="contentinfo">
        <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">HK</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.footer.description}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{t.footer.quickLinks}</h3>
              <div className="grid grid-cols-2 gap-2">
                {['about','experience','technologies','projects'].map(id => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm capitalize">
                    {navItems.find(n => n.id === id)?.label || id}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{t.footer.contact}</h3>
              <p className="text-muted-foreground text-sm">khaledhamza251785@gmail.com</p>
              {/* ── Lighthouse badge ── */}
              <div className="mt-4">
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">{t.performance.score}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: t.performance.performance,    score: LIGHTHOUSE.performance,    color: 'text-green-500' },
                    { label: t.performance.accessibility,  score: LIGHTHOUSE.accessibility,  color: 'text-green-500' },
                    { label: t.performance.seo,            score: LIGHTHOUSE.seo,            color: 'text-green-500' },
                    { label: t.performance.bestPractices,  score: LIGHTHOUSE.bestPractices,  color: 'text-green-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-accent/40 rounded-lg px-2.5 py-1.5" title={`${item.label}: ${item.score}/100`}>
                      <span className={`text-sm font-bold ${item.color}`}>{item.score}</span>
                      <span className="text-xs text-muted-foreground hidden sm:inline">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  <a href="https://pagespeed.web.dev/analysis?url=https://hamza-khaled.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                    {lang === 'fr' ? 'Voir le rapport complet ↗' : 'View full report ↗'}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">{t.footer.rights}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <button onClick={toggleLang} className="hover:text-primary transition-colors">
                {lang === 'en' ? 'Passer en Français' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top ── */}
      {showScrollTop && (
        <button onClick={() => scrollToSection('hero')} className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl" aria-label="Scroll to top">
          <ArrowUp className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
        </button>
      )}

    </div>
  );
};

export default App;
