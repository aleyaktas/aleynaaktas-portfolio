import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: <Code2 size={24} />, items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Storybook'] },
    { category: 'Backend', icon: <Server size={24} />, items: ['Node.js', 'Express', 'Socket.io'] },
    { category: 'Database', icon: <Database size={24} />, items: ['MongoDB', 'Firebase'] },
    { category: 'Cloud/DevOps', icon: <Cloud size={24} />, items: ['AWS EC2', 'Expo'] },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">About & Skills</span>
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Who I am</h3>
            <p>
              I am a passionate Full Stack Engineer focusing primarily on mobile development. 
              I have extensive experience in building and shipping end-to-end products using 
              React Native, React, TypeScript, and Node.js.
            </p>
            <p>
              I enjoy solving complex problems, creating intuitive user interfaces, and 
              optimizing real-time data processing to ensure a seamless experience across devices.
              Whether it's integrating in-app purchases, developing complex algorithms, or building
              beautiful UI animations, I strive for excellence in every line of code.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skillGroup.icon}</div>
                  <h4>{skillGroup.category}</h4>
                </div>
                <div className="skill-badges">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
