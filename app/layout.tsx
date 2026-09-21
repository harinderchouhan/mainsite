import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/leadgen/WhatsAppButton";
import { StickyCtaBar } from "@/components/leadgen/StickyCtaBar";
import { ExitIntentModal } from "@/components/leadgen/ExitIntentModal";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = "https://www.hanuitsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HanuiT Solutions — Websites for Pest Control & Dental Businesses",
    template: "%s | HanuiT Solutions",
  },
  description:
    "HanuiT Solutions designs and builds websites, SEO, ads, and social media for pest control companies and dental practices. 1000+ clients served, 12+ years of experience.",
  keywords: [
    "pest control website design",
    "dentist website design",
    "dental website design",
    "pest control SEO",
    "dental SEO",
    "web design",
    "HanuiT Solutions",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "HanuiT Solutions — Websites for Pest Control & Dental Businesses",
    description:
      "Websites, SEO, ads, and social media built specifically for pest control companies and dental practices. 1000+ clients served, 12+ years of experience.",
    url: siteUrl,
    siteName: "HanuiT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HanuiT Solutions — Websites for Pest Control & Dental Businesses",
    description:
      "Websites, SEO, ads, and social media built specifically for pest control companies and dental practices.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCtaBar />
        <ExitIntentModal />
      </body>
    </html>
  );
}
