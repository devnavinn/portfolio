"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// All words share one grid cell, so the slot keeps the width of the longest
// word and the surrounding text never shifts while they rotate.
export function WordRotate({
  words,
  duration = 2400,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      duration
    );
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-grid">
      {words.map((word, i) => {
        const active = i === index;
        return (
          <motion.span
            key={word}
            aria-hidden={!active}
            className={cn("[grid-area:1/1] whitespace-nowrap", className)}
            initial={false}
            animate={
              active
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: -16, filter: "blur(8px)" }
            }
            transition={{ duration: 0.45, ease: "easeOut", delay: active ? 0.15 : 0 }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
