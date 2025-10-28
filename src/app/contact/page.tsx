import { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { LeafBackdrop } from "@/components/LeafBackdrop";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Reach Abahlengi Group to discuss palliative care, respite support or at-home nursing anywhere in South Africa.",
});

export default function ContactPage() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <LeafBackdrop />
      <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-forest dark:text-sage-dark">Contact our care team</h1>
          <p className="text-muted dark:text-slate-300">
            Share a few details below and a care manager will call you within one business day to understand your needs, confirm funding and suggest next steps.
          </p>
          <div className="rounded-3xl border border-sage/30 dark:border-sage-dark/20 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-forest dark:text-sage-dark">Prefer to speak now?</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted dark:text-slate-300">
              <li>
                Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-forest dark:text-forest-dark underline-offset-4 hover:text-clay dark:hover:text-clay-dark">{siteConfig.phone}</a>
              </li>
              <li>
                WhatsApp: <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="text-forest dark:text-forest-dark underline-offset-4 hover:text-clay dark:hover:text-clay-dark">Chat with us</a>
              </li>
              <li>Response time: within 1 business day</li>
              <li>Service hours: 24/7 care coordination available</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-sage/30 dark:border-sage-dark/20 bg-white dark:bg-slate-900/50 p-8 shadow-subtle">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
