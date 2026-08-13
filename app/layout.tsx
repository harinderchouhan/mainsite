import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/leadgen/WhatsAppButton";
import { StickyCtaBar } from "@/components/leadgen/StickyCtaBar";
import { ExitIntentModal } from "@/components/leadgen/ExitIntentModal";

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
    default: "HanuiT Solutions — Digital Solutions for Business Growth",
    template: "%s | HanuiT Solutions",
  },
  description:
    "HanuiT Solutions designs and builds websites, e-commerce stores, and SEO strategies that grow real businesses. 1000+ clients served, 12+ years of experience.",
  keywords: [
    "web design",
    "web development",
    "SEO services",
    "ecommerce solutions",
    "WordPress services",
    "digital agency",
    "HanuiT Solutions",
  ],
  openGraph: {
    title: "HanuiT Solutions — Digital Solutions for Business Growth",
    description:
      "Websites, e-commerce, and SEO built to grow real businesses. 1000+ clients served, 12+ years of experience.",
    url: siteUrl,
    siteName: "HanuiT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HanuiT Solutions — Digital Solutions for Business Growth",
    description:
      "Websites, e-commerce, and SEO built to grow real businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
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
