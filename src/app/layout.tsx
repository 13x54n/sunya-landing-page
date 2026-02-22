import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { siteDetails } from "@/data/siteDetails";
import { JsonLd } from "@/components/json-ld";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: {
    default: siteDetails.metadata.title,
    template: `%s | Sunya`,
  },
  description: siteDetails.metadata.description,
  keywords: siteDetails.metadata.keywords,
  authors: [{ name: siteDetails.metadata.author, url: siteDetails.siteUrl }],
  creator: siteDetails.metadata.author,
  publisher: siteDetails.metadata.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteDetails.locale,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteDetails.metadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteDetails.siteUrl,
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <JsonLd />
        <main>
          {children}
        </main>
        <Analytics />
        {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )}
      </body>
    </html>
  );
}
