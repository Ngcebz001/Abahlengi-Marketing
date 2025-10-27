import Script from "next/script";

type SeoProps = {
  jsonLd?: Record<string, unknown>[];
};

export function Seo({ jsonLd = [] }: SeoProps) {
  if (!jsonLd.length) {
    return null;
  }

  return jsonLd.map((schema, index) => (
    <Script
      key={index}
      id={`jsonld-${index}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
