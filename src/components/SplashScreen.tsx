import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/eb-nodes-logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"spin" | "fadeout">("spin");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 2400);
    const t2 = setTimeout(() => onComplete(), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "fadeout" ? null : null}
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "fadeout" ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      >
        {/* Glow ring behind logo */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Revolving logo */}
        <motion.img
          src={logo}
          alt="EBdes"
          className="w-24 h-24 rounded-2xl relative z-10"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ perspective: 600 }}
        />

        {/* Brand text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 font-display font-bold text-foreground tracking-widest text-sm"
        >
          ATREBDES
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-1 text-xs text-muted-foreground"
        >
          Powering Your Digital Universe
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="mt-8 w-48 h-0.5 bg-secondary rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
