import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export default function StarlinePreloader({ onComplete, forceShow = false }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const statusPhases = [
    "INITIALIZING OPTICAL SENSORS...",
    "LOADING 35MM ANALOG & CINEMA ARCHIVES...",
    "CALIBRATING NATURAL LIGHT HARMONICS...",
    "HARMONIZING LAKE COMO & CÔTE D'AZUR HUBS...",
    "ATELIER READY // COMMENCING OBSERVATORY"
  ];

  // Mouse tilt tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth realistic counter progress
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2200; // 2.2 seconds total duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progressFraction = Math.min(elapsed / duration, 1);

      // Luxury easeOutCubic curve
      const easedProgress = Math.floor((1 - Math.pow(1 - progressFraction, 3)) * 100);
      setProgress(easedProgress);

      if (progressFraction < 0.25) setPhaseIndex(0);
      else if (progressFraction < 0.52) setPhaseIndex(1);
      else if (progressFraction < 0.78) setPhaseIndex(2);
      else if (progressFraction < 0.98) setPhaseIndex(3);
      else setPhaseIndex(4);

      if (progressFraction < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 500);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setPhaseIndex(4);
    setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 150);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="starline-preloader-root"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] }
          }}
        >
          {/* Top Curtain */}
          <motion.div
            className="starline-curtain-top"
            exit={{
              y: "-100%",
              transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] }
            }}
          />

          {/* Bottom Curtain */}
          <motion.div
            className="starline-curtain-bottom"
            exit={{
              y: "100%",
              transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] }
            }}
          />

          {/* Ambient Deep Space Radial Glow */}
          <div className="starline-preloader-ambient" />

          {/* Precision Architectural HUD Corner Markers */}
          <div className="starline-hud-corner hud-top-left">
            <span className="hud-label">COORDINATES</span>
            <span className="hud-val">LAT 45.986° N // LON 9.263° E</span>
            <span className="hud-sub">LAKE COMO ATELIER</span>
          </div>

          <div className="starline-hud-corner hud-top-right">
            <span className="hud-label">CALIBRATION</span>
            <span className="hud-val">35MM ANALOG + 4K CINEMA</span>
            <span className="hud-sub">24.000 FPS ARCHIVAL</span>
          </div>

          <div className="starline-hud-corner hud-bottom-left">
            <span className="hud-label">TELEMETRY</span>
            <span className="hud-val">ATELIER STARLINE • MMXXVI</span>
            <span className="hud-sub">LONDON • PARIS • WORLDWIDE</span>
          </div>

          <div className="starline-hud-corner hud-bottom-right">
            <button
              onClick={handleSkip}
              className="hud-skip-btn"
              aria-label="Skip preloader"
            >
              <span>ENTER ATELIER ↵</span>
            </button>
          </div>

          {/* Central Logo Experience Container */}
          <motion.div
            className="starline-preloader-center"
            style={{
              rotateX: -mousePos.y * 0.4,
              rotateY: mousePos.x * 0.4
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.12, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Celestial Gyroscope Rings */}
            <div className="starline-gyro-ring ring-outer">
              <div className="gyro-orbiter" />
            </div>
            <div className="starline-gyro-ring ring-inner" />

            {/* Central Holographic Star Logo */}
            <div className="starline-logo-glow-wrap">
              <div className="starline-radial-lens-flare" />
              <motion.img
                src="/Str_logo.png"
                alt="Starline Studio Logo"
                className="starline-preloader-logo-img"
                animate={{
                  y: [-3, 3, -3],
                  rotate: [-0.5, 0.5, -0.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
              <div className="starline-logo-shimmer-sweep" />
            </div>

            {/* Brand Title */}
            <motion.div
              className="starline-preloader-brand"
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.26em" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="preloader-title">STARLINE</h1>
              <span className="preloader-subtitle">ATELIER CINÉMATOGRAPHIQUE</span>
            </motion.div>

            {/* High-Precision Progress Meter */}
            <div className="starline-progress-container">
              <div className="starline-progress-track">
                <motion.div
                  className="starline-progress-fill"
                  style={{ width: `${progress}%` }}
                >
                  <div className="starline-progress-glow-head" />
                </motion.div>
              </div>

              {/* Counter & Status Display */}
              <div className="starline-progress-meta">
                <div className="starline-phase-text">
                  <span className="phase-indicator">●</span>
                  <span className="phase-title">{statusPhases[phaseIndex]}</span>
                </div>
                <div className="starline-counter">
                  <span>{progress.toString().padStart(2, "0")}</span>
                  <span className="counter-unit">%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
