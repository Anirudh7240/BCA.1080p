import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Footer from './components/Footer';

const playlist = [
  { id: 1, title: "Track 1", src: "/track1.mp3" },
  { id: 2, title: "Track 2", src: "/track2.mp3" },
  { id: 3, title: "Track 3", src: "/track3.mp3" },
];

function App() {
  const [loading, setLoading] = React.useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const audioRef = React.useRef(null);

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
        <LoadingScreen onComplete={() => setLoading(false)} />
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
        </>
      )}
    </div>
  );
}

export default App;
