import Link from "next/link";
import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Seo } from "@/components/Seo";
import { FaqSection } from "@/components/FaqSection";
import { createMetadata, faqJsonLd } from "@/lib/seo";

const services = [
  {
    id: "palliative-care",
    title: "Palliative Care at Home",
    description:
      "Comfort-led support for individuals living with serious illness, coordinated with hospice and specialist teams.",
    bullets: [
      "Symptom and comfort management",
      "Medication administration and reminders",
      "Compassionate companionship for families",
    ],
  },
  {
    id: "post-hospital-recovery",
    title: "Post-Hospital Recovery",
    description:
      "Guided recovery with clinical oversight to reduce readmissions and promote independence.",
    bullets: [
      "Wound and dressing care",
      "Physio-led mobility exercises",
      "Transportation to follow-up appointments",
    ],
  },
  {
    id: "short-term-respite",
    title: "Short-Term Respite",
    description:
      "Flexible cover so family caregivers can rest knowing their loved one is supported.",
    bullets: [
      "Daytime or overnight relief",
      "Meal preparation and hydration tracking",
      "Meaningful social engagement",
    ],
  },
  {
    id: "companionship",
    title: "Companionship & Daily Living",
    description:
      "Supportive routines that encourage connection, independence and dignity.",
    bullets: [
      "Light housekeeping and errands",
      "Meal planning and nutrition",
      "Safe mobility around the home",
    ],
  },
  {
    id: "medication-reminders",
    title: "Medication Reminders",
    description:
      "Accuracy and calm around prescription schedules and medical instructions.",
    bullets: [
      "Coordinating repeat prescriptions",
      "Monitoring potential side effects",
      "Sharing updates with your healthcare team",
    ],
  },
  {
    id: "overnight-care",
    title: "Overnight Care",
    description:
      "Peace of mind with attentive night-time carers on hand for repositioning, hygiene and reassurance.",
    bullets: [
      "Awake caregivers throughout the night",
      "Support with continence and repositioning",
      "Morning handovers with families",
    ],
  },
];

const faqs = [
  {
    question: "Which areas do you serve?",
    answer:
      "We provide carers across all major provinces in South Africa, with rapid onboarding in Gauteng, Western Cape and KwaZulu-Natal.",
  },
  {
    question: "Do you work with medical aids?",
    answer:
      "Yes. We liaise with leading medical schemes and offer private packages to ensure continuity of care.",
  },
  {
    question: "Can we customise the schedule?",
    answer:
      "Absolutely — care can range from a few hours a week to round-the-clock live-in support.",
  },
  {
    question: "How do you screen your carers?",
    answer:
      "All carers undergo background checks, competency assessments and continuous training with our clinical team.",
  },
  {
    question: "What if our needs change?",
    answer:
      "Your dedicated care manager will review the plan regularly and adjust staffing or services as needed.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore Abahlengi Group’s palliative, respite, recovery and companionship services delivered in the comfort of your home.",
});

export default function ServicesPage() {
  return (
    <>
      <Seo jsonLd={[faqJsonLd(faqs)]} />
      <section className="section-spacing">
        <Container className="space-y-6">
          <h1 className="text-4xl font-semibold text-forest dark:text-sage-dark">Services</h1>
          <p className="text-muted dark:text-slate-300">
            Our interdisciplinary team creates calm, confident care environments. Choose a service below or combine offerings to match your requirements.
          </p>
        </Container>
      </section>
      <Container className="space-y-16 pb-24">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="rounded-3xl border border-sage/30 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:shadow-md dark:bg-slate-900/95 dark:border-slate-700/50"
          >
            <h2 className="text-2xl font-semibold text-forest dark:text-sage-dark">{service.title}</h2>
            <p className="mt-3 text-muted dark:text-slate-300">{service.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-forest dark:text-slate-300">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-forest dark:bg-sage-dark" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link className="btn-secondary" href="/contact">
                Speak to our team
              </Link>
            </div>
          </article>
        ))}
      </Container>
      <FaqSection faqs={faqs} />
    </>
  );
}
