import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className="header glass-panel">
      <div className="container header-container">
        <div className="logo">
          <a href="#" className="text-gradient">Aleyna.</a>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary btn-sm">Contact Me</a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav glass-panel"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
