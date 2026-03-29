import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", title: "Campus Vibing", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", title: "Late Night Coding", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", title: "The Fest", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1525926578051-7b0037eb965a?q=80&w=2070&auto=format&fit=crop", title: "Graduation Setup", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9ee5b?q=80&w=2073&auto=format&fit=crop", title: "Library Hangs", colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-2" },
  { id: 6, src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop", title: "Canteen Memories", colSpan: "col-span-1", rowSpan: "row-span-1" },
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

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-4 gap-4 auto-rows-[250px]">
          {images.map((img) => (
            <motion.div
              key={img.id}
              layoutId={`card-${img.id}`}
              onClick={() => setSelectedId(img)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${img.colSpan} ${img.rowSpan} glass`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div className="flex justify-between items-center w-full">
                  <span className="text-white font-sans tracking-wider">{img.title}</span>
                  <ZoomIn className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              <img src={selectedId.src} alt={selectedId.title} className="w-full h-auto max-h-[85vh] object-contain block" />
              <div className="p-6 bg-black text-center">
                <h3 className="text-2xl font-cinematic font-bold text-white tracking-widest">{selectedId.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
