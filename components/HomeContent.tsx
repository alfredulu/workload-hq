"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  LayoutGrid,
  Layers,
  Rocket,
  Smartphone,
  Sparkles,
} from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { featuredProjects, projectDomain } from "@/data/projects";

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
    transition: { staggerChildren: 0.08 },
  },
};

export default function HomeContent() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhatWeBuildSection />
      <SelectedWorkSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialSection />
      <FinalCTASection />
    </main>
  );
}

/* ─────────────────────────────────────────
   HERO — dark, typographic, no stock photos
───────────────────────────────────────── */
function HeroSection() {
  const [first, second, third] = featuredProjects;

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="glow-emerald absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Accepting new projects
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Websites and apps,{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              built properly.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/60 md:text-xl"
          >
            WorkLoad HQ designs and builds fast, clean digital products for
            founders and businesses that want to look good online and get
            results. Based in Nigeria, working worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              See our work
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xs tracking-wide text-white/35"
          >
            20+ projects shipped &nbsp;&middot;&nbsp; Websites
            &nbsp;&middot;&nbsp; Web apps &nbsp;&middot;&nbsp; Mobile apps
            &nbsp;&middot;&nbsp; AI automation &nbsp;&middot;&nbsp; Brand
            identity
          </motion.p>
        </motion.div>

        {/* Featured work collage */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative mt-16 w-full pb-0 md:mt-20"
        >
          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-3">
            <HeroShot project={second} className="hidden -rotate-2 md:block" />
            <HeroShot project={first} className="z-10 md:-translate-y-4" priority />
            <HeroShot project={third} className="hidden rotate-2 md:block" />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}

function HeroShot({
  project,
  className = "",
  priority = false,
}: {
  project: (typeof featuredProjects)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-card shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <Image
        src={project.desktopImage}
        alt={project.imageAlt}
        placeholder="blur"
        priority={priority}
        className="aspect-[16/10] w-full object-cover object-top"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   STATS
───────────────────────────────────────── */
const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "3 to 7 days", label: "Typical website delivery" },
  { value: "10 to 15 days", label: "Typical app delivery" },
  { value: "< 24h", label: "Reply to every inquiry" },
];

function StatsSection() {
  return (
    <section className="border-b border-black/5 bg-white px-6 py-16">
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center md:border-l md:border-black/5 md:first:border-l-0"
          >
            <p className="text-4xl font-semibold tracking-tight text-stone-950">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-stone-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHAT WE BUILD
───────────────────────────────────────── */
const services = [
  {
    icon: LayoutGrid,
    title: "Websites",
    body: "From single landing pages to full multi-page sites. Fast, mobile-friendly, and built to convert visitors into customers.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    body: "Dashboards, admin panels, SaaS products, and custom tools. If it needs a login and a backend, this is it.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    body: "Android and iOS apps: native, Flutter, or React Native. From booking apps to customer-facing products and internal tools.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    body: "Chat assistants that answer customers and capture leads, workflow automations, and AI features built into your product.",
  },
  {
    icon: Rocket,
    title: "Startup Technical Partner",
    body: "No technical co-founder? We scope and build your MVP, make the architecture calls, and stay on as your dev team.",
  },
  {
    icon: Sparkles,
    title: "Logo & Brand",
    body: "Logo design, colour palettes, and brand guidelines. For new projects launching or existing ones that need a sharper identity.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <p
        className={`text-xs font-medium uppercase tracking-[0.2em] ${
          dark ? "text-emerald-400" : "text-emerald-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function WhatWeBuildSection() {
  return (
    <section className="bg-mist px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What we build" title="Six things we do well." />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              className="group rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                <svc.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-stone-950">
                {svc.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {svc.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SELECTED WORK
───────────────────────────────────────── */
function SelectedWorkSection() {
  const [first, ...rest] = featuredProjects;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Some of what we’ve shipped."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-950"
            >
              View all work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Feature card */}
          <motion.article
            variants={fadeUp}
            className="grid items-center gap-8 rounded-3xl border border-black/5 bg-mist p-6 md:grid-cols-2 md:p-10"
          >
            <div>
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                {first.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                {first.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-stone-600">
                {first.description}
              </p>
              {first.link ? (
                <a
                  href={first.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-950"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : null}
            </div>
            <ProjectMedia
              desktopImage={first.desktopImage}
              phoneImage={first.phoneImage}
              alt={first.imageAlt}
              domain={projectDomain(first.link)}
            />
          </motion.article>

          {/* Secondary cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="flex flex-col rounded-3xl border border-black/5 bg-mist p-6"
              >
                <ProjectMedia
                  desktopImage={project.desktopImage}
                  phoneImage={project.phoneImage}
                  alt={project.imageAlt}
                  domain={projectDomain(project.link)}
                />
                <div className="mt-5 flex flex-1 flex-col">
                  <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-950"
                    >
                      Visit live site
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROCESS
───────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We learn what you’re trying to achieve, who it's for, and what success looks like. You get a clear plan and a fixed price.",
  },
  {
    number: "02",
    title: "Design",
    body: "We design the look, feel, and flow first, so you know exactly what you’re getting before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    body: "We build fast, clean, and mobile-first, with check-ins along the way so there are no surprises at the end.",
  },
  {
    number: "04",
    title: "Launch",
    body: "We handle domains, hosting, and deployment, then stay close after launch to keep everything running properly.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-mist px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How we work"
          title="A simple process, start to finish."
        />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-emerald-600">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-stone-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24">
      <div
        className="glow-emerald absolute -left-40 top-1/2 h-[360px] w-[520px] -translate-y-1/2"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            Who we are
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A small team that builds big things.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-white/60">
            WorkLoad HQ works with startups, founders, small businesses, and
            individuals who need something built properly. We’re a lean team,
            which means you deal directly with the people doing the work, and
            most of our clients come back for a second project.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-xl font-semibold text-white">3 to 7 days</p>
              <p className="mt-1 text-xs text-white/50">Typical website</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-xl font-semibold text-white">10 to 15 days</p>
              <p className="mt-1 text-xs text-white/50">Typical app</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-xl font-semibold text-white">Worldwide</p>
              <p className="mt-1 text-xs text-white/50">Clients served remotely</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIAL
───────────────────────────────────────── */
function TestimonialSection() {
  return (
    <section className="bg-white px-6 py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-balance text-2xl font-medium leading-relaxed tracking-tight text-stone-900 md:text-3xl">
          &ldquo;The admin dashboard WorkLoad HQ built us has transformed our
          operations. The polished dashboard and thoughtful mobile layout keep
          us fast and in control no matter where we are working.&rdquo;
        </p>
        <p className="mt-8 text-sm font-semibold text-stone-950">
          Samuel Carter
        </p>
        <p className="mt-1 text-sm text-emerald-600">
          Head of Operations, Auralis
        </p>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────── */
function FinalCTASection() {
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
          Ready to build something?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/60">
          Tell us what you need. We’ll come back with a clear plan and a price.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://wa.me/2347044811328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
          >
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-8 text-xs tracking-wide text-white/35">
          Fixed quote before we start &nbsp;&middot;&nbsp; Direct line to the
          people building &nbsp;&middot;&nbsp; One month of post-launch support
        </p>
      </motion.div>
    </section>
  );
}
