import { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Reach Abahlengi Group to discuss palliative care, respite support or at-home nursing anywhere in South Africa.",
});

export default function ContactPage() {
  return (
    <section className="section-spacing">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-forest">Contact our care team</h1>
          <p className="text-muted">
            Share a few details below and a care manager will call you within one business day to understand your needs, confirm funding and suggest next steps.
          </p>
          <div className="rounded-3xl border border-sage/30 bg-white/80 p-6 shadow-sm dark:bg-forest/40">
            <h2 className="text-lg font-semibold text-forest">Prefer to speak now?</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-forest underline-offset-4 hover:text-clay">{siteConfig.phone}</a>
              </li>
              <li>
                WhatsApp: <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="text-forest underline-offset-4 hover:text-clay">Chat with us</a>
              </li>
              <li>Response time: within 1 business day</li>
              <li>Service hours: 24/7 care coordination available</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-sage/30 bg-white/90 p-8 shadow-subtle dark:bg-forest/40">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
