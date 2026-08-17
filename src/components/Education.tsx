import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: "MSc in Computer Engineering",
    school: "Dokuz Eylül University",
    date: "September 2024 - Present",
    icon: <GraduationCap size={24} />
  },
  {
    degree: "BSc in Computer Engineering",
    school: "Pamukkale University",
    date: "June 2023",
    icon: <GraduationCap size={24} />
  }
];

const bootcamps = [
  {
    title: "React Bootcamp Student",
    org: "Patika & Fimple, Istanbul",
    date: "December – February 2024",
    desc: "Gained hands-on experience with JavaScript, React, and Redux during an intensive bootcamp.",
    icon: <Award size={24} />
  },
  {
    title: "IOS Developer Bootcamp Student",
    org: "UP School & Akbank, Istanbul",
    date: "June – September 2023",
    desc: "Learned iOS development with Swift and UIKit. Developed multiple iOS applications as part of the bootcamp.",
    icon: <Award size={24} />
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Education & Bootcamps</span>
        </motion.h2>

        <div className="edu-grid">
          <div className="edu-column">
            <motion.h3 
              className="column-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Academic Background
            </motion.h3>
            <div className="edu-list">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="edu-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="edu-icon">{item.icon}</div>
                  <div className="edu-content">
                    <h4>{item.degree}</h4>
                    <h5>{item.school}</h5>
                    <span className="edu-date">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="edu-column">
            <motion.h3 
              className="column-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Bootcamps & Training
            </motion.h3>
            <div className="edu-list">
              {bootcamps.map((item, index) => (
                <motion.div 
                  key={index}
                  className="edu-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="edu-icon award-icon">{item.icon}</div>
                  <div className="edu-content">
                    <h4>{item.title}</h4>
                    <h5>{item.org}</h5>
                    <span className="edu-date">{item.date}</span>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
