"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

export default function ServicesContent() {
  return (
    <main className="min-h-screen pt-0">
      <HeroSection />
      <WebsitesSection />
      <WebAppsSection />
      <MobileAppsSection />
      <LogoBrandSection />
      <ClosingCTASection />
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
        src="/images/services-hero.jpg"
        alt="WorkLoad HQ services overview"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3, 43, 40, 0.9) 0%, rgba(10, 27, 34, 0.6) 45%, rgba(255,255,255,0.95) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-20 text-emerald-100">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
          Services
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          We build websites, apps,
          <span className="block text-emerald-100">and brand identities.</span>
        </h1>
        <p className="max-w-3xl text-lg text-white/80 md:text-xl">
          Founders, product teams, small businesses, and individuals work with
          WorkLoad HQ when they need something built properly.
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
              href="/portfolio"
              className="inline-block rounded-full border border-white/60 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   REUSABLE — Included Card
───────────────────────────────────────── */
function IncludedCard({
  items,
  bg,
}: {
  items: string[];
  bg: "stone" | "white";
}) {
  return (
    <div
      className={`rounded-2xl p-6 h-full ${
        bg === "stone" ? "bg-stone-100" : "bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-4">
        What is included
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────
   SERVICE SECTION 1 — WEBSITES (bg-white)
───────────────────────────────────────── */
function WebsitesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-stone-950 mb-4">Websites</h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            Whether you need a single landing page or a full multi-page site, we
            design and build it from scratch. Every site is mobile-first, fast,
            and set up for search engines. We handle design, development, domain
            setup, and hosting.
          </p>
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            3 to 7 days typical delivery
          </span>
        </div>

        {/* Included card */}
        <IncludedCard
          bg="stone"
          items={[
            "Custom responsive design",
            "Mobile and desktop optimised",
            "SEO basics: metadata, sitemap, structured content",
            "Contact forms and CTAs",
            "Domain and hosting setup",
            "One month of post-launch support",
          ]}
        />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVICE SECTION 2 — WEB APPS (bg-stone-100)
───────────────────────────────────────── */
function WebAppsSection() {
  return (
    <section className="bg-stone-100 py-24 px-6">
      <motion.div
        className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Included card first (flipped layout) */}
        <IncludedCard
          bg="white"
          items={[
            "Full stack: frontend and backend",
            "Database design and setup",
            "User authentication and access control",
            "Third party API integrations",
            "Deployment and configuration",
            "Ongoing maintenance available",
          ]}
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-stone-950 mb-4">
            Web Applications
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            If your project needs more than a website, something users log into,
            manage data through, or interact with every day, we build that.
            Admin dashboards, SaaS products, booking systems, internal tools,
            and anything that needs a real backend.
          </p>
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            10 to 15 days depending on scope
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVICE SECTION 3 — MOBILE APPS (bg-white)
───────────────────────────────────────── */
function MobileAppsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-stone-950 mb-4">Mobile Apps</h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            We build cross-platform mobile apps using React Native, meaning your
            app runs on both Android and iOS from one codebase. From the first
            screen to app store submission, we handle the full build.
          </p>
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            10 to 15 days depending on scope
          </span>
        </div>

        {/* Included card */}
        <IncludedCard
          bg="stone"
          items={[
            "Cross-platform: Android and iOS",
            "Native-feeling UI and interactions",
            "Backend and API connections",
            "Push notifications",
            "App Store and Google Play submission support",
          ]}
        />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVICE SECTION 4 — LOGO + BRAND (bg-stone-100)
───────────────────────────────────────── */
function LogoBrandSection() {
  return (
    <section className="bg-stone-100 py-24 px-6">
      <motion.div
        className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Included card first (flipped layout) */}
        <IncludedCard
          bg="white"
          items={[
            "Logo design with multiple directions",
            "Colour palette",
            "Typography selection",
            "Brand usage guidelines",
            "Files for print and digital use",
          ]}
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-stone-950 mb-4">
            Logo and Brand Identity
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            Your logo is often the first thing people see. We design logos and
            brand identities that are clean, memorable, and work across every
            surface: your website, social profiles, and anywhere else you show
            up.
          </p>
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            3 to 5 days
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CLOSING CTA (bg-emerald-950)
───────────────────────────────────────── */
function ClosingCTASection() {
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
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-emerald-200 text-base max-w-xl mx-auto mb-10">
            Tell us what you are trying to do. We will point you in the right
            direction and give you a clear quote.
          </p>
          <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-950 shadow-lg transition hover:bg-stone-100"
            >
              Talk to Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
