import React from 'react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-name">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </div>
          <div className="footer-links">
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-socials">
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
            {personalInfo.portfolioUrl && (
              <a href={personalInfo.portfolioUrl} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            )}
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;