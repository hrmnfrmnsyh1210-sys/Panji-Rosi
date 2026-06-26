import { motion } from "motion/react";
import { WeddingData } from "../data";
import { MotifTenunBackground, MotifPucukRebung, BungaSimetri } from "./Ornaments";

export default function Closing() {
  return (
    <section className="py-24 px-6 bg-emerald-950 text-emerald-50 text-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-950 via-emerald-950/80 to-emerald-900/90" />
      
      <MotifTenunBackground opacity="0.15" />
      
      <div className="absolute top-0 w-full z-10 left-0">
        <MotifPucukRebung position="top" className="opacity-50" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <BungaSimetri className="w-12 h-12 mb-8 text-amber-400" />
          
          <p className="font-sans text-emerald-100 leading-relaxed text-sm md:text-base mb-8 max-w-lg">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>
          <p className="font-serif text-xl mb-20 text-amber-400 font-medium tracking-wide">
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          
          <p className="font-sans text-emerald-300 text-sm uppercase tracking-[0.3em] mb-6 font-semibold">
            Kami yang berbahagia
          </p>
          <h2 className="font-cursive text-6xl md:text-7xl text-emerald-50 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            {WeddingData.bride.nickname} & {WeddingData.groom.nickname}
          </h2>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full z-10 left-0">
        <MotifPucukRebung position="bottom" />
      </div>
    </section>
  );
}
