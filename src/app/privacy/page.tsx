import { Metadata } from "next";

import { Container } from "@/components/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Understand how Abahlengi Group collects and protects personal information from enquiries and clients.",
});

const sections = [
  {
    title: "Information we collect",
    body: `We collect personal details submitted through our website forms, phone calls, emails and WhatsApp conversations. This may include contact details, medical information shared voluntarily, care preferences and payment arrangements.`,
  },
  {
    title: "How we use information",
    body: `We use the information to respond to enquiries, plan and deliver care services, communicate with healthcare providers and ensure compliance with medical aid requirements.`,
  },
  {
    title: "Sharing with third parties",
    body: `We only share information with authorised care professionals, medical aids or service partners directly involved in providing the requested support. We never sell personal information.`,
  },
  {
    title: "Data security",
    body: `Administrative, technical and physical safeguards protect against unauthorised access. Access is restricted to team members who require the information to carry out their duties.`,
  },
  {
    title: "Your rights",
    body: `You may request access to, correction of or deletion of your personal data by contacting care@abahlengi.co.za. We will respond within a reasonable timeframe.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-spacing">
      <Container className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold text-forest">Privacy Policy</h1>
        <p className="text-muted">
          Abahlengi Group respects your privacy and handles personal data in line with South African POPIA regulations.
        </p>
        <dl className="mt-8 space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <dt className="text-xl font-semibold text-forest">{section.title}</dt>
              <dd className="mt-2 text-sm text-muted">{section.body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-muted">
          This policy is reviewed annually. Last updated: {new Date().getFullYear()}.
        </p>
      </Container>
    </section>
  );
}
