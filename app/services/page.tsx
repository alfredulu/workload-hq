import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WorkLoad HQ offers website development, web apps, mobile apps, AI automation, startup technical partnership, and brand identity. Fast sprints or long-term engagements. Serving founders and product teams in Nigeria and worldwide.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/services",
  },
  openGraph: {
    title: "Services | WorkLoad HQ",
    description:
      "Website development, mobile app development, launch pages, and UX design. WorkLoad HQ serves founders and product teams in Nigeria and worldwide.",
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
      "Website development, mobile app development, launch pages, and UX design from WorkLoad HQ.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
