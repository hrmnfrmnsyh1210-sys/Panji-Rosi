import { motion } from "motion/react";
import { WeddingData } from "../data";
import { MotifTenunBackground, SudutUkiran, BungaSimetri } from "./Ornaments";
import { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-08T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/40" />
      
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
          className="font-cursive text-6xl md:text-8xl lg:text-9xl text-slate-50 mb-6 drop-shadow-lg"
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex gap-4 text-center justify-center"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 min-w-[80px]">
            <div className="text-3xl font-serif text-amber-400 mb-1">{timeLeft.days}</div>
            <div className="text-xs uppercase tracking-wider text-slate-300">Hari</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 min-w-[80px]">
            <div className="text-3xl font-serif text-amber-400 mb-1">{timeLeft.hours}</div>
            <div className="text-xs uppercase tracking-wider text-slate-300">Jam</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 min-w-[80px]">
            <div className="text-3xl font-serif text-amber-400 mb-1">{timeLeft.minutes}</div>
            <div className="text-xs uppercase tracking-wider text-slate-300">Menit</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
