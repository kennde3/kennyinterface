"use client"
import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects'];
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const { id, element } of sectionElements) {
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}