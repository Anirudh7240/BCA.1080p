import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // slight delay after reaching 100
          return 100;
        }
        return prev + 2; // speed of loading
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-6xl font-cinematic text-white text-glow mb-8 tracking-widest text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A CINEMATIC JOURNEY
        </motion.h1>
        
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-white text-glow"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
        
        <motion.p 
          className="mt-4 text-white/50 font-sans tracking-widest text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}% 
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
