import React from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
