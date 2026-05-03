import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WorkLoad HQ offers brand sites, product launch pages, UX systems, and growth partnerships. Fast sprints or long-term engagements. Serving founders and product teams.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
