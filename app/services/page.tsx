"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Layers,
  LayoutGrid,
  Sparkles,
  Target,
  Wand2,
  Zap,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: typeof Sparkles;
};

type Deliverable = {
  title: string;
  detail: string;
};

type Engagement = {
  title: string;
  timeline: string;
  summary: string;
};

function useActiveIndex<T extends HTMLElement>() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!containerRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!containerRef.current.contains(target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return { activeIndex, setActiveIndex, containerRef };
}

const services: Service[] = [
  {
    title: "Brand Sites",
    description:
      "Elegant, high-converting websites with refined typography and precise motion.",
    icon: LayoutGrid,
  },
  {
    title: "Product Launch",
    description:
      "Polished launch pages built for speed, clarity, and conversion.",
    icon: Zap,
  },
  {
    title: "UX Systems",
    description:
      "Design systems and UI libraries that keep your brand consistent at scale.",
    icon: Layers,
  },
  {
    title: "Growth Labs",
    description:
      "Iterative landing page and funnel experiments grounded in analytics.",
    icon: Target,
  },
];

const deliverables: Deliverable[] = [
  {
    title: "Discovery Sprints",
    detail:
      "Audience, positioning, and competitive framing so every screen is purposeful.",
  },
  {
    title: "Design Systems",
    detail:
      "Component libraries with typography, spacing, and motion tokens ready to scale.",
  },
  {
    title: "Responsive Build",
    detail:
      "Pixel-precise layouts across mobile, tablet, and desktop with fast load times.",
  },
  {
    title: "Conversion Layer",
    detail:
      "Strategic messaging, CTA sequencing, and conversion-focused page structure.",
  },
];

const engagements: Engagement[] = [
  {
    title: "Launch Sprint",
    timeline: "2-4 business days",
    summary: "Tight scope, fast turnaround, one premium marketing page.",
  },
  {
    title: "Brand Platform",
    timeline: "1-3 weeks",
    summary: "Multi-page website with strategy, UX, and a scalable system.",
  },
  {
    title: "Growth Partnership",
    timeline: "Ongoing",
    summary: "Monthly experiments, landing pages, and optimization cycles.",
  },
];

export default function ServicesPage() {
  const serviceActive = useActiveIndex<HTMLDivElement>();
  const deliverableActive = useActiveIndex<HTMLDivElement>();
  const engagementActive = useActiveIndex<HTMLDivElement>();

  return (
    <main className="min-h-screen pb-24 pt-0">
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3, 43, 40, 0.9) 0%, rgba(10, 27, 34, 0.6) 45%, rgba(255,255,255,0.95) 100%), url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-20 text-emerald-100">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
            Services
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
            Quietly ambitious
            <span className="block text-emerald-100">digital craftsmanship.</span>
          </h1>
          <p className="max-w-3xl text-lg text-white/80 md:text-xl">
            Launch-focused teams, product squads, and founders rely on WorkLoad
            HQ for fast, elegant, commercially driven digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white/90 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg shadow-emerald-900/30 transition hover:bg-white active:scale-95"
            >
              Book an Alignment Call
            </a>
            <a
              href="/portfolio"
              className="rounded-full border border-white/60 bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:text-emerald-50 active:scale-95"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Core Services
            </p>
            <h2 className="text-3xl font-semibold text-stone-950 md:text-4xl">
              The foundations we build with.
            </h2>
            <p className="max-w-2xl text-sm text-emerald-800 md:text-base">
              Every engagement is an exercise in restraint—luxury feels effortless
              when the interface is fine-tuned for clarity, speed, and trust.
            </p>
          </div>
          <div
            className="grid gap-6 md:grid-cols-2"
            ref={serviceActive.containerRef}
          >
            {services.map((service, index) => {
              const isActive = serviceActive.activeIndex === index;

              return (
                <div
                  key={service.title}
                  className={`rounded-3xl border border-emerald-200/60 bg-white/80 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                    isActive
                      ? "-translate-y-1 shadow-xl"
                      : "hover:-translate-y-1 hover:shadow-xl"
                  }`}
                  onClick={() => serviceActive.setActiveIndex(index)}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-emerald-800">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Deliverables
            </p>
            <h2 className="text-3xl font-semibold text-stone-950 md:text-4xl">
              More than a website. A full system.
            </h2>
            <p className="max-w-2xl text-sm text-emerald-800 md:text-base">
              We balance strategy, design, and engineering so every launch is both
              beautiful and measurable.
            </p>
          </div>
          <div
            className="grid gap-6 md:grid-cols-2"
            ref={deliverableActive.containerRef}
          >
            {deliverables.map((item, index) => {
              const isActive = deliverableActive.activeIndex === index;

              return (
                <div
                  key={item.title}
                  className={`flex gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
                    isActive
                      ? "-translate-y-1 shadow-md"
                      : "hover:-translate-y-1 hover:shadow-md"
                  }`}
                  onClick={() => deliverableActive.setActiveIndex(index)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
                    <Wand2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-emerald-800">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
            Engagements
          </p>
          <h2 className="text-3xl font-semibold text-stone-950 md:text-4xl">
            Choose the pace that fits your team.
          </h2>
          <p className="max-w-2xl text-sm text-emerald-800 md:text-base">
            We can move fast for launches or stay embedded for long-term growth.
          </p>
        </div>
        <div
          className="grid gap-6 md:grid-cols-3"
          ref={engagementActive.containerRef}
        >
          {engagements.map((engagement, index) => {
            const isActive = engagementActive.activeIndex === index;

            return (
              <div
                key={engagement.title}
                className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                  isActive
                    ? "-translate-y-1 shadow-xl"
                    : "hover:-translate-y-1 hover:shadow-xl"
                }`}
                onClick={() => engagementActive.setActiveIndex(index)}
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                  <Clock className="h-4 w-4" />
                  {engagement.timeline}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-stone-950">
                  {engagement.title}
                </h3>
                <p className="mt-3 text-sm text-emerald-800">
                  {engagement.summary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Tailored scope
                </div>
              </div>
            );
          })}
        </div>
      </section>
   </main>
 );
}
