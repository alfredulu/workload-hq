import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Get in touch with WorkLoad HQ. Tell us about your project and we will respond with a clear scope and timeline. Email, Instagram, TikTok, or WhatsApp.",
  alternates: {
    canonical: "https://workload-hq.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
