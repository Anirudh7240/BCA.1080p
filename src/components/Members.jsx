import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { id: 2, name: "Adil V.P", role: "Roll No. 2", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 3, name: "Hadi Mohammed", role: "Roll No. 3", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 4, name: "Hafiz Nazar", role: "Roll No. 4", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 5, name: "Hamza Abdul Majeed", role: "Roll No. 5", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 6, name: "Mohammed Shafeeq", role: "Roll No. 6", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 7, name: "Muhammed Faras", role: "Roll No. 7", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 8, name: "Muhammed Shamil K.P", role: "Roll No. 8", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 9, name: "Muhammed Sinan", role: "Roll No. 9", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 11, name: "Ameena Saban", role: "Roll No. 11", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 12, name: "Fathima Dilshana", role: "Roll No. 12", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 13, name: "Fathima Nadha", role: "Roll No. 13", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 14, name: "Fidha Farha", role: "Roll No. 14", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 15, name: "Hameesha Parveen", role: "Roll No. 15", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 16, name: "Hisa Fathima", role: "Roll No. 16", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 17, name: "Hisana", role: "Roll No. 17", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 18, name: "Kadeeja Nidha", role: "Roll No. 18", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 19, name: "Raneen", role: "Roll No. 19", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 20, name: "Shamila", role: "Roll No. 20", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 21, name: "Shamsia", role: "Roll No. 21", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 22, name: "Shifana Shefri", role: "Roll No. 22", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 23, name: "Swaliha Mol", role: "Roll No. 23", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 24, name: "Adhish", role: "Roll No. 24", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 25, name: "Anirudh", role: "Roll No. 25", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 26, name: "Ishal Ahmmed", role: "Roll No. 26", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 27, name: "Jaganraj", role: "Roll No. 27", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 28, name: "Mohammed Shinas", role: "Roll No. 28", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 29, name: "Mohammed Rahil", role: "Roll No. 29", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 30, name: "Sreehari", role: "Roll No. 30", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 31, name: "Vishnu", role: "Roll No. 31", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 32, name: "Dilna Sherin", role: "Roll No. 32", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 33, name: "Dilsha", role: "Roll No. 33", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 34, name: "Fidha Rasheed", role: "Roll No. 34", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 35, name: "Prathyusha", role: "Roll No. 35", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 36, name: "Riya", role: "Roll No. 36", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 37, name: "Amil Ahsan", role: "Roll No. 37", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 38, name: "Anantha Narayanan", role: "Roll No. 38", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 39, name: "Asif", role: "Roll No. 39", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 40, name: "Mohammed Jilshad", role: "Roll No. 40", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 41, name: "Mohammed Rajwan", role: "Roll No. 41", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 42, name: "Mohammed Shamil K", role: "Roll No. 42", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 43, name: "Muhammed Salim", role: "Roll No. 43", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 44, name: "Hari", role: "Roll No. 44", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 45, name: "Revanth", role: "Roll No. 45", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { id: 46, name: "Afnan", role: "Roll No. 46", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 47, name: "Ashtami", role: "Roll No. 47", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
  { id: 48, name: "Hiba Nourin", role: "Roll No. 48", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: 49, name: "Janna Sherin", role: "Roll No. 49", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 50, name: "Jeslin", role: "Roll No. 50", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  { id: 51, name: "Sahda", role: "Roll No. 51", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  { id: 52, name: "Sanusha", role: "Roll No. 52", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" },
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
