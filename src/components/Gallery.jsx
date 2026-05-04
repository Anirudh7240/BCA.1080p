import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 10, src: "/1ST ETHNIC.jpg", title: "1st Year Ethnic Day" },
  { id: 11, src: "/1ST XMAS.jpg", title: "1st Year Xmas" },
  { id: 12, src: "/1ST YEAR IFTAR.jpg", title: "1st Year Iftar" },
  { id: 13, src: "/1ST YEAR ONAM.jpg", title: "1st Year Onam" },
  { id: 14, src: "/2ND ETHNIC.jpg", title: "2nd Year Ethnic Day" },
  { id: 15, src: "/2ND ONAM.jpg", title: "2nd Year Onam" },
  { id: 16, src: "/2ND XMAS.jpg", title: "2nd Year Xmas" },
  { id: 17, src: "/2ND iFTAR.jpg", title: "2nd Year Iftar" },
  { id: 18, src: "/3RD ETHNIC.jpg", title: "3rd Year Ethnic Day" },
  { id: 19, src: "/3RD ONAM.jpg", title: "3rd Year Onam" },
  { id: 20, src: "/3RD XMAS.jpeg", title: "3rd Year Xmas" },
  { id: 21, src: "/3RD YEAR IFTAR.jpg", title: "3rd Year Iftar" },
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-widest text-glow mb-4">MEMORIES</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              layoutId={`card-${img.id}`}
              onClick={() => setSelectedId(img)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl glass break-inside-avoid mb-4`}
            >
              <img src={img.src} alt={img.title || "Memory"} className="w-full aspect-square object-cover transition-all duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex justify-end items-center w-full">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://drive.google.com/drive/folders/1A7UC5FbepdaFARkMke1LXok4Akcf2kmd?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-sans tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <img src="/vecteezy_google-drive-icons_17395378.png" alt="Google Drive" className="w-6 h-6 object-contain" />
            View More on Google Drive
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] glass rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <img src={selectedId.src} alt="Memory" className="w-full h-auto max-h-[90vh] object-contain block" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
