import { motion } from "motion/react";
import { WeddingData } from "../data";
import { MotifTenunBackground, SudutUkiran, BungaSimetri } from "./Ornaments";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950 text-emerald-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-emerald-950/40" />
      
      <MotifTenunBackground opacity="0.25" />
      
      <SudutUkiran position="tl" className="top-4 left-4 w-20 h-20 md:w-32 md:h-32" />
      <SudutUkiran position="tr" className="top-4 right-4 w-20 h-20 md:w-32 md:h-32" />
      <SudutUkiran position="bl" className="bottom-4 left-4 w-20 h-20 md:w-32 md:h-32" />
      <SudutUkiran position="br" className="bottom-4 right-4 w-20 h-20 md:w-32 md:h-32" />

      <div className="z-10 text-center px-4 flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <BungaSimetri className="w-12 h-12" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] font-sans text-amber-400 mb-6 font-semibold"
        >
          The Wedding Of
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cursive text-6xl md:text-8xl lg:text-9xl text-emerald-50 mb-6 drop-shadow-lg"
        >
          {WeddingData.bride.nickname} & {WeddingData.groom.nickname}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl font-serif tracking-widest text-amber-300"
        >
          08 . 08 . 2026
        </motion.p>
      </div>
    </section>
  );
}
