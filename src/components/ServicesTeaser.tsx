"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, HeartPulse, Home, MoonStar, Pill, Stethoscope, UsersRound, type LucideIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";

type Service = {
  title: string;
  description: string;
  href: Route;
  icon: LucideIcon;
};

const services = [
  {
    title: "Palliative Care at Home",
    description: "Specialist support for patients requiring comfort-focused, dignified care.",
    href: "/services#palliative-care" as Route,
    icon: HeartPulse,
  },
  {
    title: "Post-Hospital Recovery",
    description: "Support with wound care, mobility and medication after a hospital stay.",
    href: "/services#post-hospital-recovery" as Route,
    icon: Stethoscope,
  },
  {
    title: "Short-Term Respite",
    description: "Trusted carers who step in while family caregivers take a much-needed break.",
    href: "/services#short-term-respite" as Route,
    icon: UsersRound,
  },
  {
    title: "Companionship & Daily Living",
    description: "Warm assistance with meals, routines, light housekeeping and friendly company.",
    href: "/services#companionship" as Route,
    icon: Home,
  },
  {
    title: "Medication Reminders",
    description: "Gentle support with schedules, prescriptions and doctor communication.",
    href: "/services#medication-reminders" as Route,
    icon: Pill,
  },
  {
    title: "Overnight Care",
    description: "Restful nights knowing a trained professional is present and alert.",
    href: "/services#overnight-care" as Route,
    icon: MoonStar,
  },
] satisfies Service[];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function ServicesTeaser() {
  return (
    <section id="services" className="section-spacing">
      <Container>
        <div className="mb-10 flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Support tailored to each family</h2>
          <p className="mx-auto text-muted">
            Every plan is built around the person we are caring for — with ongoing coordination between our nurses, carers and your medical team.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
                className="group relative overflow-hidden rounded-2xl border border-sage/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:bg-forest/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/40 text-forest">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-forest">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest transition group-hover:text-clay"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
