import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse WorkLoad HQ's project portfolio. Real estate platforms, SaaS dashboards, salon booking sites, and enterprise admin UIs built for Nigerian and international clients.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/portfolio",
  },
  openGraph: {
    title: "Portfolio | WorkLoad HQ",
    description:
      "Real estate platforms, SaaS dashboards, booking sites, and admin UIs built by WorkLoad HQ for clients in Nigeria and internationally.",
    url: "https://workload-hq.vercel.app/portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorkLoad HQ Portfolio",
      },
    ],
  },
  twitter: {
    title: "Portfolio | WorkLoad HQ",
    description:
      "Real estate platforms, SaaS dashboards, booking sites, and admin UIs built by WorkLoad HQ.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
