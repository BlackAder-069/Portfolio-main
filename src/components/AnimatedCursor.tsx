
import React, { useState, useEffect } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHoverStart);
    document.addEventListener('mouseout', handleLinkHoverEnd);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHoverStart);
      document.removeEventListener('mouseout', handleLinkHoverEnd);
    };
  }, []);

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  const cursorSize = clicked ? 20 : linkHovered ? 30 : 24;
  const cursorOpacity = hidden ? 0 : 1;

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-[999] rounded-full transition-transform duration-200 will-change-transform ${linkHovered ? 'mix-blend-difference' : ''}`}
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: `translate(${position.x - cursorSize / 2}px, ${position.y - cursorSize / 2}px)`,
          backgroundColor: linkHovered ? '#fff' : 'transparent',
          border: linkHovered ? 'none' : '2px solid rgba(255, 255, 255, 0.5)',
          opacity: cursorOpacity
        }}
      />
      
      <div 
        className="fixed pointer-events-none z-[998] rounded-full bg-primary/30 blur-sm will-change-transform"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          opacity: cursorOpacity
        }}
      />
    </>
  );
};

export default AnimatedCursor;
