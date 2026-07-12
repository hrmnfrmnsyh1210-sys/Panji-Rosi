import { motion } from "motion/react";
import { WeddingData } from "../data";
import { Calendar, Clock, MapPin } from "lucide-react";
import { MotifTenunBackground, MotifPucukRebung } from "./Ornaments";

export default function Events() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 z-0 bg-slate-950/80" />
      
      <MotifTenunBackground opacity="0.15" />
      
      <div className="absolute top-0 w-full z-10 left-0">
        <MotifPucukRebung position="bottom" className="text-slate-900 opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cursive text-6xl text-amber-400 mb-2 drop-shadow-md">Save the Date</h2>
          <p className="font-sans text-slate-200 uppercase tracking-[0.2em] text-sm font-medium">Rangkaian Acara</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Akad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/60 p-8 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl border border-amber-500/30 flex flex-col items-center text-center backdrop-blur-md shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-[100%] transition-transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-tr-[100%] transition-transform group-hover:scale-110" />
            
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <Calendar className="w-8 h-8 text-slate-950" />
            </div>
            <h3 className="font-serif text-3xl mb-6 text-amber-100 z-10">Akad Nikah</h3>
            <div className="flex flex-col gap-4 w-full z-10">
              <div className="flex items-center justify-center gap-3 text-slate-50">
                <span className="font-sans font-semibold text-base md:text-lg tracking-wide">{WeddingData.akad.date}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-200 bg-slate-950/30 py-2 px-4 rounded-full mx-auto w-fit">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-sans text-sm font-medium">{WeddingData.akad.time}</span>
              </div>
              <div className="flex items-start justify-center gap-3 text-slate-200 mt-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-sans text-sm leading-relaxed max-w-[200px]">{WeddingData.akad.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900/60 p-8 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl border border-amber-500/30 flex flex-col items-center text-center backdrop-blur-md shadow-xl relative overflow-hidden group hover:border-amber-400/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-br-[100%] transition-transform group-hover:scale-110" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-500/10 rounded-tl-[100%] transition-transform group-hover:scale-110" />

            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <MapPin className="w-8 h-8 text-slate-950" />
            </div>
            <h3 className="font-serif text-3xl mb-6 text-amber-100 z-10">Resepsi</h3>
            <div className="flex flex-col gap-4 w-full z-10">
              <div className="flex items-center justify-center gap-3 text-slate-50">
                <span className="font-sans font-semibold text-base md:text-lg tracking-wide">{WeddingData.resepsi.date}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-200 bg-slate-950/30 py-2 px-4 rounded-full mx-auto w-fit">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-sans text-sm font-medium">{WeddingData.resepsi.time}</span>
              </div>
              <div className="flex items-start justify-center gap-3 text-slate-200 mt-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-sans text-sm leading-relaxed max-w-[200px]">{WeddingData.resepsi.location}</span>
              </div>
            </div>
            
            <a 
              href={WeddingData.resepsi.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-full font-sans font-bold hover:bg-amber-400 transition-colors z-10 shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              Buka Google Maps
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full z-10 left-0">
        <MotifPucukRebung position="bottom" />
      </div>
    </section>
  );
}
