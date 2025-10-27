import Link from "next/link";
import { Metadata } from "next";

import { Container } from "@/components/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description: "Thank you for contacting Abahlengi Group. Our care managers will be in touch shortly.",
});

export default function ThankYouPage() {
  return (
    <section className="section-spacing">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-forest">Thank you for reaching out</h1>
          <p className="text-muted">
            Our care managers have received your enquiry and will be in touch within one business day. If your needs are urgent, please call us directly.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link className="btn-primary" href="tel:+27871234567">
            Call us now
          </Link>
          <Link className="btn-secondary" href="/">
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
