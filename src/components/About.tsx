import React from 'react';
import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{personalInfo.title}</h3>
            <p>{personalInfo.bio}</p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span>{personalInfo.email}</span>
              </div>
              {personalInfo.phone && (
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <span>{personalInfo.phone}</span>
                </div>
              )}
            </div>
          </div>
          <div className="about-image">
                {personalInfo.imageUrl ? (
                  <img src={personalInfo.imageUrl}/>
                ) : (
                  <div className="project-placeholder">Your Image</div>
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
