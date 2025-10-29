"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/Container";

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="section-spacing flex items-center justify-center">
      <Container className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-6 max-w-2xl">
          <div className="mx-auto w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-forest dark:text-forest-dark" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-forest dark:text-forest-dark">Thank you for reaching out</h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Our care managers have received your enquiry and will be in touch within one business day. If your needs are urgent, please call us directly.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
