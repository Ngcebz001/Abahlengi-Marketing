import Link from "next/link";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="mt-16 bg-clay text-white dark:bg-forest">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl">We are here when you need us most.</p>
          <p className="mt-4 text-sm text-white/80">
            Working with medical aids and private clients across South Africa.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="block max-w-xs text-white/80">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province} {" "}
                {siteConfig.address.postalCode}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Stay connected</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                Email
              </a>
            </li>
            <li>
              <Link className="hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/20 py-4">
        <Container className="flex flex-col gap-2 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {siteConfig.sameAs.map((link) => (
              <a key={link} href={link} className="hover:text-white" target="_blank" rel="noreferrer">
                {new URL(link).hostname.replace("www.", "")}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
