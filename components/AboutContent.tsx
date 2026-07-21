"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  MessagesSquare,
  Zap,
} from "lucide-react";

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

const values = [
  {
    icon: MessagesSquare,
    title: "Direct access",
    body: "No account managers, no hand-offs. You talk directly to the people designing and building your product, from the first call to launch.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed quotes, no surprises",
    body: "You get a clear plan and a fixed price before we write a line of code. The price we agree on is the price you pay.",
  },
  {
    icon: Zap,
    title: "Fast, honest timelines",
    body: "Websites typically ship in 3 to 7 days, apps in 10 to 15. If something will take longer, we tell you before we start, not after.",
  },
  {
    icon: HeartHandshake,
    title: "We stay after launch",
    body: "Every website includes a month of post-launch support, and maintenance plans keep things running long after. Most clients come back for a second project.",
  },
];

const stack: { name: string; logo: string }[] = [
  { name: "Next.js", logo: "/images/stack/nextjs.svg" },
  { name: "React", logo: "/images/stack/react.svg" },
  { name: "React Native", logo: "/images/stack/react.svg" },
  { name: "TypeScript", logo: "/images/stack/typescript.svg" },
  { name: "JavaScript", logo: "/images/stack/javascript.svg" },
  { name: "Node.js", logo: "/images/stack/nodejs.svg" },
  { name: "Python", logo: "/images/stack/python.svg" },
  { name: "PHP", logo: "/images/stack/php.svg" },
  { name: "Laravel", logo: "/images/stack/laravel.svg" },
  { name: "Tailwind CSS", logo: "/images/stack/tailwindcss.svg" },
  { name: "Flutter", logo: "/images/stack/flutter.svg" },
  { name: "Kotlin", logo: "/images/stack/kotlin.svg" },
  { name: "Swift", logo: "/images/stack/swift.svg" },
  { name: "Figma", logo: "/images/stack/figma.svg" },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
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
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl"
          >
            The small team behind the work.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60"
          >
            WorkLoad HQ is a lean digital studio based in Nigeria, building
            websites, web apps, and mobile apps for clients worldwide. Small on
            purpose, so every project gets the people who actually do the
            work.
          </motion.p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
            Why we exist
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
            Too many businesses pay for websites that don’t work.
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-stone-600">
            <p>
              Slow to load, dated on mobile, invisible on Google, and silent
              when it comes to actually bringing in customers. We started
              WorkLoad HQ to do the opposite: fast, clean digital products,
              built properly, delivered on honest timelines.
            </p>
            <p>
              We work with startups, founders, small businesses, and
              individuals. One week it is a one-page site for a salon, the
              next it is a payments platform, a mobile app, or stepping in as
              the technical partner for a founder with no technical
              co-founder. Whatever the size, the standard is the same.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              How we work
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              What working with us is like.
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                  <value.icon className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-stone-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-white px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
            Our tools
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
            Modern stack, built to last.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-stone-600 md:text-base">
            We work across web, mobile, and design, and we pick what fits each
            project: fast to ship, easy to maintain, and ready to scale when
            you are.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {stack.map((tool) => (
              <div
                key={tool.name}
                className="flex w-[calc(50%-0.375rem)] items-center gap-3 rounded-xl border border-black/5 bg-mist px-4 py-3.5 text-left sm:w-52"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  className="h-5 w-5 shrink-0"
                  aria-hidden
                />
                <span className="truncate text-sm font-medium text-stone-700">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
            Sounds like a team you’d work with?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/60">
            Tell us what you’re building. We’ll reply within 24 hours with a
            clear plan and a price.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              See our work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
