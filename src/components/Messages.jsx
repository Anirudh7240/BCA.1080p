import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const messages = [
  { id: 1, text: "These four years flew by so fast. I'll never forget the late night cramming sessions and the endless cups of coffee. You guys are the best!", author: "Arjun S." },
  { id: 2, text: "From the moment we met in the orientation, I knew this batch was special. Can't wait to see what everyone achieves in the future.", author: "Priya P." },
  { id: 3, text: "Who knew that a random group of students would become family? Thanks for all the trips, the laughs, and the memories.", author: "Rahul V." },
  { id: 4, text: "I'll miss the canteen samosas, but I'll miss you all even more. Cheers to the class of '26!", author: "Neha S." },
];

const Messages = () => {
  return (
    <section id="messages" className="py-24 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-widest text-glow mb-4">TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-xl relative hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <p className="text-lg text-white/80 leading-relaxed mb-6 italic relative z-10">"{msg.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center border border-white/20">
                  <span className="font-bold text-white text-sm">{msg.author.charAt(0)}</span>
                </div>
                <span className="font-cinematic tracking-wider text-white bg-clip-text font-bold">{msg.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
            Write a Message
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Messages;
