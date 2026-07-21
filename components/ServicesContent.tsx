"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

type Service = {
  number: string;
  title: string;
  body: string;
  timeline: string;
  included: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    body: "Whether you need a single landing page or a full multi-page site, we design and build it from scratch. Every site is mobile-first, fast, and set up for search engines. We handle design, development, domain setup, and hosting.",
    timeline: "3–7 days typical delivery",
    included: [
      "Custom responsive design",
      "Mobile and desktop optimised",
      "SEO basics: metadata, sitemap, structured content",
      "Contact forms and CTAs",
      "Domain and hosting setup",
      "One month of post-launch support",
    ],
  },
  {
    number: "02",
    title: "Web Applications",
    body: "If your project needs more than a website — something users log into, manage data through, or interact with every day — we build that. Admin dashboards, SaaS products, booking systems, internal tools, and anything that needs a real backend.",
    timeline: "10–15 days depending on scope",
    included: [
      "Full stack: frontend and backend",
      "Database design and setup",
      "User authentication and access control",
      "Third party API integrations",
      "Deployment and configuration",
      "Ongoing maintenance available",
    ],
  },
  {
    number: "03",
    title: "Mobile Apps",
    body: "We build cross-platform mobile apps using React Native, meaning your app runs on both Android and iOS from one codebase. From the first screen to app store submission, we handle the full build.",
    timeline: "10–15 days depending on scope",
    included: [
      "Cross-platform: Android and iOS",
      "Native-feeling UI and interactions",
      "Backend and API connections",
      "Push notifications",
      "App Store and Google Play submission support",
    ],
  },
  {
    number: "04",
    title: "AI Automation",
    body: "We build AI into how your business runs. Chat assistants that answer customers and capture leads while you sleep, automations that remove repetitive manual work, and AI features integrated directly into your website or product.",
    timeline: "5–10 days depending on scope",
    included: [
      "Custom AI chat assistants for support and lead capture",
      "Workflow automation across the tools you already use",
      "AI features built into your website or app",
      "Document and data processing pipelines",
      "WhatsApp and email automation",
      "Setup, training, and handover",
    ],
  },
  {
    number: "05",
    title: "Startup Technical Partner",
    body: "For founders who need a technical person in their corner. We scope and build your MVP, make the architecture calls, and stay on as your development team as you grow — so you can pitch, sell, and ship without hiring in-house.",
    timeline: "Flexible monthly engagements",
    included: [
      "MVP scoping and build",
      "Architecture and stack decisions",
      "Ongoing development sprints",
      "Code reviews and technical hiring support",
      "A technical voice in investor and client conversations",
      "Honest advice on what to build — and what not to",
    ],
  },
  {
    number: "06",
    title: "Logo & Brand Identity",
    body: "Your logo is often the first thing people see. We design logos and brand identities that are clean, memorable, and work across every surface: your website, social profiles, and anywhere else you show up.",
    timeline: "3–5 days",
    included: [
      "Logo design with multiple directions",
      "Colour palette",
      "Typography selection",
      "Brand usage guidelines",
      "Files for print and digital use",
    ],
  },
];

export default function ServicesContent() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {services.map((service, index) => (
        <ServiceSection
          key={service.number}
          service={service}
          flipped={index % 2 === 1}
          tinted={index % 2 === 1}
        />
      ))}

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
          Services
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl"
        >
          Websites, apps, and brand identities.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60"
        >
          Founders, product teams, small businesses, and individuals work with
          WorkLoad HQ when they need something built properly.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
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
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVICE SECTION
───────────────────────────────────────── */
function ServiceSection({
  service,
  flipped,
  tinted,
}: {
  service: Service;
  flipped: boolean;
  tinted: boolean;
}) {
  return (
    <section className={`px-6 py-20 ${tinted ? "bg-mist" : "bg-white"}`}>
      <motion.div
        className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className={flipped ? "md:order-2" : ""}>
          <p className="text-sm font-semibold text-emerald-600">
            {service.number}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
            {service.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-stone-600">
            {service.body}
          </p>
          <span className="mt-6 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-medium text-emerald-800">
            {service.timeline}
          </span>
        </div>

        <div
          className={`rounded-3xl border border-black/5 p-7 shadow-sm ${
            tinted ? "bg-white" : "bg-mist"
          } ${flipped ? "md:order-1" : ""}`}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
            What’s included
          </p>
          <ul className="mt-5 space-y-3.5">
            {service.included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-stone-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
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
          Not sure which service you need?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/60">
          Tell us what you’re trying to do. We’ll point you in the right
          direction and give you a clear quote.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
