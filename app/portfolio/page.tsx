"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Sparkles, Wand2 } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";

export const projects = [
  {
    title: "LuxeEstate Real Estate Platform",
    category: "Real Estate & PropTech",
    featured: true,
    problem:
      "Client needed a modern platform to showcase luxury listings and convert high-intent visitors into inquiries.",
    solution:
      "Built a full-stack site with featured listings, advanced search, inquiry capture, and an admin dashboard for property and team management.",
    result:
      "Improved lead quality and streamlined updates for the client’s team.",
    desktopImage: "/images/portfolio-realestate-desktop.jpg",
    phoneImage: "/images/portfolio-realestate-phone.jpg",
    imageAlt: "Retail estate website preview",
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
    title: "Enterprise Admin UI",
    category: "Web App / Admin Dashboard",
    featured: true,
    problem:
      "Internal teams needed a single place to manage support tickets, users, and system settings efficiently, with fast filtering, bulk actions, and clear status visibility.",
    solution:
      "Built a responsive admin dashboard with searchable, sortable ticket tables, bulk updates, CSV export, and a persistent sidebar for navigation. Added real-time-friendly UI patterns (inline edits, status/priority controls) and mobile landscape fixes to keep navigation accessible.",
    result:
      "Streamlined ticket workflows and reduced time spent on repetitive updates by enabling bulk actions and quick filtering, while keeping the interface usable across device sizes and orientations.",
    desktopImage: "/images/portfolio-enterpriseadmin-desktop.jpg",
    phoneImage: "/images/portfolio-enterpriseadmin-phone.jpg",
    imageAlt: "admin dashboard preview",
  },
  {
    title: "Hopebridge Impact Platform",
    category: "Nonprofit storytelling & donor experience site",
    featured: false,
    problem: "Supporters saw Hopebridge as opaque, so engagement stalled.",
    solution:
      "Built a site with pricing clarity, mission narrative, program highlights, and direct contact actions.",
    result:
      "Visitors now move from story to contact in one flow, boosting clarity ahead of the next campaign.",
    desktopImage: "/images/portfolio-donationwebsite-desktop.jpg",
    phoneImage: "/images/portfolio-donationwebsite-phone.jpg",
    imageAlt: "donation site preview",
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
