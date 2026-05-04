import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { id: 2, name: "Adil V.P", role: "Roll No. 2", image: "/Adil.jpg" },
  { id: 3, name: "Hadi Mohammed", role: "Roll No. 3", image: "/Hadi.jpg" },
  { id: 4, name: "Hafiz Nazar", role: "Roll No. 4", image: "/Hafiz.jpg" },
  { id: 5, name: "Hamza Abdul Majeed", role: "Roll No. 5", image: "/Hamza.jpg" },
  { id: 6, name: "Mohammed Shafeeq", role: "Roll No. 6", image: "/Shafeeq.jpg" },
  { id: 7, name: "Muhammed Faras", role: "Roll No. 7", image: "/Faraz.jpg" },
  { id: 8, name: "Muhammed Shamil K.P", role: "Roll No. 8", image: "/Shamil k p.jpg" },
  { id: 9, name: "Muhammed Sinan", role: "Roll No. 9", image: "/sinan.jpg" },
  { id: 11, name: "Ameena Saban", role: "Roll No. 11", image: "/Ameena.jpg" },
  { id: 12, name: "Fathima Dilshana", role: "Roll No. 12", image: "/Dilshana.jpg" },
  { id: 13, name: "Fathima Nadha", role: "Roll No. 13", image: "/Nadha.jpg" },
  { id: 14, name: "Fidha Farha", role: "Roll No. 14", image: "/Fidha Farha.jpg" },
  { id: 15, name: "Hameesha Parveen", role: "Roll No. 15", image: "/Hameesha.jpg" },
  { id: 16, name: "Hisa Fathima", role: "Roll No. 16", image: "/Hisa.jpg" },
  { id: 17, name: "Hisana", role: "Roll No. 17", image: "/Hisana.jpg" },
  { id: 18, name: "Kadeeja Nidha", role: "Roll No. 18", image: "/Nidha.jpg" },
  { id: 19, name: "Raneen", role: "Roll No. 19", image: "/Raneen.jpg" },
  { id: 20, name: "Shamila", role: "Roll No. 20", image: "/Shamila.jpg" },
  { id: 21, name: "Shamsia", role: "Roll No. 21", image: "/Shamsia.jpg" },
  { id: 22, name: "Shifana Shefri", role: "Roll No. 22", image: "/Shifana.jpg" },
  { id: 23, name: "Swaliha Mol", role: "Roll No. 23", image: "/Swaliha.jpg" },
  { id: 24, name: "Adhish", role: "Roll No. 24", image: "/Adhish.jpg" },
  { id: 25, name: "Anirudh", role: "Roll No. 25", image: "/Anirudh.jpg" },
  { id: 26, name: "Ishal Ahmmed", role: "Roll No. 26", image: "/Ishal.jpg" },
  { id: 27, name: "Jaganraj", role: "Roll No. 27", image: "/Jagan.jpg" },
  { id: 28, name: "Mohammed Shinas", role: "Roll No. 28", image: "/Shinas.jpg" },
  { id: 29, name: "Mohammed Rahil", role: "Roll No. 29", image: "/Rahil.jpg" },
  { id: 30, name: "Sreehari", role: "Roll No. 30", image: "/Sreehari.jpg" },
  { id: 31, name: "Vishnu", role: "Roll No. 31", image: "/Vishnu.jpg" },
  { id: 32, name: "Dilna Sherin", role: "Roll No. 32", image: "/Dilna.jpg" },
  { id: 33, name: "Dilsha", role: "Roll No. 33", image: "/Dilsha.jpg" },
  { id: 34, name: "Fidha Rasheed", role: "Roll No. 34", image: "/Fidha rasheed.jpg" },
  { id: 35, name: "Prathyusha", role: "Roll No. 35", image: "/Prathyusha.jpg" },
  { id: 36, name: "Riya", role: "Roll No. 36", image: "/Riya.jpg" },
  { id: 37, name: "Amil Ahsan", role: "Roll No. 37", image: "/Amil.jpg" },
  { id: 38, name: "Anantha Narayanan", role: "Roll No. 38", image: "/Ananthu.jpg" },
  { id: 39, name: "Asif", role: "Roll No. 39", image: "/Asif.jpg" },
  { id: 40, name: "Mohammed Jilshad", role: "Roll No. 40", image: "/Jilshad.jpg" },
  { id: 41, name: "Mohammed Rajwan", role: "Roll No. 41", image: "/Rajwan.jpg" },
  { id: 42, name: "Mohammed Shamil K", role: "Roll No. 42", image: "/Shamil k.jpg" },
  { id: 43, name: "Muhammed Salim", role: "Roll No. 43", image: "/Salim.jpg" },
  { id: 44, name: "Hari", role: "Roll No. 44", image: "/Hari.jpg" },
  { id: 45, name: "Revanth", role: "Roll No. 45", image: "/Revanth.jpg" },
  { id: 46, name: "Afnan", role: "Roll No. 46", image: "/Afnan.jpg" },
  { id: 47, name: "Ashtami", role: "Roll No. 47", image: "/Ashtami.jpg" },
  { id: 48, name: "Hiba Nourin", role: "Roll No. 48", image: "/Hiba.jpg" },
  { id: 49, name: "Janna Sherin", role: "Roll No. 49", image: "/Janna.jpg" },
  { id: 50, name: "Jeslin", role: "Roll No. 50", image: "/Jeslin.jpg" },
  { id: 51, name: "Sahda", role: "Roll No. 51", image: "/Sahda.jpg" },
  { id: 52, name: "Sanusha", role: "Roll No. 52", image: "/Sanusha.jpg" },
];

const Members = () => {
  return (
    <section id="members" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white tracking-widest text-glow mb-4">THE BATCH</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="text-white/50 max-w-2xl mx-auto">The people who made these three years unforgettable. From all-nighters to incredible successes.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:border-white/30 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-1 border border-white/20 group-hover:border-white/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-1">{member.name}</h3>
              <p className="text-sm text-white/50 uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
