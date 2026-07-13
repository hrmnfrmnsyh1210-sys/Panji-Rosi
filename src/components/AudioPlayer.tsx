import { Music, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import musicFile from "../assets/music.mp3";

interface AudioPlayerProps {
  isPlaying: boolean;
  isVisible: boolean;
  onPlayChange: (playing: boolean) => void;
}

export default function AudioPlayer({ isPlaying, isVisible, onPlayChange }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Auto-play was prevented:", error);
          onPlayChange(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, onPlayChange]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        onPlayChange(false);
      } else {
        audio.play().then(() => {
          onPlayChange(true);
        }).catch(console.error);
      }
    } else {
      onPlayChange(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} id="bg-music" src={musicFile} loop preload="auto" />
      
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-[99] w-12 h-12 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-500/30 hover:bg-slate-800 hover:scale-110 transition-all cursor-pointer"
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
