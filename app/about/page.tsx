import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "WorkLoad HQ is a lean digital studio based in Nigeria, building websites, web apps, mobile apps, and AI automations for clients worldwide. Direct access, fixed quotes, fast delivery.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/about",
  },
  openGraph: {
    title: "About | WorkLoad HQ",
    description:
      "A lean digital studio based in Nigeria, building websites, apps, and AI automations for clients worldwide.",
    url: "https://workload-hq.vercel.app/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About WorkLoad HQ",
      },
    ],
  },
  twitter: {
    title: "About | WorkLoad HQ",
    description:
      "A lean digital studio based in Nigeria, building websites, apps, and AI automations for clients worldwide.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
