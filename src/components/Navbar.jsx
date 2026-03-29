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
    { name: 'Batch', href: '#members' },
    { name: 'Messages', href: '#messages' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="text-xl md:text-2xl font-cinematic font-bold text-white tracking-widest text-glow z-10 w-1/3">
        BCA.1080P
      </div>

      {/* Centered Instagram Link (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 justify-center items-center z-10 w-1/3">
        <a 
          href="https://www.instagram.com/bca.1080p?igsh=MW1ubnhnc3U2bWNlbg==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-white/80 hover:text-white hover:scale-105 transition-all text-sm tracking-widest"
        >
          <img src="/instagram.png" alt="Insta" className="w-5 h-5 mr-2 object-contain" />
          <span>@bca.1080p</span>
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-end space-x-8 z-10 w-1/3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
        
        {/* Playlist Controls */}
        <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors">
            <SkipBack size={16} />
          </button>
          
          <button 
            onClick={toggleMusic}
            className="text-white hover:scale-110 transition-transform"
          >
            {isMusicPlaying ? <Music size={18} /> : <Music4 size={18} className="opacity-50" />}
          </button>

          <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors">
            <SkipForward size={16} />
          </button>

          <span className="text-xs text-white/50 tracking-widest uppercase ml-2 w-16 truncate">
            {currentSong.title}
          </span>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <button onClick={prevSong} className="text-white/70">
            <SkipBack size={14} />
          </button>
          <button onClick={toggleMusic} className="text-white">
            {isMusicPlaying ? <Music size={16} /> : <Music4 size={16} className="opacity-50" />}
          </button>
          <button onClick={nextSong} className="text-white/70">
            <SkipForward size={14} />
          </button>
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
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
