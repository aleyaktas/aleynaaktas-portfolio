import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Mobile Developer",
    company: "Elatsan",
    location: "Izmir, Turkey",
    date: "May 2024 – Present",
    points: [
      "Developed a scalable cross-platform mobile application for shooting training simulations using React Native, Expo, TypeScript, and Redux.",
      "Built end-to-end web dashboards and internal tools using React and TypeScript, including a shooting simulation management dashboard, an online patrol monitoring application, and a legal case tracking application.",
      "Optimized real-time data processing and UI/UX to ensure high performance and a seamless experience across devices."
    ]
  },
  {
    id: 2,
    role: "Freelance Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    date: "June 2022 – April 2024",
    points: [
      "Designed, developed, and shipped end-to-end mobile applications, taking ownership of the full development lifecycle from product design and frontend implementation to backend integration and production release.",
      "Built and launched Self English, an AI-powered English learning platform featuring speech recognition, AI-based assessments, interactive learning modules, and user progress tracking.",
      "Developed and released Kelibu, an interactive language learning application with five game modes, dynamic learning content, and progress-based experiences."
    ]
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "VBT Software",
    location: "Istanbul, Turkey",
    date: "June - August 2022",
    points: [
      "Gained insight into software development workflows and best practices through hands-on learning sessions with VBT Software engineers."
    ]
  },
  {
    id: 4,
    role: "Frontend Developer Intern",
    company: "Kodpit Technology",
    location: "Denizli, Turkey",
    date: "June - September 2021",
    points: [
      "Developed and published my Planning Your Life Project using technologies like React, Redux, Node.js, and MongoDB."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon"><Briefcase size={16} /></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company} <span>• {exp.location}</span></h4>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
