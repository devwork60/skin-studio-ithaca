"use client";

import { motion } from "framer-motion";
import { EASE } from "@/constant/motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number; // starting scale, e.g. 0.95
  inView?: boolean; // animate when scrolled into view (once) instead of on mount
  margin?: string; // viewport margin used with inView
  as?: "div" | "span";
  className?: string;
}

// Fade + rise/slide/scale. On mount for the hero load sequence, on scroll with `inView`.
const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 20,
  x,
  scale,
  inView = false,
  margin = "-80px",
  as = "div",
  className,
}) => {
  const Tag = as === "span" ? motion.span : motion.div;
  const from = { opacity: 0, y, ...(x !== undefined && { x }), ...(scale !== undefined && { scale }) };
  const to = { opacity: 1, y: 0, ...(x !== undefined && { x: 0 }), ...(scale !== undefined && { scale: 1 }) };

  return (
    <Tag
      initial={from}
      {...(inView
        ? { whileInView: to, viewport: { once: true, margin } }
        : { animate: to })}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default FadeUp;
