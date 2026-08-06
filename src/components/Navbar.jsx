import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Music4, Menu, X, SkipBack, SkipForward } from 'lucide-react';

const Navbar = ({ toggleMusic, isMusicPlaying, nextSong, prevSong, currentSong }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '#timeline' },
    { name: 'Memories', href: '#gallery' },
    { name: 'Batch', href: '#members' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 px-4 md:px-6 py-4 flex items-center justify-between ${
        scrolled ? 'glass py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="text-lg sm:text-xl md:text-2xl font-cinematic font-bold text-white tracking-widest text-glow z-10 w-auto md:w-1/3 whitespace-nowrap">
        BCA.1080P
      </div>

      {/* Desktop Menu Wrapper */}
      <div className="hidden xl:flex flex-1 items-center justify-between ml-8 z-10">
        
        {/* Center: Instagram Links */}
        <div className="flex flex-1 justify-center items-center gap-6">
          <a 
            href="https://www.instagram.com/bca.1080p?igsh=MW1ubnhnc3U2bWNlbg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white/80 hover:text-white transition-all text-sm tracking-widest"
          >
            <img src="/instagram.png" alt="Insta" className="w-5 h-5 mr-2 object-contain" />
            <span>@bca.1080p</span>
          </a>
          <a 
            href="https://www.instagram.com/kann.bca?igsh=NHBzYmkxMWpzcG9j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white/80 hover:text-white transition-all text-sm tracking-widest"
          >
            <img src="/instagram.png" alt="Insta" className="w-5 h-5 mr-2 object-contain" />
            <span>@kann.bca</span>
          </a>
        </div>

        {/* Right: Nav Links + Music */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-widest whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          
          {/* Experience Reminder */}
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] text-white/50 tracking-wider uppercase font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5 animate-pulse">
            🎧 Play music to experience
          </span>

          {/* Playlist Controls */}
          <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
            <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors">
              <SkipBack size={16} />
            </button>
            <button onClick={toggleMusic} className="text-white hover:scale-110 transition-transform">
              {isMusicPlaying ? <Music size={18} /> : <Music4 size={18} className="opacity-50" />}
            </button>
            <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors">
              <SkipForward size={16} />
            </button>
            <span 
              className="text-xs text-white/70 tracking-widest uppercase ml-2 max-w-[180px] truncate flex-shrink-0"
              title={currentSong.title}
            >
              {currentSong.title}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center gap-2 sm:gap-4">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-white/5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
            <button onClick={prevSong} className="text-white/70">
              <SkipBack size={14} />
            </button>
            <button onClick={toggleMusic} className="text-white">
              {isMusicPlaying ? <Music size={14} className="sm:w-4 sm:h-4" /> : <Music4 size={14} className="opacity-50 sm:w-4 sm:h-4" />}
            </button>
            <button onClick={nextSong} className="text-white/70">
              <SkipForward size={14} />
            </button>
          </div>
          <span 
            className="text-[9px] text-white/55 tracking-wider uppercase max-w-[100px] truncate text-right block"
            title={currentSong.title}
          >
            {currentSong.title}
          </span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-4 md:hidden"
        >
          {/* Mobile Experience Reminder */}
          <div className="text-[10px] text-white/60 tracking-widest uppercase text-center border-b border-white/5 pb-3 w-4/5 animate-pulse flex items-center justify-center gap-1.5">
            🎧 Play music for the best experience
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex flex-col items-center gap-3 mt-2 pt-4 border-t border-white/10 w-2/3">
            <a 
              href="https://www.instagram.com/bca.1080p?igsh=MW1ubnhnc3U2bWNlbg==" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-white/80 hover:text-white transition-colors justify-center text-sm tracking-widest"
            >
              <img src="/instagram.png" alt="Insta" className="w-5 h-5 mr-2 object-contain" />
              <span>@bca.1080p</span>
            </a>
            <a 
              href="https://www.instagram.com/kann.bca?igsh=NHBzYmkxMWpzcG9j" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-white/80 hover:text-white transition-colors justify-center text-sm tracking-widest"
            >
              <img src="/instagram.png" alt="Insta" className="w-5 h-5 mr-2 object-contain" />
              <span>@kann.bca</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
