
import React from 'react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} | {exp.location}</p>
                  <p className="period">{exp.startDate} - {exp.endDate}</p>
                </div>
                <div className="timeline-body">
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="technologies">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;