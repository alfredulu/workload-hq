import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Get in touch with WorkLoad HQ. Tell us about your project and we will respond with a clear scope and price. Reach us by email, Instagram, TikTok, or WhatsApp.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/contact",
  },
  openGraph: {
    title: "Let's Talk | WorkLoad HQ",
    description:
      "Tell WorkLoad HQ about your project. We respond fast with a clear scope and price.",
    url: "https://workload-hq.vercel.app/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact WorkLoad HQ",
      },
    ],
  },
  twitter: {
    title: "Let's Talk | WorkLoad HQ",
    description:
      "Tell WorkLoad HQ about your project. We respond fast with a clear scope and price.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
