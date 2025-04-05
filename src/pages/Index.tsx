
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  // Add scroll reveal effect for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const navLink = document.querySelector(`a[href="#${id}"]`);
          
          if (navLink) {
            document.querySelectorAll('nav a').forEach((link) => {
              link.classList.remove('text-primary');
              link.classList.add('text-foreground/80');
            });
            
            navLink.classList.remove('text-foreground/80');
            navLink.classList.add('text-primary');
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-background">
      <AnimatedCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
