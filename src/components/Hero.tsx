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
    <section className="relative overflow-hidden bg-gradient-to-br from-sage/20 via-beige to-transparent dark:from-sage/10 dark:via-background dark:to-transparent pb-24 pt-32 md:pt-40">
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20 bg-[url(/images/hero-care.png)] bg-no-repeat bg-cover bg-[position:10%_30%] md:bg-[position:center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-beige/95 via-beige/90 to-beige/70 dark:from-background/95 dark:via-background/90 dark:to-background/70" />
      <LeafBackdrop className="opacity-60" />
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
            className="text-lg text-muted dark:text-slate-300"
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
          className="relative min-h-64 w-full max-w-md rounded-3xl bg-white/70 px-8 py-10 shadow-subtle backdrop-blur dark:bg-slate-800/90"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          variants={textVariants}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted dark:text-slate-300">Trusted Support</p>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex items-baseline gap-3">
              <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-forest dark:bg-sage-dark" aria-hidden />
              <span>Personalised care plans tailored to your family's needs.</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-forest dark:bg-sage-dark" aria-hidden />
              <span>Experienced, vetted carers offering respectful, reliable support.</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-forest dark:bg-sage-dark" aria-hidden />
              <span>Coordination with leading medical aids across South Africa.</span>
            </li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
