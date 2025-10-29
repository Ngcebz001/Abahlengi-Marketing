import Link from "next/link";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="mt-16 bg-clay text-white dark:bg-slate-900 dark:text-slate-200">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl dark:text-slate-100">We are here when you need us most.</p>
          <p className="mt-4 text-sm text-white/80 dark:text-slate-300">
            Working with medical aids and private clients across South Africa.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90 dark:text-slate-400">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-white/80 no-underline transition hover:text-white dark:text-slate-300 dark:hover:text-slate-100" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="text-white/80 no-underline transition hover:text-white dark:text-slate-300 dark:hover:text-slate-100" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="block max-w-xs text-white/80 dark:text-slate-300">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province} {" "}
                {siteConfig.address.postalCode}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90 dark:text-slate-400">Stay connected</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-white/80 no-underline transition hover:text-white dark:text-slate-300 dark:hover:text-slate-100" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className="text-white/80 no-underline transition hover:text-white dark:text-slate-300 dark:hover:text-slate-100" href={`mailto:${siteConfig.email}`}>
                Email
              </a>
            </li>
            <li>
              <Link className="text-white/80 no-underline transition hover:text-white dark:text-slate-300 dark:hover:text-slate-100" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/20 dark:border-slate-800 py-4">
        <Container className="flex justify-center">
          <p className="text-xs text-white/60 dark:text-slate-400">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
