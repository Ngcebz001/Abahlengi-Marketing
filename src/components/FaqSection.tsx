"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-forest/20 dark:border-sage-dark/20 bg-white dark:bg-slate-900/50">
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-forest transition-colors duration-300 hover:text-clay dark:text-sage-dark dark:hover:text-clay-dark"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-sm text-muted dark:text-slate-400"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-muted dark:text-slate-300">{answer}</div>
      </motion.div>
    </div>
  );
}

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: Faq[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing bg-beige/50 dark:bg-slate-950/30">
      <div className="container mx-auto max-w-3xl space-y-6 px-6">
        <h2 className="text-center text-3xl font-semibold text-forest dark:text-sage-dark">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
