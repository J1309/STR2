import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function StarlinePreloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2.0 seconds clean, smooth duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progressFraction = Math.min(elapsed / duration, 1);

      // Smooth luxury easeOutCubic
      const easedProgress = Math.floor((1 - Math.pow(1 - progressFraction, 3)) * 100);
      setProgress(easedProgress);

      if (progressFraction < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 400);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 100);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="starline-light-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Light Prismatic Aura */}
          <div className="light-preloader-aura" />

          {/* Minimalist Top Bar */}
          <div className="light-preloader-top">
            <span className="light-preloader-tag">STARLINE ATELIER</span>
            <span className="light-preloader-tag">MMXXVI</span>
          </div>

          {/* Center Stage: Minimal, Elegant & Creative */}
          <div className="light-preloader-content">
            {/* Logo Container with Optical Lens Rings */}
            <div className="light-logo-wrapper">
              {/* Concentric Expanding Focus Rings */}
              <motion.div
                className="light-focus-ring ring-1"
                animate={{
                  scale: [0.95, 1.08, 0.95],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="light-focus-ring ring-2"
                animate={{
                  scale: [1.08, 0.95, 1.08],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut"
                }}
              />

              {/* The Holographic Chrome Star */}
              <motion.img
                src="/Str_logo.png"
                alt="Starline Logo"
                className="light-preloader-logo"
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              />
            </div>

            {/* Typography */}
            <motion.div
              className="light-preloader-brand"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <h1 className="light-brand-title">STARLINE</h1>
              <p className="light-brand-sub">CINEMA & 35MM ANALOG // ATELIER</p>
            </motion.div>

            {/* Minimalist Progress Meter */}
            <div className="light-progress-box">
              <div className="light-progress-track">
                <motion.div
                  className="light-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="light-progress-number">
                <span>{progress.toString().padStart(2, "0")}</span>
                <span className="light-progress-pct">%</span>
              </div>
            </div>
          </div>

          {/* Minimalist Bottom Bar with Skip */}
          <div className="light-preloader-bottom">
            <span className="light-preloader-footnote">LONDON • LAKE COMO • PARIS</span>
            <button
              onClick={handleSkip}
              className="light-skip-button"
              aria-label="Skip preloader"
            >
              <span>Skip ↵</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
