import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workload-hq.vercel.app"),
  title: {
    default: "WorkLoad HQ | Website Development Agency",
    template: "%s | WorkLoad HQ",
  },
  description:
    "WorkLoad HQ is a Nigerian digital agency that builds fast, conversion-focused websites and web apps for modern brands. We work with founders, product teams, and growing businesses who need results.",
  openGraph: {
    title: "WorkLoad HQ | Nigerian Digital Agency",
    description:
      "WorkLoad HQ is a Nigerian digital agency that builds fast, conversion-focused websites and web apps for modern brands.",
    url: "https://workload-hq.vercel.app",
    siteName: "WorkLoad HQ",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorkLoad HQ - Nigerian Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkLoad HQ | Nigerian Digital Agency",
    description:
      "We build fast, conversion-focused websites and web apps for modern brands.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
