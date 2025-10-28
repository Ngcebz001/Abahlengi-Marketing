import { Phone, Send, MessageCircle, Mail, type LucideIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";

type ExternalAction = {
  kind: "external";
  href: string;
  label: string;
  icon: LucideIcon;
};

type InternalAction = {
  kind: "internal";
  href: Route;
  label: string;
  icon: LucideIcon;
};

type ContactAction = ExternalAction | InternalAction;

const actions = [
  {
    kind: "external",
    href: "https://wa.me/27871234567?text=Hi%20Abahlengi%2C%20I%20need%20help%20with%20home%20care.",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    kind: "external",
    href: "tel:+27871234567",
    label: "Call",
    icon: Phone,
  },
  {
    kind: "external",
    href: "mailto:care@abahlengi.co.za",
    label: "Email",
    icon: Mail,
  },
  {
    kind: "internal",
    href: "/contact" as Route,
    label: "Contact Form",
    icon: Send,
  },
] satisfies ContactAction[];

export function ContactStrip() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-forest px-8 py-12 text-white shadow-subtle lg:flex-row lg:items-center lg:justify-between dark:bg-forest-dark">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white dark:text-slate-900">Let&apos;s plan care together</h2>
            <p className="mt-2 text-white/80 dark:text-slate-800/80">
              Tell us about your loved one and we&apos;ll design a care pathway that fits your goals and budget.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {actions.map((action) => {
              const Icon = action.icon;

              if (action.kind === "internal") {
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:border-slate-800/50 dark:bg-slate-800/60 dark:text-white dark:hover:bg-slate-800/80 dark:focus-visible:ring-slate-800"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {action.label}
                  </Link>
                );
              }

              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:border-slate-800/50 dark:bg-slate-800/60 dark:text-white dark:hover:bg-slate-800/80 dark:focus-visible:ring-slate-800"
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
