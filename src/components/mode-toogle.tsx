"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full text-slate-600 transition-colors hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <SunIcon size={18} /> : <MoonStarIcon size={18} />}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
