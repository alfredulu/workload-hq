import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "WorkLoad HQ | Nigerian Digital Agency",
  },
  description:
    "WorkLoad HQ builds conversion-focused websites, web apps and mobile apps for modern brands. Fast delivery, clean design, real results. Based in Nigeria, serving clients worldwide.",
  alternates: {
    canonical: "https://workload-hq.vercel.app",
  },
};

export default function Home() {
  return <HomeContent />;
}
