"use client";

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  spring = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Use spring physics (slight overshoot) instead of an eased tween — a punchier feel for hero-style reveals. */
  spring?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={
        spring
          ? { type: "spring", stiffness: 260, damping: 22, delay }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
