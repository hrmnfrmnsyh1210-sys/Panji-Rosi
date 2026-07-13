import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Heart, MessageSquareHeart, CheckCircle2, XCircle, Loader2, User } from "lucide-react";
import { BungaSimetri } from "./Ornaments";

const APPS_SCRIPT_URL = (import.meta.env.VITE_APPS_SCRIPT_URL as string) || "https://script.google.com/macros/s/AKfycbwZWUA5bSFAHt3FGcCoyKmHGgszlb8cgz3BtGdBDSO_hzUsIDCWDmfiIyKO5TdLnyVO/exec";

interface Wish {
  timestamp: string;
  nama: string;
  ucapan: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Wishes() {
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

  const fetchWishes = async () => {
    if (!APPS_SCRIPT_URL) return;
    try {
      const res = await fetch(APPS_SCRIPT_URL);
      const data: Wish[] = await res.json();
      setWishes(data.reverse());
    } catch {
      // silent fail — list kosong
    } finally {
      setLoadingWishes(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !ucapan.trim()) return;
    if (!APPS_SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: nama.trim(), ucapan: ucapan.trim() }),
      });
      setStatus("success");
      setNama("");
      setUcapan("");
      // Tambahkan ke list lokal langsung tanpa perlu refetch
      setWishes((prev) => [
        { timestamp: new Date().toISOString(), nama: nama.trim(), ucapan: ucapan.trim() },
        ...prev,
      ]);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const formatDate = (ts: string) => {
    try {
      return new Date(ts).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-900 text-slate-50 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L40 1.41V0h-1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <BungaSimetri className="w-12 h-12 mb-6 text-amber-400" />
          <h2 className="font-serif text-3xl mb-3 text-slate-50 font-semibold">
            Kirim Ucapan & Doa
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
            Doa dan ucapan tulus dari Anda adalah hadiah terindah bagi kami.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            {/* Nama */}
            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                Nama
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="wish-nama"
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama kamu..."
                  maxLength={80}
                  required
                  className="w-full bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all"
                />
              </div>
            </div>

            {/* Ucapan */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                Ucapan & Doa
              </label>
              <div className="relative">
                <MessageSquareHeart className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                <textarea
                  id="wish-ucapan"
                  value={ucapan}
                  onChange={(e) => setUcapan(e.target.value)}
                  placeholder="Tulis ucapan dan doa terbaikmu..."
                  maxLength={500}
                  required
                  rows={4}
                  className="w-full bg-slate-900/70 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-xs text-slate-600">
                  {ucapan.length}/500
                </span>
              </div>
            </div>

            {/* Tombol */}
            <button
              id="wish-submit"
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/40 text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-100 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Terkirim! Terima kasih 🙏</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Ucapan</span>
                </>
              )}
            </button>

            {/* Notifikasi error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                >
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Gagal mengirim. Periksa koneksi atau URL Apps Script.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Daftar Ucapan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Ucapan dari Tamu
            </p>
          </div>

          {loadingWishes ? (
            <div className="flex justify-center py-10">
              <Loader2 className="w-6 h-6 text-amber-400/40 animate-spin" />
            </div>
          ) : wishes.length === 0 ? (
            <div className="text-center py-10 text-slate-600 text-sm">
              Belum ada ucapan. Jadilah yang pertama! 🌸
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {wishes.map((w, i) => (
                  <motion.div
                    key={`${w.nama}-${w.timestamp}-${i}`}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i < 5 ? i * 0.07 : 0 }}
                    className="bg-slate-800/50 border border-slate-700/40 rounded-2xl px-5 py-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                          <User className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <span className="font-semibold text-slate-200 text-sm">{w.nama}</span>
                      </div>
                      {w.timestamp && (
                        <span className="text-slate-600 text-xs shrink-0 mt-0.5">
                          {formatDate(w.timestamp)}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed pl-9">{w.ucapan}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
