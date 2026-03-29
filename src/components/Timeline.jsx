import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const journeys = [
  {
    year: "2023",
    title: "1st Year Onam",
    image: "/1ST YEAR ONAM.jpg"
  },
  {
    year: "2023",
    title: "1st Year Christmas",
    image: "/1ST XMAS.jpg"
  },
  {
    year: "2024",
    title: "1st Year Ethnic Day",
    image: "/1ST ETHNIC.jpg"
  },
  {
    year: "2024",
    title: "1st Year Iftar",
    image: "/1ST YEAR IFTAR.jpg"
  },
  {
    year: "2024",
    title: "2nd Year Onam",
    image: "/2ND ONAM.jpg"
  },
  {
    year: "2024",
    title: "2nd Year Christmas",
    image: "/2ND XMAS.jpg"
  },
  {
    year: "2025",
    title: "2nd Year Ethnic",
    image: "/2ND ETHNIC.jpg"
  },
  {
    year: "2025",
    title: "3rd Year Onam",
    image: "/3RD ONAM.jpg"
  },
  {
    year: "2026",
    title: "3rd Year Ethnic Day",
    image: "/3RD ETHNIC.jpg"
  },
  {
    year: "2026",
    title: "3rd Year Iftar",
    image: "/3RD YEAR IFTAR.jpg"
  }
];

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % journeys.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? journeys.length - 1 : prev - 1));
  };

  const current = journeys[currentIndex];

  return (
    <section id="timeline" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-widest text-glow mb-4">OUR JOURNEY</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="text-white/50 tracking-widest uppercase text-sm">{currentIndex + 1} / {journeys.length}</p>
        </motion.div>

        <div className="relative group mx-auto max-w-5xl">
          {/* Main Display Area */}
          <div className="relative w-full aspect-[4/3] md:aspect-video md:h-[600px] rounded-2xl overflow-hidden glass shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-cinematic font-bold text-white/20 block mb-2"
                  >
                    {current.year}
                  </motion.span>
                  
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-glow"
                  >
                    {current.title}
                  </motion.h3>
                  

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 md:-left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-white hover:text-black rounded-full transition-all text-white z-20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 md:-right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-white hover:text-black rounded-full transition-all text-white z-20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
