import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_MESSAGES = [
  "Initializing premium visual engine...",
  "Loading portfolio data core...",
  "Fetching public GitHub registries...",
  "Binding interactive components...",
  "Pixel perfection guaranteed...",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increment progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random incremental jumps to feel natural
        const jump = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + jump, 100);
      });
    }, 70);

    // Rotate messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % BOOT_MESSAGES.length);
    }, 350);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        // Short delay for exit animation before calling onComplete
        setTimeout(onComplete, 400);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-16 bg-neutral-950 text-white select-none"
        >
          {/* Top segment */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-xs font-mono text-neutral-500 tracking-wider">CHIRAG JANGID PORTFOLIO</span>
              <h2 className="text-lg font-display font-medium text-emerald-400">v3.5 // 2026 Edition</h2>
            </div>
            <span className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              STATUS: READY
            </span>
          </div>

          {/* Middle segment - Large Display Counter */}
          <div className="my-auto text-left relative">
            <div className="absolute -top-12 left-0 text-emerald-500/20 text-7xl font-display select-none font-bold">
              CJ
            </div>
            <div className="flex items-baseline font-display">
              <motion.h1 
                className="text-8xl md:text-[13rem] font-bold tracking-tighter leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {progress}
              </motion.h1>
              <span className="text-4xl md:text-6xl font-medium text-emerald-500 font-sans">%</span>
            </div>
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-mono text-neutral-400 mt-4 tracking-wider h-6 uppercase"
            >
              &gt; {BOOT_MESSAGES[messageIndex]}
            </motion.p>
          </div>

          {/* Bottom segment */}
          <div className="space-y-4">
            <div className="w-full h-[2px] bg-neutral-900 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-emerald-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between text-xs font-mono text-neutral-500 space-y-2 md:space-y-0">
              <span>DESIGNED & ENGINEERED BY CHIRAG JANGID</span>
              <span>JAIPUR, IN // 2026 GLOBAL PORTFOLIO</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
