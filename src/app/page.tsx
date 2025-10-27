import { Assurance } from "@/components/Assurance";
import { ContactStrip } from "@/components/ContactStrip";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesTeaser } from "@/components/ServicesTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <HowItWorks />
      <Assurance />
      <ContactStrip />
    </>
  );
}
