"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { poppins } from '../fonts';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const increment = Math.random() * 10;
          const newProgress = Math.min(prev + increment, 100);
          
          if (newProgress === 100) {
            setTimeout(() => {
              onComplete();
            }, 500);
          }
          
          return newProgress;
        });
      }
    }, 150);
    
    return () => clearTimeout(timer);
  }, [progress, onComplete]);
  
  return (
    <div className={`fixed inset-0 bg-[#0a192f] flex flex-col items-center justify-center z-50 ${poppins.className}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-[#64ffda] text-4xl md:text-6xl font-bold mb-8">Kenny NIYONSHUTI</h1>
        <div className="w-64 md:w-96 h-2 bg-[#112240] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#64ffda]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <p className="text-[#8892b0] mt-4 text-sm md:text-base">
          Loading experience... {Math.round(progress)}%
        </p>
        
        <div className="mt-8 text-[#8892b0] text-xs md:text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Building exceptional digital experiences...
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}