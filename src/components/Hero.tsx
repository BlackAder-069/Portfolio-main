import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-blue-400/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-2 opacity-0 animate-slide-up animate-delay-100">
            <p className="text-primary inline-block py-1 px-3 rounded-full text-sm font-semibold tracking-wide bg-primary/10 border border-primary/20">
              Computer Science Student
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tighter opacity-0 animate-slide-up animate-delay-200">
            <span className="block">Hi, I'm</span>
            <span className="gradient-text text-glow">Pranav Jigalur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-300">
            I create cutting-edge digital experiences that blend creativity with technical precision, bringing innovative ideas to life through clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-slide-up animate-delay-400">
            <a 
              href="#projects" 
              className="btn-glow relative group px-8 py-3 rounded-lg bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-foreground font-medium border border-white/10 hover:bg-secondary/80 transition-all duration-300"
              
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex space-x-5 mt-8 opacity-0 animate-slide-up animate-delay-500">
            <a href="https://github.com/BlackAder-069" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pranav-jigalur-284220244/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/pranav_069" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="mailto:pranav.jigalur@gmail.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
