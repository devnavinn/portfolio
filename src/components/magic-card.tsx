"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
}

// Spotlight card: a cursor-following glow on both the border and the surface.
export function MagicCard({
  children,
  className,
  gradientSize = 240,
  gradientColor = "rgba(14,165,233,0.14)",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }

  const border = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, rgba(14,165,233,0.9), rgba(168,85,247,0.6), transparent 100%)`;
  const glow = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("group/magic relative rounded-2xl", className)}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-slate-200 dark:bg-slate-800" />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: border }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-white dark:bg-[#0b0f19]" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/magic:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
