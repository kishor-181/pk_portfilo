import React from 'react';
import { Navbar } from 'components/index';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Achievements,
  Education,
  Contact,
  Footer,
} from 'sections/index';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-secondary-800 font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
