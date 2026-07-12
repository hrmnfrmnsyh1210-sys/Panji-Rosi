import { Music, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  isPlaying: boolean;
  isVisible: boolean;
  onPlayChange: (playing: boolean) => void;
}

export default function AudioPlayer({ isPlaying, isVisible, onPlayChange }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    onPlayChange(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} id="bg-music" src="/melayu_sambas.mp3" loop preload="auto" />
      
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-500/30 hover:bg-emerald-800 hover:scale-110 transition-all cursor-pointer"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Music className="w-5 h-5 animate-spin-slow" style={{ animationDuration: '3s' }} />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      )}
    </>
  );
}
