import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ZoomIn, X } from 'lucide-react';
import ImageLoader from './ImageLoader';

const Hero = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Placeholder for actual background image/video. Using a gradient for cinematic feel. */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black z-0"></div>
        {/* Landing Page Photo: Clickable to view full uncropped photo */}
        <div className="absolute inset-0 cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
          <ImageLoader 
            src="/LANDING-PAGE.webp" 
            alt="Batch Memory" 
            className="w-full h-full object-cover opacity-80"
            wrapperClassName="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 font-sans tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
        >
          From Strangers to Family
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-8xl font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8 tracking-widest leading-tight text-glow"
        >
          BCA.1080P
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Three years, countless memories, one unforgettable journey. 
          This is our story.
        </motion.p>

        {/* View Full Photo Button */}
        <motion.button
          onClick={() => setIsLightboxOpen(true)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs text-white tracking-widest uppercase transition-all duration-300 transform hover:scale-105 backdrop-blur-md cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <ZoomIn size={14} />
          View Full Photo
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-12 z-20 flex flex-col items-center"
      >
        <p className="text-white/50 text-xs tracking-[0.2em] mb-4 uppercase">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/70" size={24} />
        </motion.div>
      </motion.div>
      {/* Full Photo Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                aria-label="Close fullscreen"
              >
                <X size={32} />
              </button>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[80vh] w-full flex justify-center bg-black/50">
                <img 
                  src="/LANDING-PAGE.webp" 
                  alt="Batch Memory Full" 
                  className="w-full h-full object-contain max-h-[80vh] block" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
