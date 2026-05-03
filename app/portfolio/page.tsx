import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse WorkLoad HQ's project portfolio. Real estate platforms, SaaS dashboards, salon booking sites, and enterprise admin UIs built for Nigerian and international clients.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
