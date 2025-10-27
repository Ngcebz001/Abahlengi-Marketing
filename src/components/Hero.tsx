"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/Container";
import { LeafBackdrop } from "@/components/LeafBackdrop";

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage/20 via-beige to-transparent pb-24 pt-24">
      <LeafBackdrop className="opacity-80" />
      <Container className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            className="text-4xl font-semibold sm:text-5xl lg:text-6xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={textVariants}
          >
            Compassionate Care in the Comfort of Your Home
          </motion.h1>
          <motion.p
            className="text-lg text-muted"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            variants={textVariants}
          >
            We provide high-quality palliative care and at-home support through experienced, trained carers — nationwide.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            variants={textVariants}
          >
            <Link className="btn-primary" href="/contact">
              Get in Touch
            </Link>
            <Link className="btn-secondary" href="#services">
              Our Services
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative h-64 w-full max-w-md rounded-3xl bg-white/70 p-8 shadow-subtle backdrop-blur dark:bg-forest/40"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          variants={textVariants}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Trusted Support</p>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-forest" aria-hidden />
              <span>Personalised care plans tailored to your family’s needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-forest" aria-hidden />
              <span>Experienced, vetted carers offering respectful, reliable support.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-forest" aria-hidden />
              <span>Coordination with leading medical aids across South Africa.</span>
            </li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
