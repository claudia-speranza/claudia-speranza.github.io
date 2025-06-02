import React from 'react';
import { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution} | {edu.location}</p>
                <p className="graduation-date">{edu.graduationDate}</p>
                {edu.description && <p className="description">{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
