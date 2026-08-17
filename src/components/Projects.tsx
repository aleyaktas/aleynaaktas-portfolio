import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, User, Sparkles, Smartphone } from 'lucide-react';
import './Projects.css';

// Import Elatsan images
import eagleSim1 from '../assets/eagleSim-1.png';
import eagleSim2 from '../assets/eagleSim-2.png';
import eagleSim3 from '../assets/eagleSim-3.png';
import eagleSim4 from '../assets/eagleSim-4.png';
import eagleSim5 from '../assets/eagleSim-5.png';
import eagleSimMain from '../assets/eagleSim.png';
import eagleSim6 from '../assets/eaglesim-6.jpg';

import onlineDevriye1 from '../assets/onlineDevriye.jpg';
import onlineDevriye2 from '../assets/onlineDevriye2.jpg';
import onlineDevriye3 from '../assets/onlineDevriye3.jpg';
import onlineDevriye4 from '../assets/onlineDevriye4.jpg';
import onlineDevriye5 from '../assets/onlineDevriye5.jpg';
import onlineDevriye6 from '../assets/onlineDevriye6.jpg';
import onlineDevriye7 from '../assets/onlineDevriye7.jpg';
import onlineDevriye8 from '../assets/onlineDevriye8.jpg';

import hukuk1 from '../assets/hukuk1.jpg';
import hukuk2 from '../assets/hukuk2.jpg';
import hukuk3 from '../assets/hukuk3.jpg';
import hukuk4 from '../assets/hukuk4.jpg';
import hukuk5 from '../assets/hukuk5.jpg';
import hukuk6 from '../assets/hukuk6.jpg';
import hukuk7 from '../assets/hukuk7.jpg';
import hukuk8 from '../assets/hukuk8.jpg';

// Import Freelance images
import kelibu1 from '../assets/kelibu1.PNG';
import kelibu2 from '../assets/kelibu2.PNG';
import kelibu3 from '../assets/kelibu3.PNG';

import selfeng1 from '../assets/selfeng1.jpeg';
import selfeng2 from '../assets/selfeng2.jpeg';
import selfeng3 from '../assets/selfeng3.jpeg';
import selfeng4 from '../assets/selfeng4.jpeg';
import selfeng5 from '../assets/selfeng5.jpeg';
import selfeng6 from '../assets/selfeng6.jpeg';
import selfeng7 from '../assets/selfeng7.jpeg';
import selfeng8 from '../assets/selfeng8.jpeg';

// Import Personal images
import gemscope1 from '../assets/gemscope1.jpg';
import gemscope2 from '../assets/gemscope-2.jpg';
import gemscope3 from '../assets/gemscope-3.jpg';
import gemscope4 from '../assets/gemscope-4.jpg';
import gemscope5 from '../assets/gemscope-5.jpg';

import ydspro0 from '../assets/ydspro.PNG';
import ydspro1 from '../assets/ydspro1.PNG';
import ydspro2 from '../assets/ydspro2.PNG';
import ydspro3 from '../assets/ydspro3.PNG';
import ydspro4 from '../assets/ydspro4.PNG';
import ydspro5 from '../assets/ydspro5.PNG';
import ydspro6 from '../assets/ydspro6.PNG';
import ydspro7 from '../assets/ydspro7.PNG';

import puzzle1 from '../assets/puzzle1.jpeg';
import puzzle2 from '../assets/puzzle2.jpeg';
import puzzle3 from '../assets/puzzle3.jpeg';
import puzzle4 from '../assets/puzzle4.jpeg';
import puzzle5 from '../assets/puzzle5.jpeg';

import baby1 from '../assets/baby1.jpeg';
import baby2 from '../assets/baby2.jpeg';
import baby3 from '../assets/baby3.jpeg';
import baby4 from '../assets/baby4.jpeg';
import baby5 from '../assets/baby5.jpeg';
import baby6 from '../assets/baby6.jpeg';

import cycella1 from '../assets/cycella1.PNG';
import cycella2 from '../assets/cycella2.PNG';
import cycella3 from '../assets/cycella3.PNG';
import cycella4 from '../assets/cycella4.PNG';
import cycella5 from '../assets/cycella5.PNG';
import cycella6 from '../assets/cycella6.PNG';
import cycella7 from '../assets/cycella7.PNG';
import cycella8 from '../assets/cycella8.PNG';

// SVG icons for stores
const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.476-.024-2.796 2.28-4.14 2.388-4.212-1.308-1.932-3.336-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.248.996zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
  </svg>
);

type Category = 'all' | 'elatsan' | 'freelance' | 'personal';

interface ProjectData {
  title: string;
  tech: string[];
  desc: string;
  images: string[];
  category: Category;
  links: {
    playStore?: string;
    appStore?: string;
  };
  platform: string;
}

const projects: ProjectData[] = [
  // 1. Eagle Sim
  {
    title: "Eagle Sim",
    tech: ["React Native", "Expo", "TypeScript", "Redux", "Node.js", "PostgreSQL"],
    desc: "A scalable cross-platform mobile application for shooting training simulations. Optimized real-time data processing and UI/UX for high performance across devices.",
    images: [eagleSimMain, eagleSim1, eagleSim2, eagleSim3, eagleSim4, eagleSim5, eagleSim6],
    category: 'elatsan',
    links: {},
    platform: "Mobile App"
  },
  // 2. YDS Pro
  {
    title: "YDS Pro",
    tech: ["React Native", "Expo", "Node.js", "TypeScript", "PostgreSQL"],
    desc: "A comprehensive academic English exam preparation app covering YDS, YÖKDİL, TOEFL, and IELTS with 600+ critical vocabulary words, grammar modules, and timed mock exams. 4.8 rating with 5K+ downloads.",
    images: [ydspro0, ydspro1, ydspro2, ydspro3, ydspro4, ydspro5, ydspro6, ydspro7],
    category: 'personal',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.opiaclab.kelimeler&hl=tr",
      appStore: "https://apps.apple.com/tr/app/yds-hocam-yds-ve-y%C3%B6kdi-l/id6664053285?l=tr"
    },
    platform: "Mobile App"
  },
  // 3. Puzzle Dreams
  {
    title: "Puzzle Dreams",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    desc: "A calming 3D puzzle game featuring rotatable environments, pastel-themed visuals, and ASMR-inspired sound design for a stress-free experience. 1K+ downloads.",
    images: [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5],
    category: 'personal',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.opiaclab.miniworldpuzzle&hl=tr",
      appStore: "https://apps.apple.com/tr/app/puzzle-dreams-rahatlat%C4%B1c%C4%B1-3d/id6756208731?l=tr"
    },
    platform: "Mobile App"
  },
  // 4. GemScope
  {
    title: "GemScope",
    tech: ["React Native", "Expo", "Google Gemini API", "TypeScript"],
    desc: "An AI-powered gemstone identification app leveraging Google Gemini API for real-time analysis and detailed information about precious stones.",
    images: [gemscope1, gemscope2, gemscope3, gemscope4, gemscope5],
    category: 'personal',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.opiaclab.cardanalysis&hl=tr"
    },
    platform: "Mobile App"
  },
  // 5. Kelibu
  {
    title: "Kelibu",
    tech: ["React Native", "Node.js", "TypeScript", "Redux", "PostgreSQL"],
    desc: "An interactive language learning application with five game modes, dynamic learning content, and progress-based experiences for engaging vocabulary practice.",
    images: [kelibu1, kelibu2, kelibu3],
    category: 'freelance',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.phdakademi.kelibu&hl=tr",
      appStore: "https://apps.apple.com/sa/app/kelibu-yds-y%C3%B6kdi-l-tipdi-l-ydt/id6484268631"
    },
    platform: "Mobile App"
  },
  // 6. Self English
  {
    title: "Self English",
    tech: ["React Native", "Expo", "Redux", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "An AI-powered English learning platform featuring speech recognition, AI-based assessments, interactive learning modules, and user progress tracking.",
    images: [selfeng1, selfeng2, selfeng3, selfeng4, selfeng5, selfeng6, selfeng7, selfeng8],
    category: 'freelance',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.phdakademi.selfenglish",
      appStore: "https://apps.apple.com/pk/app/selfenglish-i-ngilizce-%C3%B6%C4%9Fren/id6738060456"
    },
    platform: "Mobile App"
  },
  // 7. Baby Tracker
  {
    title: "Baby Tracker",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "A comprehensive baby tracking application for parents to monitor feeding, sleeping, diaper changes, and growth milestones with intuitive charts and reminders.",
    images: [baby1, baby2, baby3, baby4, baby5, baby6],
    category: 'personal',
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.opiaclab.babytracker&hl=tr",
      appStore: "https://apps.apple.com/tr/app/baby-tracker-bebek-geli%C5%9Fimi/id6742326061?l=tr"
    },
    platform: "Mobile App"
  },
  // 8. Cycella
  {
    title: "Cycella",
    tech: ["React Native", "Expo", "TypeScript", "Redux", "Node.js", "PostgreSQL"],
    desc: "A modern menstrual cycle and ovulation tracking application offering insightful daily predictions, symptom logging, and body cycle analytics.",
    images: [cycella1, cycella2, cycella3, cycella4, cycella5, cycella6, cycella7, cycella8],
    category: 'personal',
    links: {
      appStore: "https://apps.apple.com/tr/app/cycella-ai-period-ovulation/id6749870635?l=tr"
    },
    platform: "Mobile App"
  },
  // 9. Online Devriye
  {
    title: "Online Devriye",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "An online patrol monitoring application built as an end-to-end dashboard and internal tool for real-time tracking and management of patrol operations.",
    images: [onlineDevriye1, onlineDevriye2, onlineDevriye3, onlineDevriye4, onlineDevriye5, onlineDevriye6, onlineDevriye7, onlineDevriye8],
    category: 'elatsan',
    links: {},
    platform: "Mobile App"
  },
  // 10. Hukuk
  {
    title: "Hukuk",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "A legal case tracking application built as a comprehensive dashboard for managing and monitoring legal cases with intuitive interface design.",
    images: [hukuk1, hukuk2, hukuk3, hukuk4, hukuk5, hukuk6, hukuk7, hukuk8],
    category: 'elatsan',
    links: {},
    platform: "Mobile App"
  },
];

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All Projects', icon: <Sparkles size={16} /> },
  { key: 'elatsan', label: 'Elatsan', icon: <Briefcase size={16} /> },
  { key: 'personal', label: 'Personal', icon: <Smartphone size={16} /> },
  { key: 'freelance', label: 'Freelance', icon: <User size={16} /> },
];

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="carousel-image"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={18} />
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next image">
            <ChevronRight size={18} />
          </button>

          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Featured Projects</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A selection of projects I've worked on across different roles and interests
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                layout
              >
                <div className="project-media-container">
                  <ImageCarousel images={project.images} title={project.title} />
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span className="project-platform-badge">{project.platform}</span>
                    </div>
                    <div className="project-links">
                      {project.links.playStore && (
                        <a href={project.links.playStore} target="_blank" rel="noreferrer" title="Google Play Store" className="store-link play-store">
                          <GooglePlayIcon />
                        </a>
                      )}
                      {project.links.appStore && (
                        <a href={project.links.appStore} target="_blank" rel="noreferrer" title="App Store" className="store-link app-store">
                          <AppStoreIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
