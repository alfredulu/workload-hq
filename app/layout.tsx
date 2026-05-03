import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workload-hq.vercel.app"),
  title: {
    default: "WorkLoad HQ | Nigerian Digital Agency",
    template: "%s | Workload Studios",
  },
  description:
    "WorkLoad HQ is a Nigerian digital agency that builds fast, conversion-focused websites, web apps and mobile apps for modern brands. We work with founders, product teams, and growing businesses who need results.",
  openGraph: {
    title: "WorkLoad HQ | Nigerian Digital Agency",
    description:
      "WorkLoad HQ is a Nigerian digital agency that builds fast, conversion-focused websites, mobile apps and web apps for modern brands.",
    url: "https://workload-hq.vercel.app",
    siteName: "WorkLoad HQ",
    images: [{ url: "/images/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
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
