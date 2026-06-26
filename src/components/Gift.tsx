import { useState } from "react";
import { motion } from "motion/react";
import { WeddingData } from "../data";
import { Copy, Check, HeartHandshake } from "lucide-react";
import { BungaSimetri } from "./Ornaments";

export default function Gift() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (account: string) => {
    navigator.clipboard.writeText(account);
    setCopiedAccount(account);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section className="py-24 px-6 bg-emerald-50 text-emerald-950 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L40 1.41V0h-1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <BungaSimetri className="w-12 h-12 mb-6 text-emerald-800" />
          <h2 className="font-serif text-3xl mb-4 text-emerald-900 font-semibold">Tanda Kasih</h2>
          <p className="font-sans text-emerald-800 leading-relaxed text-sm md:text-base bg-white/50 p-4 rounded-xl border border-emerald-100 shadow-sm backdrop-blur-sm">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Bagi keluarga dan sahabat yang ingin memberikan tanda kasih, dapat melalui:
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {WeddingData.gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg border-t-8 border-amber-500 flex flex-col items-center gap-4 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-50 rounded-full opacity-50 pointer-events-none" />
              
              <div className="text-center relative z-10">
                <p className="font-bold text-2xl text-emerald-950 font-serif tracking-wider">{gift.bank}</p>
                <p className="font-mono text-emerald-700 text-xl my-3 tracking-[0.15em] font-medium bg-emerald-50 py-2 px-6 rounded-lg">{gift.account}</p>
                <p className="font-sans text-sm text-emerald-600 font-medium uppercase tracking-widest">a.n {gift.name}</p>
              </div>
              <button
                onClick={() => handleCopy(gift.account)}
                className="mt-4 flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-amber-400 px-8 py-3 rounded-full font-sans text-sm font-bold transition-colors w-full justify-center shadow-md relative z-10"
              >
                {copiedAccount === gift.account ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Rekening</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
