
import React, { useState, useEffect } from 'react';
import { PersonalInfo } from '../types';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">{personalInfo.name}</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-socials">
          {personalInfo.githubUrl && (
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
          {personalInfo.linkedinUrl && (
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;