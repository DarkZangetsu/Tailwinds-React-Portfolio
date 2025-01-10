import { useEffect, useState } from 'react';

import Navbar from './components/navigaiton/Navbar';
import Hero from './components/sections/hero';
import About from './components/sections/About';
import Project from './components/sections/Project';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/navigaiton/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 w-full overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <main className="w-full text-gray-100">
        <div className="max-w-[100vw]">
          <Hero />
          <About />
          <Project />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}