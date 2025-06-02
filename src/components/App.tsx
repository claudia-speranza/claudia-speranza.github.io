import React from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

import { personalInfo, experiences, skills, projects, education } from '../data/resume';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header personalInfo={personalInfo} />
      <main>
        <About personalInfo={personalInfo} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;

