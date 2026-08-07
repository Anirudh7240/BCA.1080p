import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ImageLoader from './ImageLoader';

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
    title: "1st Year Ethnic",
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
    title: "2nd Year Iftar",
    image: "/2ND iFTAR.jpg"
  },
  {
    year: "2025",
    title: "3rd Year Onam",
    image: "/3RD ONAM.jpg"
  },
  {
    year: "2025",
    title: "3rd Year Christmas",
    image: "/3RD XMAS.jpeg?v=2"
  },
  {
    year: "2026",
    title: "3rd Year Ethnic",
    image: "/3RD ETHNIC.jpg"
  },
  {
    year: "2026",
    title: "3rd Year Iftar",
    image: "/3RD YEAR IFTAR.jpg"
  }
];

const TimelineItem = ({ item, index, onSelect }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative mb-16 md:mb-32 flex justify-start md:justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block md:w-[45%]"></div>
      
      {/* Node styling */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="z-20 flex items-center absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-[0_0_15px_rgba(255,255,255,0.4)] w-5 h-5 md:w-8 md:h-8 rounded-full border-[3px] md:border-4 border-white"
      >
        <div className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] bg-white rounded-full animate-pulse m-auto"></div>
      </motion.div>
      
      {/* Content box */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`glass rounded-2xl shadow-2xl p-4 md:p-6 w-[calc(100%-60px)] md:w-[45%] ml-[60px] md:ml-0`}
      >
        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
          <span className="text-xl md:text-2xl font-cinematic font-bold text-white/40 block mb-1">{item.year}</span>
          <h3 className={`text-xl md:text-3xl font-bold text-white mb-4 tracking-wide text-glow text-left ${isEven ? 'md:text-right' : 'md:text-left'}`}>{item.title}</h3>
        </div>
        
        <div 
          className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden mt-2 group shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => onSelect(item)}
        >
          <ImageLoader 
            src={item.image.replace(/\.(jpg|jpeg|png)(\?.*)?$/i, '.webp')} 
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.position ? 'object-' + item.position : 'object-center'}`}
            wrapperClassName="w-full h-full"
            zoomEnabled={true}
            zoomOnClick={false}
            zoomOnHover={true}
            zoomScale={1.15}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 backdrop-blur-[1px]">
             <div className="flex items-center gap-3 bg-black/40 px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
               <ZoomIn className="text-white" size={20} />
               <span className="text-white uppercase tracking-widest text-sm font-medium">Preview</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="timeline" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-widest text-glow mb-4">OUR JOURNEY</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full w-full bg-white/60"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <div className="relative container mx-auto px-2 md:px-0">
          {/* Vertical line through the center */}
          <div className="absolute w-[3px] bg-white/20 h-full left-[30px] md:left-1/2 transform -translate-x-1/2 top-0 z-0"></div>
          
          <div className="relative z-10 w-full pb-10">
            {journeys.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} onSelect={setSelectedImage} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 z-10 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Close fullscreen"
              >
                <X size={32} />
              </button>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl glass border border-white/10 max-h-[85vh] w-full flex justify-center bg-black/50">
                <ImageLoader 
                  src={selectedImage.image.replace(/\.(jpg|jpeg|png)(\?.*)?$/i, '.webp')} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-contain max-h-[85vh] block" 
                  wrapperClassName="w-full h-full flex justify-center"
                  zoomEnabled={true}
                  zoomOnClick={true}
                  zoomOnHover={true}
                  zoomScale={2.5}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent text-center">
                  <span className="text-sm md:text-md font-sans text-white/60 mb-1 block uppercase tracking-widest">{selectedImage.year}</span>
                  <h3 className="text-2xl md:text-4xl font-cinematic font-bold text-white tracking-widest text-glow">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;
