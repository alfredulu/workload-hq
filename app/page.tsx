import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "WorkLoad HQ | Nigerian Digital Agency",
  },
  description:
    "WorkLoad HQ builds fast, clean websites and web apps for modern brands. Based in Nigeria, serving clients worldwide. Fast delivery, real results.",
  alternates: {
    canonical: "https://workload-hq.vercel.app",
  },
  openGraph: {
    title: "WorkLoad HQ | Nigerian Digital Agency",
    description:
      "WorkLoad HQ builds fast, clean websites and web apps for modern brands. Based in Nigeria, serving clients worldwide.",
    url: "https://workload-hq.vercel.app",
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
    title: "WorkLoad HQ | Nigerian Digital Agency",
    description:
      "WorkLoad HQ builds fast, clean websites and web apps for modern brands.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeContent />;
}
