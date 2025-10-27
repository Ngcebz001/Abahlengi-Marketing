"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/Container";

const steps = [
  {
    title: "Contact Us",
    description: "Reach out via phone, WhatsApp or our contact form and we’ll respond within the day.",
  },
  {
    title: "Assessment",
    description: "A registered nurse meets with your family to understand needs, preferences and routines.",
  },
  {
    title: "Personalised Care Plan",
    description: "We match the right carers and clinicians, then craft a tailored plan with clear updates.",
  },
  {
    title: "Ongoing Support",
    description: "Your dedicated care manager checks in regularly, adjusting as needs evolve.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-spacing bg-white/70 dark:bg-forest/30">
      <Container>
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we support your journey</h2>
          <p className="mt-4 text-muted">
            From the first phone call, you receive a dedicated care manager who coordinates every detail with empathy and professionalism.
          </p>
        </div>
        <div className="relative">
          <span className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-sage/60 md:block" aria-hidden />
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}
                className="relative rounded-2xl border border-sage/20 bg-beige/50 p-6 shadow-sm backdrop-blur dark:bg-forest/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lg font-semibold text-white">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-forest">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
