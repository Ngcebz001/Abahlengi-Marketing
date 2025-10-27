import type { Metadata } from "next";

const siteUrl = "https://www.abahlengi.co.za";

export const siteConfig = {
  name: "Abahlengi Group",
  shortName: "Abahlengi",
  description:
    "Abahlengi Group provides compassionate palliative care and at-home support across South Africa with experienced, vetted carers.",
  siteUrl,
  locale: "en_ZA",
  email: "care@abahlengi.co.za",
  phone: "+27 87 123 4567",
  whatsapp: "https://wa.me/27871234567?text=Hi%20Abahlengi%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20home%20care%20services.",
  address: {
    street: "46 Rivonia Road",
    city: "Sandton",
    province: "Gauteng",
    postalCode: "2196",
    country: "South Africa",
  },
  sameAs: [
    "https://www.facebook.com/abahlengi",
    "https://www.linkedin.com/company/abahlengi",
  ],
};

type MetadataInput = {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
};

export function createMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: MetadataInput = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Compassionate Care at Home`;
  const resolvedDescription = description ?? siteConfig.description;
  const url = canonical ?? siteConfig.siteUrl;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: "/images/og-default.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} brand graphic`,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: ["/images/og-default.svg"],
      ...twitter,
    },
    other: {
      "apple-mobile-web-app-title": siteConfig.shortName,
    },
  };
}

type JsonLd = Record<string, unknown>;

export function organisationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
