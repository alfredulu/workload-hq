"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const filterTabs = ["All", "Websites", "Web Apps", "Mobile Apps"] as const;
type Filter = (typeof filterTabs)[number];

const categoryMap: Record<Filter, string | null> = {
  All: null,
  Websites: "Website",
  "Web Apps": "Web App",
  "Mobile Apps": "Mobile App",
};

const websiteTypes: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "Landing and Promotional Pages",
    detail:
      "Single-page sites built around one goal. Whether that is capturing emails, selling a product, or getting someone to book a call, every element points toward one action.",
    icon: Sparkles,
  },
  {
    title: "Product and Launch Minisites",
    detail:
      "Multi-section experiences for launches and announcements. Social proof, feature breakdowns, pricing, and a countdown if timing matters.",
    icon: Wand2,
  },
  {
    title: "Web Apps and Dashboards",
    detail:
      "Full-stack builds for teams that need more than a website. Data tables, user authentication, bulk actions, and real-time updates. Built to be fast and easy to use.",
    icon: LayoutGrid,
  },
  {
    title: "Content and Storytelling Hubs",
    detail:
      "Sites built around content. Case studies, articles, editorial layouts, and category pages. Designed to hold attention.",
    icon: Layers,
  },
];

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    categoryMap[activeFilter] === null
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeFilter]);

  return (
    <main className="min-h-screen pt-0">
      <HeroSection />

      {/* Filter Tabs */}
      <section className="bg-white py-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeFilter === tab
                    ? "bg-emerald-950 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-stone-100 py-16 px-6">
        <div className="mx-auto max-w-6xl">
          {filteredProjects.length === 0 ? (
            <p className="text-stone-500 text-sm text-center py-12">
              No projects in this category yet.
            </p>
          ) : (
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              key={activeFilter}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-emerald-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="p-4">
                    <ProjectMedia
                      desktopImage={project.desktopImage}
                      phoneImage={project.phoneImage}
                      alt={project.imageAlt}
                      variant="tall"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {project.category}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold text-stone-950">
                      {project.title}
                    </h2>
                    <div className="mt-4 space-y-3">
                      <p className="flex items-start gap-2 text-sm text-stone-500">
                        <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                        {project.problem}
                      </p>
                      <p className="flex items-start gap-2 text-sm text-stone-600">
                        <Wand2 className="h-4 w-4 mt-0.5 shrink-0" />
                        {project.solution}
                      </p>
                      <p className="flex items-start gap-2 text-sm text-emerald-700">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        {project.result}
                      </p>
                    </div>
                    <a
                      href={project.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 hover:text-emerald-950 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Website Types */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-emerald-600" />
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">
                What we build
              </p>
            </div>
            <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">
              Different types of websites we build
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {websiteTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                  <type.icon className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-950">
                    {type.title}
                  </p>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {type.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-emerald-950 py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
              Want to be on this page?
            </h2>
            <p className="text-emerald-200 text-base max-w-xl mx-auto mb-10">
              Start a project with us.
            </p>
            <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg transition hover:bg-stone-100"
              >
                Let&apos;s Build Something
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
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
          Our work
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Built for real goals.
        </h1>
        <p className="max-w-3xl text-lg text-white/80 md:text-xl">
          Every project here started with a problem to solve. Here is what we
          built and why.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white/90 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg transition hover:bg-white"
            >
              Start a Project
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="inline-block rounded-full border border-white/60 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
            >
              See Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
