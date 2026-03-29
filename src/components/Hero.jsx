import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Placeholder for actual background image/video. Using a gradient for cinematic feel. */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black z-0"></div>
        {/* Landing Page Photo: Change the src below to your photo's URL or put your photo in the public folder and use '/your-photo.jpg' */}
        <img 
          src="/LANDING-PAGE.jpg" 
          alt="Batch Memory" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/70 font-sans tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
        >
          From Strangers to Family
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-8xl font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-8 tracking-widest leading-tight text-glow"
        >
          BCA.1080P
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Three years, countless memories, one unforgettable journey. 
          This is our story.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
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
    </section>
  );
};

export default Hero;
