import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-100 shadow-sm cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      aria-label="Toggle visual theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="light"
            initial={{ y: -10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-amber-500" />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ y: -10, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-indigo-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
