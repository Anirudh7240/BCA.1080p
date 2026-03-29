import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const { scrollYProgress } = useScroll();
  // Animate the footer elements as you reach the bottom
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <motion.footer 
      style={{ y, opacity }}
      className="bg-black py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]"
    >
      {/* Cinematic End Screen */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-white/50 tracking-[0.3em] uppercase mb-4 text-sm"
        >
          Directed By Time
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-12 tracking-widest text-glow"
        >
          THE END
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-4 text-white/70"
        >
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm md:text-base">
            <div className="text-right uppercase tracking-widest font-bold">Starring</div>
            <div className="text-left font-sans">BCA.1080P</div>
            
            <div className="text-right uppercase tracking-widest font-bold">Location</div>
            <div className="text-left font-sans">Campus Library & Canteen</div>

            <div className="text-right uppercase tracking-widest font-bold">Instagram</div>
            <div className="text-left font-sans">
              <a href="https://instagram.com/bca.1080p" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
                @bca.1080p
              </a>
            </div>
            
            <div className="text-right uppercase tracking-widest font-bold">Special Thanks</div>
            <div className="text-left font-sans">Professors, Maggi points, WiFi</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-24 text-white/40 text-xs tracking-widest"
        >
          &copy; {new Date().getFullYear()} BCA.1080P. Follow us <a href="https://instagram.com/bca.1080p" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">@bca.1080p</a>. Made with ❤️ and nostalgic tears.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
