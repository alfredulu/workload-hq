import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WorkLoad HQ offers brand sites, product launch pages, UX systems, and growth partnerships. Fast sprints or long-term engagements. Serving founders and product teams in Nigeria and worldwide.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/services",
  },
  openGraph: {
    title: "Services | WorkLoad HQ",
    description:
      "Brand sites, launch pages, UX systems, and growth partnerships. WorkLoad HQ serves founders and product teams in Nigeria and worldwide.",
    url: "https://workload-hq.vercel.app/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorkLoad HQ Services",
      },
    ],
  },
  twitter: {
    title: "Services | WorkLoad HQ",
    description:
      "Brand sites, launch pages, UX systems, and growth partnerships from WorkLoad HQ.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
