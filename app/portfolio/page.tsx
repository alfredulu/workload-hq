"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Sparkles, Wand2 } from "lucide-react";

export const projects = [
  {
    title: "SME Booking Dashboard",
    category: "Local Services",
    featured: true,
    problem: "Client needed a way to showcase services without manual DMs.",
    solution:
      "Built a mobile-first, high-speed landing page with a direct WhatsApp bridge for instant conversion.",
    result: "Improved customer engagement.",
    desktopImage: "/images/portfolio-booking-desktop.jpg",
    phoneImage: "/images/portfolio-booking-phone.jpg",
    imageAlt: "SME booking dashboard preview",
  },
  {
    title: "Retail Landing Page Solution",
    category: "Retail & Commerce",
    featured: true,
    problem:
      "Client had social-only traffic and no central place to convert visitors.",
    solution:
      "Designed a clean, trust-focused site with clear offers and fast inquiry flow.",
    result: "Improved customer engagement.",
    desktopImage: "/images/portfolio-retail-desktop.jpg",
    phoneImage: "/images/portfolio-retail-phone.jpg",
    imageAlt: "Retail landing page preview",
  },
  {
    title: "Salon Appointment Flow",
    category: "Beauty & Wellness",
    featured: true,
    problem:
      "Client needed faster booking without phone calls or back-and-forth.",
    solution:
      "Created a simple booking experience with service cards and CTA routing.",
    result: "Improved customer engagement.",
    desktopImage: "/images/portfolio-salon-desktop.jpg",
    phoneImage: "/images/portfolio-salon-phone.jpg",
    imageAlt: "Salon appointment site preview",
  },
  {
    title: "Logistics Service Hub",
    category: "Logistics & Transport",
    featured: false,
    problem:
      "Client needed credibility and a clear service breakdown for new leads.",
    solution:
      "Built a lightweight site with pricing clarity and direct contact actions.",
    result: "Improved customer engagement.",
    desktopImage: "/images/portfolio-logistics-desktop.jpg",
    phoneImage: "/images/portfolio-logistics-phone.jpg",
    imageAlt: "Logistics service site preview",
  },
];

export default function Portfolio() {
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
    <main className="min-h-screen pb-24 pt-28">
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-stone-950 md:text-6xl">
          Selected work that feels
          <span className="block text-stone-600">quietly luxurious.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-emerald-800 md:text-base">
          We partner with ambitious teams to craft digital experiences that are
          restrained, modern, and built for conversion.
        </p>
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
              className={`group rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative -mx-2 h-56 w-[calc(100%+1rem)] overflow-hidden rounded-xl bg-gradient-to-br from-white/90 to-emerald-50/70 md:-mx-3 md:w-[calc(100%+1.5rem)]">
                <div
                  className="absolute inset-0 z-0 scale-105 bg-cover bg-center blur-md"
                  style={{ backgroundImage: `url(${project.desktopImage})` }}
                />
                <img
                  src={project.desktopImage}
                  alt={project.imageAlt}
                  className="relative z-10 h-full w-full object-contain"
                />
                <img
                  src={project.phoneImage}
                  alt=""
                  className="absolute bottom-4 right-4 z-20 h-28 w-14 rounded-lg border border-white/80 object-cover shadow-lg shadow-emerald-900/20"
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
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900"
              >
                <Sparkles className="h-4 w-4" />
                View Project
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}





