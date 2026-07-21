"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { projects, projectDomain, type Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const filterTabs = ["All", "Websites", "Web Apps", "Mobile Apps"] as const;
type Filter = (typeof filterTabs)[number];

const categoryMap: Record<Filter, Project["category"] | null> = {
  All: null,
  Websites: "Website",
  "Web Apps": "Web App",
  "Mobile Apps": "Mobile App",
};

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    categoryMap[activeFilter] === null
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeFilter]);

  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="bg-mist px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const count =
                categoryMap[tab] === null
                  ? projects.length
                  : projects.filter((p) => p.category === categoryMap[tab])
                      .length;
              const active = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-ink text-white shadow-sm"
                      : "bg-white text-stone-600 ring-1 ring-black/5 hover:bg-stone-50"
                  }`}
                >
                  {tab}
                  <span
                    className={`text-xs ${
                      active ? "text-white/50" : "text-stone-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects grid */}
          <motion.div
            key={activeFilter}
            className="mt-10 grid gap-5 md:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      <ClosingCTASection />
    </main>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="glow-emerald absolute -top-24 left-1/2 h-[360px] w-[600px] -translate-x-1/2"
        aria-hidden
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-36 md:pt-44"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400"
        >
          Our work
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl"
        >
          Built for real goals.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60"
        >
          Every project here started with a problem to solve. Here’s what we
          built and why — websites, web apps, and mobile apps for clients in
          Nigeria and worldwide.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = project.problem && project.solution && project.result;

  return (
    <motion.article
      variants={fadeUp}
      className="flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <ProjectMedia
        desktopImage={project.desktopImage}
        phoneImage={project.phoneImage}
        alt={project.imageAlt}
        domain={projectDomain(project.link)}
      />

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
            {project.category}
          </span>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-950"
            >
              Live site
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : null}
        </div>

        <h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">
          {project.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          {project.description}
        </p>

        {hasCaseStudy ? (
          <dl className="mt-5 space-y-4 rounded-2xl bg-mist p-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">
                Problem
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-600">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">
                Solution
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-600">
                {project.solution}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-emerald-600">
                Result
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-700">
                {project.result}
              </dd>
            </div>
          </dl>
        ) : null}
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   CLOSING CTA
───────────────────────────────────────── */
function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink px-6 py-28">
      <div
        className="glow-emerald absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2"
        aria-hidden
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Want to be on this page?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/60">
          Tell us what you’re building and we’ll take it from there.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
