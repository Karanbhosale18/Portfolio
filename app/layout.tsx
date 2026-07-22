import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Karan Bhosale",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Full Stack Java Developer",
    "Backend Engineer",
    "Computer Engineering Student",
    "Mumbai Software Developer",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Java Backend Developer",
  url: SITE.url,
  email: SITE.email,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  sameAs: [SITE.github, SITE.linkedin, SITE.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
