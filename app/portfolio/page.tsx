"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  LayoutGrid,
  Sparkles,
  Wand2,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";

export const projects = [
  {
    title: "WorkLoad Saas Admin Dashboard",
    category: "Dashboard / Admin UI",
    featured: true,
    link: "https://workload-saas-admin.vercel.app/",
    problem:
      "The client needed a centralized dashboard to manage operations, track performance, and monitor team activity in a clean, scalable interface.",
    solution:
      "Designed and built a modern SaaS admin dashboard with analytics widgets, task management, user controls, and responsive navigation, structured for real-time data integration and future scalability.",
    result:
      "Delivered a polished, production-ready admin system that streamlines operations, improves visibility across workflows, and provides a strong foundation for scaling the client’s platform.",
    desktopImage: "/images/portfolio-workloadsaas-desktop.jpg",
    phoneImage: "/images/portfolio-workloadsaas-phone.jpg",
    imageAlt: "WorkLoad Saas website preview",
  },
  {
    title: "LuxeEstate Real Estate Website",
    category: "Real Estate & PropTech",
    featured: true,
    link: "https://luxe-estate-two.vercel.app/",
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
    title: "Nailtech Appointment Website",
    category: "Beauty & Wellness",
    featured: true,
    link: "https://the-nail-tech.vercel.app/",
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
    featured: false,
    link: "https://enterprise-admin-ui.vercel.app/",
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
];

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
      "Responsive, Full Websites, interface-driven builds with data visualization, bulk actions, and polished microinteractions.",
    icon: LayoutGrid,
  },
  {
    title: "Content & Storytelling Hubs",
    detail:
      "Editorial-ready layouts that marry narrative copy with hero visuals, case studies, and evergreen resources.",
    icon: Layers,
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
    <main className="min-h-screen pb-24 pt-0">
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(2, 68, 51, 0.9) 0%, rgba(11, 45, 34, 0.65) 40%, rgba(255,255,255,0.9) 100%), url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-20 text-emerald-100">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
            Showcase
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
            Portfolio
            <span className="block text-emerald-100">quietly luxurious.</span>
          </h1>
          <p className="max-w-3xl text-lg text-white/80 md:text-xl">
            Selected projects built for confident teams that need modern, mobile
            -first experiences with visible business results.
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
            Strategic, high-end builds with a nimble execution
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-emerald-800 md:text-base">
            We partner with founders and marketing teams to produce launch-ready
            sites, dashboards, and campaigns that feel expensive without the
            face value price.
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
            From promo-focused landing pages to enterprise dashboards, we design
            each project to showcase the work, push conversions, and stay
            endlessly maintainable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {websiteTypes.map((type) => (
            <div
              key={type.title}
              className="flex gap-4 rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
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
