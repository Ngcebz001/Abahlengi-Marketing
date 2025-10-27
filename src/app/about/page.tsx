import Image from "next/image";
import { Metadata } from "next";

import { Container } from "@/components/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Abahlengi Group’s mission to provide compassionate, clinically-led home care across South Africa.",
});

const values = [
  {
    title: "Compassion first",
    description:
      "Every interaction is rooted in respect for cultural, spiritual and personal preferences.",
  },
  {
    title: "Clinical excellence",
    description:
      "Our care managers are registered nurses with decades of combined experience in palliative and restorative care.",
  },
  {
    title: "Partnership",
    description:
      "We work closely with physicians, hospices, therapists and medical aids to provide continuity of care.",
  },
  {
    title: "Nationwide support",
    description:
      "Our network of vetted carers spans all major provinces, enabling rapid response when families need it most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-spacing">
        <Container className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-forest">About Abahlengi Group</h1>
            <p className="text-muted">
              Founded by healthcare professionals and family caregivers, Abahlengi Group ensures South Africans can access dignified care without leaving home. We believe healing happens best in familiar surroundings, surrounded by loved ones.
            </p>
            <p className="text-muted">
              Our multidisciplinary team spans registered nurses, case managers, physiotherapists and dedicated carers who are trained, supervised and supported to deliver exceptional service.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-sage/30 p-1 shadow-subtle">
            <Image
              src="/images/care-team.svg"
              alt="Abstract illustration conveying Abahlengi carers supporting a patient at home"
              width={720}
              height={480}
              className="h-full w-full rounded-[26px] object-cover"
            />
          </div>
        </Container>
      </section>
      <section className="section-spacing bg-white/70 dark:bg-forest/30">
        <Container>
          <h2 className="text-3xl font-semibold text-forest">Our values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-sage/30 bg-white/80 p-6 shadow-sm dark:bg-forest/40">
                <h3 className="text-xl font-semibold text-forest">{value.title}</h3>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-spacing">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-forest">Serving families nationwide</h2>
            <p className="text-muted">
              From Cape Town to Polokwane, we coordinate live-in and visiting carers who bring warmth, expertise and calm into every home. With 24/7 care management, you can always reach a member of our team.
            </p>
          </div>
          <div className="rounded-3xl bg-forest p-8 text-white shadow-subtle">
            <h3 className="text-xl font-semibold">What to expect</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Dedicated care manager with regular check-ins</li>
              <li>Care plans reviewed and updated in partnership with your clinicians</li>
              <li>Comprehensive handovers and daily updates for families</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
