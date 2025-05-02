"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

const MultiFollowCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Number of trailing cursors
  const cursorCount = 8;
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseDown = () => {
      setIsClicked(true);
    };
    
    const handleMouseUp = () => {
      setIsClicked(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);
  
  // Generate colors for the cursor trail
  const getColor = (index: number) => {
    const colors = [
      "rgba(255, 105, 180, 0.8)", // Hot pink
      "rgba(147, 112, 219, 0.8)", // Purple
      "rgba(64, 224, 208, 0.8)",  // Turquoise
      "rgba(50, 205, 50, 0.8)",   // Lime green
      "rgba(255, 215, 0, 0.8)",   // Gold
      "rgba(255, 127, 80, 0.8)",  // Coral
      "rgba(70, 130, 180, 0.8)",  // Steel blue
      "rgba(255, 69, 0, 0.8)",    // Red-orange
    ];
    return colors[index % colors.length];
  };
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="cursor-main"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isClicked ? 15 : 20,
          height: isClicked ? 15 : 20,
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: 'transparent',
          zIndex: 10000,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - (isClicked ? 7.5 : 10),
          y: mousePosition.y - (isClicked ? 7.5 : 10),
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.3,
        }}
        initial={false}
      />
      
      {/* Trailing cursors */}
      {Array.from({ length: cursorCount }).map((_, index) => {
        const size = Math.max(5, 18 - index * 1.5);
        const angle = (index / cursorCount) * Math.PI * 2;
        const orbitRadius = isClicked ? 10 : 0;
        
        return (
          <motion.div
            key={index}
            className="cursor-follower"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: getColor(index),
              zIndex: 9999 - index,
              pointerEvents: 'none',
              boxShadow: `0 0 10px ${getColor(index)}`,
            }}
            animate={{
              x: mousePosition.x - (size / 2) + Math.cos(angle) * orbitRadius,
              y: mousePosition.y - (size / 2) + Math.sin(angle) * orbitRadius,
              opacity: isVisible ? 0.8 - (index * 0.08) : 0,
              scale: isClicked ? 1.2 : 1,
            }}
            transition={{
              type: 'spring',
              damping: 20 + index * 2,
              stiffness: 300 - index * 20,
              mass: 0.5 + index * 0.1,
              delay: index * 0.02,
            }}
            initial={false}
          />
        );
      })}
    </>
  );
};

export default MultiFollowCursor;