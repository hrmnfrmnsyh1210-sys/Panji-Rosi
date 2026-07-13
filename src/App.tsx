/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Gift from "./components/Gift";
import Closing from "./components/Closing";
import Cover from "./components/Cover";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-slate-950 relative">
      <AnimatePresence>
        {!isOpened && (
          <Cover onOpen={handleOpen} />
        )}
      </AnimatePresence>
      
      {isOpened && (
        <div className="animate-in fade-in duration-1000">
          <Hero />
          <Couple />
          <Gallery />
          <Events />
          <Gift />
          <Closing />
        </div>
      )}
      <AudioPlayer isPlaying={isPlaying} isVisible={isOpened} onPlayChange={setIsPlaying} />
    </main>
  );
}
