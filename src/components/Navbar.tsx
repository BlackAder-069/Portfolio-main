
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">PORTFOLIO.</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide relative text-foreground/80 hover:text-foreground transition-colors duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium px-4 py-2 hover:bg-secondary/50 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
