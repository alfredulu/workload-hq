"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  LayoutGrid,
  Layers,
  Smartphone,
  Sparkles,
  Quote,
} from "lucide-react";
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

const featuredProjects = projects.filter((p) => p.featured);

export default function HomeContent() {
  return (
    <main className="min-h-screen pt-0">
      <HeroSection />
      <StatsSection />
      <WhatWeBuildSection />
      <SelectedWorkSection />
      <AboutStripSection />
      <WorkLadAISection />
      <TestimonialSection />
      <FinalCTASection />
    </main>
  );
}

/* ─────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/herobackground.jpg"
        alt="WorkLoad HQ creative workspace"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Badge */}
        <span className="w-fit rounded-full border border-emerald-300/50 bg-emerald-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
          Website &amp; App Development Agency
        </span>

        {/* H1 */}
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl leading-tight">
          Websites, apps, and
          <span className="block text-emerald-300">brand identities.</span>
          Built properly.
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          WorkLoad HQ designs and builds fast, clean digital products for people
          and businesses that want to look good online and get results. Based in
          Nigeria, working worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/portfolio"
              className="inline-block rounded-full border border-white/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10 active:scale-95"
            >
              See Our Work
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-emerald-950 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-emerald-900"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Trust strip */}
        <p className="text-xs tracking-wide text-emerald-200">
          20+ projects shipped &nbsp;&middot;&nbsp; Websites &nbsp;&middot;&nbsp; Web Apps
          &nbsp;&middot;&nbsp; Mobile Apps &nbsp;&middot;&nbsp; Logos
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2 — STATS
───────────────────────────────────────── */
const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "3-7 days", label: "Typical website delivery" },
  { value: "10-15 days", label: "Typical app delivery" },
];

function StatsSection() {
  return (
    <section className="bg-emerald-950 py-20 px-6">
      <motion.div
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.value} variants={item} className="text-center">
            <p className="text-5xl font-bold text-white">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-widest text-emerald-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — WHAT WE BUILD
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
    body: "Android and iOS apps built with React Native. From booking apps to customer-facing products and internal tools.",
  },
  {
    icon: Sparkles,
    title: "Logo and Brand",
    body: "Logo design, colour palettes, and brand guidelines. For new projects launching or existing ones that need a sharper identity.",
  },
];

function WhatWeBuildSection() {
  return (
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
            Four things we do well.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-emerald-100 border-t-4 border-t-emerald-600 bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 mb-5">
                <svc.icon className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950">{svc.title}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{svc.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — SELECTED WORK
───────────────────────────────────────── */
function SelectedWorkSection() {
  return (
    <section className="bg-stone-100 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-emerald-600" />
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">
                Selected work
              </p>
            </div>
            <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">
              Some of what we have shipped.
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Every project here started with a problem to solve.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-950 transition-colors whitespace-nowrap"
          >
            View all work &rarr;
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjects.map((project) => (
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
                />
              </div>
              <div className="px-6 pb-6">
                <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {project.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-stone-950">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{project.result}</p>
                <a
                  href={project.link || "/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 hover:text-emerald-950 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — ABOUT STRIP
───────────────────────────────────────── */
function AboutStripSection() {
  return (
    <section className="bg-emerald-950 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-emerald-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Who we are
            </p>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-6">
            A small team that builds big things.
          </h2>
          <p className="max-w-2xl text-emerald-200 text-base leading-relaxed mb-10">
            WorkLoad HQ is a digital agency based in Nigeria. We work with
            startups, founders, small businesses, and individuals who need
            something built properly. We are a lean team which means you deal
            directly with the people doing the work. Most of our clients come
            back for a second project.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="rounded-2xl border border-emerald-700 bg-emerald-900 px-6 py-4 text-center">
              <p className="text-white font-bold text-xl">3 to 7 days</p>
              <p className="mt-1 text-xs text-emerald-400 uppercase tracking-widest">
                Typical website
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-700 bg-emerald-900 px-6 py-4 text-center">
              <p className="text-white font-bold text-xl">10 to 15 days</p>
              <p className="mt-1 text-xs text-emerald-400 uppercase tracking-widest">
                Typical app
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — WORKLAD AI
───────────────────────────────────────── */
function WorkLadAISection() {
  const handleOpenWorkLad = () => {
    window.dispatchEvent(new Event("openWorkLad"));
  };

  return (
    <section className="bg-emerald-50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-emerald-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">
              WorkLad AI
            </p>
          </div>
          <h2 className="text-3xl font-bold text-stone-950 md:text-4xl mb-4">
            Not sure where to start?
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-8">
            Tell WorkLad what you want to build. It will ask you a few quick
            questions, scope it out, and get your brief straight to us on
            WhatsApp. No forms, no waiting.
          </p>
          <motion.button
            type="button"
            onClick={handleOpenWorkLad}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-emerald-950 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-emerald-900"
          >
            Talk to WorkLad
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 7 — TESTIMONIAL
───────────────────────────────────────── */
function TestimonialSection() {
  return (
    <section className="bg-stone-100 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
            <Quote className="h-8 w-8 text-emerald-100 mb-4" />
            <p className="text-stone-800 text-lg italic leading-relaxed">
              &ldquo;The admin dashboard WorkLoad HQ built us has transformed
              our operations. The polished dashboard and thoughtful mobile
              layout keep us fast and in control no matter where we are
              working.&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-stone-950">
                Samuel Carter
              </p>
              <p className="mt-1 text-sm text-emerald-600">
                Head of Operations, Auralis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 8 — FINAL CTA
───────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="bg-emerald-950 py-24 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to build something?
          </h2>
          <p className="text-emerald-200 text-base max-w-xl mx-auto mb-10">
            Tell us what you need. We will come back with a clear plan and a
            price.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg transition hover:bg-stone-100"
              >
                Start a Project
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/2347044811328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
