"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Minimal scroll-triggered reveal. Respects prefers-reduced-motion.
 * Used for staggered content across all pages.
 */
export default function Reveal({ children, delay = 0, y = 32, className }: Props) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
