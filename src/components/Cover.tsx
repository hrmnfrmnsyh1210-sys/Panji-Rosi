import { motion } from "motion/react";
import { WeddingData } from "../data";
import { MailOpen } from "lucide-react";
import { MotifPucukRebung, MotifTenunBackground, BungaSimetri } from "./Ornaments";

interface CoverProps {
  onOpen: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.section 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-slate-50 overflow-hidden"
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950/90"></div>
      
      <MotifTenunBackground opacity="0.25" />
      
      <div className="absolute top-0 w-full z-10">
        <MotifPucukRebung position="top" />
      </div>

      <div className="absolute bottom-0 w-full z-10">
        <MotifPucukRebung position="bottom" />
      </div>
      
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <BungaSimetri className="w-16 h-16" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] font-sans text-amber-400 mb-6 font-semibold"
        >
          Undangan Pernikahan
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cursive text-6xl md:text-8xl text-slate-50 mb-6 drop-shadow-lg"
        >
          {WeddingData.bride.nickname} & {WeddingData.groom.nickname}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 flex flex-col items-center"
        >
          <p className="text-sm font-sans text-slate-300 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <div className="px-6 py-2 border-b-2 border-amber-400/50">
            <p className="font-serif text-xl font-medium text-amber-300">Tamu Undangan</p>
          </div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={onOpen}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3 rounded-full font-sans font-bold transition-colors shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        >
          <MailOpen className="w-5 h-5" />
          Buka Undangan
        </motion.button>
      </div>
    </motion.section>
  );
}
