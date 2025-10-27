"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type LeafBackdropProps = {
  className?: string;
};

export function LeafBackdrop({ className }: LeafBackdropProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateYValue = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const translateY = prefersReducedMotion ? 0 : translateYValue;

  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.svg
        aria-hidden
        style={{ translateY, opacity: 0.12 }}
        className="absolute -top-24 right-[-10%] h-[460px] w-[460px] text-forest/40"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 0c60 60 120 140 120 210s-60 110-120 110-120-40-120-110S140 60 200 0Z"
          fill="currentColor"
        />
        <path
          d="M140 120c40 24 80 68 80 120"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M220 80c28 32 52 84 40 132"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.4"
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        style={{ translateY, opacity: 0.08 }}
        className="absolute -bottom-32 left-[-10%] h-[520px] w-[520px] text-sage/60"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 10c72 64 140 160 120 250-12 60-72 90-120 90s-108-30-120-90C60 170 128 74 200 10Z"
          fill="currentColor"
        />
        <path
          d="M170 140c36 34 60 74 56 122"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.35"
        />
      </motion.svg>
    </div>
  );
}
