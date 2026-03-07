"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock,
  Layers,
  LayoutGrid,
  Mail,
  Instagram,
  Quote,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { projects } from "./portfolio/page";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

function useActiveIndex<T extends HTMLElement>() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!containerRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!containerRef.current.contains(target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return { activeIndex, setActiveIndex, containerRef };
}

const stats: Stat[] = [
  {
    value: "20+",
    label: "Premium launches delivered",
    icon: Target,
  },
  { value: "3.2x", label: "Average conversion uplift", icon: Sparkles },
  { value: "7 days", label: "Typical design sprint", icon: Clock },
];

const services: Service[] = [
  {
    title: "Brand Sites",
    description:
      "Elegant, high-converting websites with refined typography and precise motion.",
    icon: LayoutGrid,
  },
  {
    title: "Product Launch",
    description:
      "Polished launch pages built for speed, clarity, and conversion.",
    icon: Zap,
  },
  {
    title: "UX Systems",
    description:
      "Design systems and UI libraries that keep your brand consistent at scale.",
    icon: Layers,
  },
  {
    title: "Growth Labs",
    description:
      "Iterative landing page and funnel experiments grounded in analytics.",
    icon: Target,
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We align on your vision, audience, and competitive landscape.",
    icon: Sparkles,
  },
  {
    title: "Design",
    description:
      "We craft an elegant interface with a modern, minimalist voice.",
    icon: LayoutGrid,
  },
  {
    title: "Build",
    description: "We engineer a fast, accessible site with premium polish.",
    icon: Zap,
  },
  {
    title: "Refine",
    description: "We optimize, measure, and evolve the experience post-launch.",
    icon: CheckCircle2,
  },
];

const featuredProjects = projects.filter((project) => project.featured);

const testimonials = [
  {
    quote:
      "The admin dashboard WorkLoad HQ built has transformed our operations. The polished dashboard and thoughtful mobile layout keep us fast and in control no matter where we’re working.",
    name: "Samuel Carter",
    role: "Head of Operations, Auralis",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-24 pt-28">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </main>
  );
}

function Hero() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-8 md:pb-28 md:pt-16">
      <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-emerald-200/70 bg-gradient-to-r from-white/80 to-emerald-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 shadow-sm backdrop-blur">
          Premium Digital Agency
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
          We design and build
          <span className="block text-stone-600">
            expensive or/and minimalist
          </span>
          websites for modern brands.
        </h1>
        <p className="max-w-2xl text-lg text-emerald-800 md:text-xl">
          WorkLoad HQ is a digital agency focused on crafting refined, mobile-
          first experiences that convert attention into revenue.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-emerald-900/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-950 active:scale-95"
          >
            Start a Project
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-emerald-200/70 bg-gradient-to-r from-white/80 to-emerald-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-800 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
          >
            View Our Work
          </a>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        <div
          className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 via-white/70 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
            activeIndex === 0
              ? "-translate-y-1 shadow-xl"
              : "hover:-translate-y-1 hover:shadow-xl"
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
            <Clock className="h-4 w-4" />
            Now booking
          </div>
          <p className="mt-4 text-2xl font-semibold text-stone-950">
            Fast turnarounds
          </p>
          <p className="mt-3 text-sm text-emerald-800">
            Most one-page builds ship in 2-4 days once we have your content.
          </p>
        </div>
        <div
          className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 via-white/75 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
            activeIndex === 1
              ? "-translate-y-1 shadow-xl"
              : "hover:-translate-y-1 hover:shadow-xl"
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
            <Target className="h-4 w-4" />
            Our focus
          </div>
          <p className="mt-4 text-2xl font-semibold text-stone-950">
            Conversion-led design
          </p>
          <p className="mt-3 text-sm text-emerald-800">
            Strategy, UX, and engineering working together to grow your
            business.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section
      className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3"
      ref={containerRef}
    >
      {stats.map((stat, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={stat.value}
            className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/90 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
              isActive
                ? "-translate-y-1 shadow-md"
                : "hover:-translate-y-1 hover:shadow-md"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold text-stone-950">
                {stat.value}
              </p>
              <stat.icon className="h-5 w-5 text-stone-600" />
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-stone-600">
              {stat.label}
            </p>
          </div>
        );
      })}
    </section>
  );
}

function Services() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Services"
        title="Designed to feel effortless."
        description="From focused landing pages to full multi-page websites, we scale the build to your goals and budget."
        actionLabel="View Services"
        actionHref="/services"
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.title}
              className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 via-white/75 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-emerald-800">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section id="process" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Process"
        title="A calm, controlled delivery."
        description="Our process is quiet and precise. Every phase has a clear output and measurable impact."
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {processSteps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={step.title}
              className={`flex gap-5 rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-md"
                  : "hover:-translate-y-1 hover:shadow-md"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
                  <step.icon className="h-4 w-4" />
                </div>
                0{index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-800">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedWork() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Selected Work"
        title="A signature of restraint."
        description="We build quietly luxurious experiences for brands that value detail."
        actionLabel="View More Projects"
        actionHref="/portfolio"
      />
      <div className="grid gap-6 md:grid-cols-3" ref={containerRef}>
        {featuredProjects.map((work, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={work.title}
              className={`group rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <ProjectMedia
                desktopImage={work.desktopImage}
                phoneImage={work.phoneImage}
                alt={work.imageAlt}
              />
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                <Sparkles className="h-4 w-4" />
                <span>{work.category}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-stone-950">
                {work.title}
              </h3>
              <p className="mt-3 text-sm text-emerald-800">
                Minimal, conversion-led storytelling with a premium feel.
              </p>
              <a
                href={work.link || "/contact"}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900"
              >
                View Project
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by discerning teams."
        description="We operate as an extension of your brand. Quiet, reliable, and sharp."
        actionLabel="Contact Us"
        actionHref="/contact"
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {testimonials.map((testimonial, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={testimonial.name}
              className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="h-6 w-6 text-stone-500" />
              <p className="mt-4 text-lg text-stone-900">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-emerald-800">
                  {testimonial.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTA() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-10 text-center shadow-lg shadow-emerald-900/10 backdrop-blur md:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
          Ready to elevate
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-950 md:text-4xl">
          Let us craft your next digital flagship.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-800 md:text-base">
          Tell us where you are today and where you want to go. We will respond
          with a tailored scope and timeline.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-emerald-900/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-950 active:scale-95"
          >
            Book a Call
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-emerald-200/70 bg-gradient-to-r from-white/85 to-emerald-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-800 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
          >
            View Portfolio
          </a>
        </div>
        <div
          className="mx-auto mt-8 grid max-w-3xl gap-4 text-left md:grid-cols-2"
          ref={containerRef}
        >
          <div
            className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
              activeIndex === 0
                ? "-translate-y-1 shadow-md"
                : "hover:-translate-y-1 hover:shadow-md"
            }`}
            onClick={() => setActiveIndex(0)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Email
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Mail className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Fast response
              </span>
            </div>
            <a
              href="mailto:workloadhq@gmail.com"
              className="mt-3 block text-base font-semibold text-stone-950 hover:text-emerald-800"
            >
              workloadhq@gmail.com
            </a>
          </div>
          <div
            className={`rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
              activeIndex === 1
                ? "-translate-y-1 shadow-md"
                : "hover:-translate-y-1 hover:shadow-md"
            }`}
            onClick={() => setActiveIndex(1)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Instagram
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Instagram className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Latest work
              </span>
            </div>
            <a
              href="https://www.instagram.com/workload_hq/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-base font-semibold text-stone-950 hover:text-emerald-800"
            >
              @workload_hq
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-950 md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm text-emerald-800 md:text-base">
          {description}
        </p>
      </div>
      {actionLabel && actionHref ? (
        <a
          href={actionHref}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900"
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}
