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

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpened]);

  return (
    <main className="w-full min-h-screen bg-emerald-50 font-sans selection:bg-amber-500 selection:text-emerald-950 relative">
      <AnimatePresence>
        {!isOpened && <Cover onOpen={() => setIsOpened(true)} />}
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
    </main>
  );
}
