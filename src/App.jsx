import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Footer from './components/Footer';

const playlist = [
  { id: 1, title: "He Will Never Leave Me Alone", src: "/He-will-never-Leave-Me-alone-MassTamilan.dev.mp3" },
  { id: 2, title: "Please Don't Forget Me", src: "/Please-Don't-Forget-Me-MassTamilan.dev.mp3" },
  { id: 3, title: "Dude Orchestral Suite", src: "/Dude-Orchestral-Suite-MassTamilan.dev.mp3" },
  { id: 4, title: "Last 7 Minutes", src: "/Last-7-Minutes-MassTamilan.dev.mp3" },
  { id: 5, title: "The Metro Proposal", src: "/The-Metro-Proposal-MassTamilan.dev.mp3" },
  { id: 6, title: "Kunjikkavil Meghame", src: "/Kunjikkavil Meghame.mp3" },
  { id: 7, title: "Maayajalame", src: "/Maayajalame.mp3" },
  { id: 8, title: "Iniyum Kaanan Varam", src: "/Iniyum Kaanan Varam.mp3" },
];

function App() {
  const [loading, setLoading] = React.useState(true);
  const [showSoundPopup, setShowSoundPopup] = React.useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const audioRef = React.useRef(null);

  const handleLoadingComplete = () => {
    setLoading(false);
    setShowSoundPopup(true);
  };

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        // Use a small timeout to allow the audio source to update before playing
        setTimeout(() => {
          audioRef.current?.play().catch(e => console.error("Audio playback failed", e));
        }, 50);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, currentSongIndex]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar 
            toggleMusic={toggleMusic} 
            isMusicPlaying={isMusicPlaying} 
            nextSong={nextSong}
            prevSong={prevSong}
            currentSong={playlist[currentSongIndex]}
          />
          
          <main>
            <Hero />
            <Timeline />
            <Gallery />
            <Members />
          </main>
          <Footer />
          <audio ref={audioRef} onEnded={nextSong} preload="auto" src={playlist[currentSongIndex].src}>
          </audio>

          <AnimatePresence>
            {showSoundPopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                  className="max-w-md w-full glass p-8 rounded-2xl text-center shadow-2xl border border-white/10 relative overflow-hidden"
                >
                  {/* Decorative background glow */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-glow shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Volume2 size={32} className="animate-bounce" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-cinematic font-bold text-white tracking-widest text-glow mb-4 uppercase">
                    Best Experienced With Sound
                  </h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-sans">
                    This website features a custom soundtrack dedicated to our batch. We recommend turning on the music to experience the journey fully.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setIsMusicPlaying(true);
                        setShowSoundPopup(false);
                      }}
                      className="px-6 py-3 bg-white text-black hover:bg-white/90 rounded-full font-sans tracking-widest uppercase text-xs font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Volume2 size={14} />
                      Play & Enter
                    </button>
                    <button
                      onClick={() => {
                        setShowSoundPopup(false);
                      }}
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white rounded-full font-sans tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <VolumeX size={14} />
                      Enter Silent
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
