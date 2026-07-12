import { useState } from "react";
import { motion } from "motion/react";
import { MotifTenunBackground, BungaSimetri, MotifPucukRebung } from "./Ornaments";
import { Images } from "lucide-react";

const IMAGES = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg",
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.png?v=1",
  "/gallery/13.png?v=1",
  "/gallery/14.png?v=1",
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedImages = isExpanded ? IMAGES : IMAGES.slice(0, 4);

  return (
    <section className="py-24 px-6 bg-emerald-50 text-emerald-950 text-center relative overflow-hidden transition-all duration-1000">
      <MotifTenunBackground opacity="0.05" />
      
      <div className="absolute top-0 w-full z-10 left-0">
        <MotifPucukRebung position="top" className="text-emerald-900 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center"
        >
          <BungaSimetri className="w-10 h-10 mb-6 text-emerald-800" />
          <h2 className="font-cursive text-6xl text-amber-500 mb-4 drop-shadow-sm">Galeri Cinta</h2>
          <p className="font-sans text-emerald-700 leading-relaxed text-sm md:text-base uppercase tracking-widest font-medium">
            Momen Bahagia Kami
          </p>
        </motion.div>

        <div className={`columns-1 sm:columns-2 ${isExpanded ? 'md:columns-3 lg:columns-4' : 'max-w-3xl'} gap-6 space-y-6 w-full transition-all duration-1000 relative`}>
          {displayedImages.map((src, idx) => (
            <div key={src} className="break-inside-avoid relative" style={{ perspective: "1500px" }}>
              <motion.div
                initial={{ 
                  opacity: 0, 
                  y: 150, 
                  rotateX: 60, 
                  rotateY: idx % 2 === 0 ? 20 : -20, 
                  rotateZ: idx % 2 === 0 ? 5 : -5, 
                  scale: 0.8,
                  z: -100
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  rotateY: 0, 
                  rotateZ: 0, 
                  scale: 1,
                  z: 0
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: isExpanded && idx >= 4 ? ((idx - 4) % 3) * 0.15 : (idx % 3) * 0.2 
                }}
                className="relative group rounded-3xl overflow-hidden border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-emerald-100"
              >
                <div className="absolute inset-0 bg-emerald-950/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <img 
                  src={src} 
                  alt={`Gallery photo ${idx + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  loading="lazy"
                />
              </motion.div>
            </div>
          ))}

          {/* Fade effect before expanding */}
          {!isExpanded && (
            <div className="absolute -bottom-6 left-0 w-full h-40 bg-gradient-to-t from-emerald-50 via-emerald-50/80 to-transparent pointer-events-none z-10" />
          )}
        </div>

        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 relative z-20 w-full flex justify-center"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="relative flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-sans font-bold transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1"
            >
              <Images className="w-5 h-5" />
              Lihat Semua Foto
            </button>
          </motion.div>
        )}
      </div>
      
      <div className="absolute bottom-0 w-full z-10 left-0">
        <MotifPucukRebung position="bottom" className="text-emerald-900 opacity-20" />
      </div>
    </section>
  );
}
