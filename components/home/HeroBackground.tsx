"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";

/**
 * Blobs drift toward the cursor (springed, so they lag and settle rather
 * than snapping) to give the hero a sense of depth instead of a static
 * gradient backdrop. Disabled under prefers-reduced-motion.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 20, mass: 1 });

  const blobOneX = useTransform(springX, (v) => v * 24);
  const blobOneY = useTransform(springY, (v) => v * 18);
  const blobTwoX = useTransform(springX, (v) => v * -20);
  const blobTwoY = useTransform(springY, (v) => v * -14);

  useEffect(() => {
    if (prefersReducedMotion) return;

    function handlePointerMove(event: PointerEvent) {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      pointerX.set(x);
      pointerY.set(y);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion, pointerX, pointerY]);

  return (
    <>
      <GridPattern className="opacity-70" />
      <motion.div
        style={prefersReducedMotion ? undefined : { x: blobOneX, y: blobOneY }}
        className="absolute -left-32 -top-24 h-96 w-96"
      >
        <Blob tone="brand" className="left-0 top-0 h-full w-full" />
      </motion.div>
      <motion.div
        style={prefersReducedMotion ? undefined : { x: blobTwoX, y: blobTwoY }}
        className="absolute -right-24 top-40 h-80 w-80"
      >
        <Blob tone="warm" className="left-0 top-0 h-full w-full" />
      </motion.div>
    </>
  );
}
