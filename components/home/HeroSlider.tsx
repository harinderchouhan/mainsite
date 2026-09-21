"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { caseStudies } from "@/lib/portfolio";

// Placeholder avatar — swap for a real client photo at this path once available.
const CLIENT_AVATAR = "/brand/client-avatar-placeholder.svg";

const slides = caseStudies.filter((c) => c.image && c.logo);

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 18 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-7, 7]);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    tiltX.set((event.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  if (slides.length === 0) return null;
  const active = slides[index];

  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ perspective: 1200 }}>
      <motion.div
        animate={
          prefersReducedMotion ? undefined : { y: [0, -8, 0] }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 -top-5 z-20 flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-left-6"
      >
        <Image
          src={CLIENT_AVATAR}
          alt="Happy client"
          width={44}
          height={44}
          className="size-9 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <p className="text-sm font-bold leading-none text-foreground">
            100 leads
          </p>
          <p className="mt-1 text-xs text-muted">in the last 30 days</p>
        </div>
      </motion.div>

      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[22rem] overflow-hidden rounded-3xl border border-border bg-surface shadow-xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-border bg-background px-3">
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={active.image!}
                alt={`Screenshot of the live ${active.client} website`}
                fill
                sizes="384px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                <Image
                  src={active.logo!}
                  alt={`${active.client} logo`}
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {slides.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.slug}
              type="button"
              aria-label={`Show ${slide.client}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-600" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
