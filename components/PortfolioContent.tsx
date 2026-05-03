"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  Layers,
  LayoutGrid,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { projects } from "@/data/projects";

const websiteTypes: {
  title: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Landing & Promotional Pages",
    detail:
      "High-converting hero sections, concise storytelling, and clear CTAs built to turn browsers into leads.",
    icon: Sparkles,
  },
  {
    title: "Product & Launch Minisites",
    detail:
      "Clean, focused experiences with tiered features, social proof, and launch timers when timing matters.",
    icon: Wand2,
  },
  {
    title: "Web Apps & Dashboards",
    detail:
      "Responsive, full-stack builds with data visualization, bulk actions, and polished microinteractions.",
    icon: LayoutGrid,
  },
  {
    title: "Content & Storytelling Hubs",
    detail:
      "Layouts built for editorial content, case studies, and long-form pages that hold attention.",
    icon: Layers,
  },
];

export default function PortfolioContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!gridRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!gridRef.current.contains(target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <main className="min-h-screen pb-24 pt-0">
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/portfolio-hero.jpg"
          alt="WorkLoad HQ web design and development project portfolio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2, 68, 51, 0.9) 0%, rgba(11, 45, 34, 0.65) 40%, rgba(255,255,255,0.9) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-20 text-emerald-100">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
            Showcase
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
            Portfolio
            <span className="block text-emerald-100">built to perform.</span>
          </h1>
          <p className="max-w-3xl text-lg text-white/80 md:text-xl">
            Selected projects built for confident teams that need modern,
            mobile-first experiences with visible business results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white/90 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg shadow-emerald-900/30 transition hover:bg-white active:scale-95"
            >
              Commission a Project
            </a>
            <a
              href="/services"
              className="rounded-full border border-white/60 bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:text-emerald-50 active:scale-95"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
            Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-950">
            Projects built to perform and built to last
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-emerald-800 md:text-base">
            We work with founders and marketing teams to build professional
            websites and dashboards at fair prices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/#faq"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 shadow-sm transition hover:border-emerald-300 active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              Visit Home FAQ
            </a>
          </div>
        </div>
      </section>
      <section
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2"
        ref={gridRef}
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={project.title}
              className={`group rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="-mx-2 md:-mx-3">
                <ProjectMedia
                  desktopImage={project.desktopImage}
                  phoneImage={project.phoneImage}
                  alt={project.imageAlt}
                  variant="tall"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-stone-950">
                {project.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm text-emerald-800">
                <p>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                    <AlertTriangle className="h-4 w-4" />
                    Problem
                  </span>
                  <span className="mt-2 block">{project.problem}</span>
                </p>
                <p>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                    <Wand2 className="h-4 w-4" />
                    Solution
                  </span>
                  <span className="mt-2 block">{project.solution}</span>
                </p>
                <p>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Result
                  </span>
                  <span className="mt-2 block">{project.result}</span>
                </p>
              </div>
              <a
                href={project.link || "/contact"}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900"
              >
                <Sparkles className="h-4 w-4" />
                View Project
              </a>
            </div>
          );
        })}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
            Deliverables
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-950">
            Different types of websites we build
          </h2>
          <p className="mt-2 text-sm text-emerald-800">
            From landing pages to enterprise dashboards, each project is
            designed to convert and stay easy to update.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {websiteTypes.map((type) => (
            <div
              key={type.title}
              className="flex gap-4 rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-linear-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
                <type.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-stone-950">
                  {type.title}
                </p>
                <p className="mt-2 text-sm text-emerald-800">{type.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
