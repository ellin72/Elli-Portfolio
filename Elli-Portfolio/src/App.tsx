import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

// TODO: Replace with actual navigation items
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar navItems={navItems} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
