import { motion } from "motion/react";
import { MotifTenunBackground, BungaSimetri, MotifPucukRebung } from "./Ornaments";

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
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-emerald-50 text-emerald-950 text-center relative overflow-hidden">
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

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 w-full">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border-4 border-white shadow-lg"
            >
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img 
                src={src} 
                alt={`Gallery photo ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full z-10 left-0">
        <MotifPucukRebung position="bottom" className="text-emerald-900 opacity-20" />
      </div>
    </section>
  );
}
