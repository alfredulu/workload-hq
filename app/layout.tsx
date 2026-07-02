import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MaintenancePage from "@/components/MaintenancePage";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workload-hq.vercel.app"),
  title: {
    default: "WorkLoad HQ | Website & Mobile App Development Agency",
    template: "%s | WorkLoad HQ",
  },
  description:
    "WorkLoad HQ is a Nigerian website and mobile app development agency. We build fast, conversion-focused websites and mobile apps for founders, product teams, and growing businesses.",
  openGraph: {
    title: "WorkLoad HQ | Website & Mobile App Development Agency",
    description:
      "Nigerian website and mobile app development agency. We build fast, conversion-focused websites and mobile apps for modern brands.",
    url: "https://workload-hq.vercel.app",
    siteName: "WorkLoad HQ",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorkLoad HQ - Website & Mobile App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkLoad HQ | Website & Mobile App Development Agency",
    description:
      "We build fast, conversion-focused websites and mobile apps for modern brands.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "Vg5p8f7FxYNYmGb9vidDAjC5cI0PUt_8kVSu1gVI5oA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WorkLoad HQ",
  url: "https://workload-hq.vercel.app",
  logo: "https://workload-hq.vercel.app/images/logo.svg",
  description:
    "Website and mobile app development agency based in Nigeria. We build fast, clean websites and mobile apps for modern brands worldwide.",
  email: "workloadhq@gmail.com",
  foundingLocation: {
    "@type": "Place",
    name: "Nigeria",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
  },
  areaServed: "Worldwide",
  knowsLanguage: "en",
  sameAs: [
    "https://www.instagram.com/workload_hq/",
    "https://www.tiktok.com/@workload_hq",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "workloadhq@gmail.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    return (
      <html lang="en" className={inter.variable}>
        <body className="antialiased">
          <MaintenancePage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
