import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return !document.documentElement.classList.contains("light");
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  return (
    <motion.button
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 z-50 glass-panel p-2.5 rounded-xl hover:bg-glass-hover transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
