
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <a href="#" className="text-2xl font-bold gradient-text">PORTFOLIO.</a>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-2xl">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-foreground/70">
            <span>&copy; {currentYear} Pranav Jigalur</span>
            <span>Built with</span> 
            <Heart className="h-4 w-4 text-destructive animate-pulse" />
            <span>using React & Tailwind CSS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
