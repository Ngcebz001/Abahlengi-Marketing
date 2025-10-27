import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ThemeProvider } from "@/components/theme-provider";
import { createMetadata, organisationJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--fg)]">
        <a className="skip-to-content" href="#main-content">
          Skip to main content
        </a>
        <ThemeProvider>
          <Seo jsonLd={[organisationJsonLd()]} />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppFab href={siteConfig.whatsapp} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
