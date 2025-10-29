"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

const navigation = [
  { href: "/" as Route, label: "Home" },
  { href: "/services" as Route, label: "Services" },
  { href: "/about" as Route, label: "About" },
  { href: "/contact" as Route, label: "Contact" },
] satisfies Array<{ href: Route; label: string }>;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-beige/85 dark:bg-background/85 shadow-md" : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-200",
            scrolled ? "h-16 md:h-20" : "h-20 md:h-24",
          )}
        >
          <div className="flex-shrink-0 min-w-0">
            <Logo />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive 
                      ? "text-forest dark:text-forest-dark" 
                      : "text-muted hover:text-forest dark:hover:text-forest-dark",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/60 text-forest hover:border-forest/80 hover:text-forest dark:text-forest-dark dark:border-sage/40 dark:hover:border-forest-dark/80 dark:hover:text-forest-dark"
              aria-label="Call Abahlengi"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/60 text-forest hover:border-forest/80 hover:text-forest dark:text-forest-dark dark:border-sage/40 dark:hover:border-forest-dark/80 dark:hover:text-forest-dark"
            >
              <span className="sr-only">Toggle navigation</span>
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-sage/30 bg-[var(--bg)] shadow-lg md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-medium",
                      isActive 
                        ? "text-forest dark:text-forest-dark" 
                        : "text-muted hover:text-forest dark:hover:text-forest-dark",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ThemeToggle />
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
