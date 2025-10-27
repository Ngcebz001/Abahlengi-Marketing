import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/Container";

const points = [
  "Works with medical aids and private clients",
  "Vetted, trained carers",
  "Personalised care plans",
  "Reliable, responsive support",
];

export function Assurance() {
  return (
    <section className="section-spacing">
      <Container className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Care you can trust, wherever you are</h2>
          <p className="mt-4 text-muted">
            Abahlengi Group partners with physicians, hospices and medical schemes nationwide to deliver home-based care that feels reassuring and respectful.
          </p>
        </div>
        <ul className="space-y-4 rounded-3xl bg-white/70 p-6 shadow-subtle backdrop-blur dark:bg-forest/40">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-forest">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-forest" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
