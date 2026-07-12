import { motion } from "motion/react";
import { WeddingData } from "../data";
import { MotifPucukRebung, BungaSimetri } from "./Ornaments";

export default function Couple() {
  return (
    <section className="py-24 px-6 bg-slate-50 text-slate-950 text-center relative overflow-hidden">
      {/* Background motif for light section */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L40 1.41V0h-1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 w-full z-10 left-0">
        <MotifPucukRebung position="top" className="text-slate-900 opacity-20" />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center"
        >
          <BungaSimetri className="w-10 h-10 mb-6 text-slate-800" />
          <h2 className="font-serif text-xl mb-4 font-semibold text-slate-800">Assalamu'alaikum Warahmatullahi Wabarakatuh</h2>
          <p className="font-sans text-slate-700 leading-relaxed text-sm md:text-base">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-12 relative">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h3 className="font-cursive text-5xl md:text-6xl text-slate-900 mb-4">{WeddingData.bride.fullname}</h3>
            <p className="font-sans text-slate-600 text-sm md:text-base uppercase tracking-wider font-medium">{WeddingData.bride.parents}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cursive text-6xl text-amber-500 drop-shadow-sm z-10 my-[-2rem]"
          >
            &
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h3 className="font-cursive text-5xl md:text-6xl text-slate-900 mb-4">{WeddingData.groom.fullname}</h3>
            <p className="font-sans text-slate-600 text-sm md:text-base uppercase tracking-wider font-medium">{WeddingData.groom.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
