"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock,
  HelpCircle,
  Layers,
  LayoutGrid,
  Mail,
  Quote,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import ProjectMedia from "@/components/ProjectMedia";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";
import { projects } from "@/data/projects";

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
    label: "Successful launches delivered",
    icon: Target,
  },
  { value: "3.2x", label: "Average conversion uplift", icon: Sparkles },
  { value: "7 days", label: "Typical design sprint", icon: Clock },
];

const services: Service[] = [
  {
    title: "Brand Sites",
    description:
      "High-converting websites with clean layouts and smooth animations.",
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
      "We design a clean, focused interface for your brand.",
    icon: LayoutGrid,
  },
  {
    title: "Build",
    description: "We build a fast, accessible site that works on every device.",
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
      "The admin dashboard WorkLoad HQ built us has transformed our operations. The polished dashboard and thoughtful mobile layout keep us fast and in control no matter where we're working.",
    name: "Samuel Carter",
    role: "Head of Operations, Auralis",
  },
];

export default function HomeContent() {
  return (
    <main className="min-h-screen pb-24 pt-0">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <FAQSection faqs={faqs} />
      <CTA />
    </main>
  );
}

function Hero() {
  const { activeIndex, setActiveIndex, containerRef } =
    useActiveIndex<HTMLDivElement>();

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/herobackground.jpg"
          alt="Workload HQ creative workspace and digital production environment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-28 pb-8 md:pt-32 md:pb-12">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-emerald-200/70 bg-linear-to-r from-white/80 to-emerald-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 shadow-sm backdrop-blur">
              Website & App Development
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-emerald-100 md:text-6xl">
              WORKLOAD
              <span className="block text-stone-800">HQ</span>
            </h1>
            <p className="max-w-2xl text-lg text-emerald-100 md:text-xl">
              WorkLoad HQ builds fast, clean websites and mobile apps for
              modern brands. We focus on design that looks good, loads fast,
              and brings in business.
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
                className="rounded-full border border-emerald-200/70 bg-linear-to-r from-white/80 to-emerald-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-800 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
              >
                View Our Work
              </a>
              <a
                href="#faq"
                className="flex items-center justify-center gap-2 rounded-full border border-emerald-200/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100 shadow-sm transition hover:border-emerald-300 active:scale-95"
              >
                <HelpCircle className="h-4 w-4" />
                FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 pt-8 md:grid-cols-2"
        ref={containerRef}
      >
        <div
          className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 via-white/70 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
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
          className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 via-white/75 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
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
    </>
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
            className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/90 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
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
        title="Built to perform."
        description="From focused landing pages to full multi-page websites, we match the build to your goals and budget."
        actionLabel="View Services"
        actionHref="/services"
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.title}
              className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 via-white/75 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-linear-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
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
        title="Clear steps from start to launch."
        description="We run a structured process. Every phase has a clear output and a real result."
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {processSteps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={step.title}
              className={`flex gap-5 rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-md"
                  : "hover:-translate-y-1 hover:shadow-md"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-linear-to-br from-white/90 to-emerald-50/80 text-emerald-800 shadow-sm shadow-emerald-900/10">
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
        title="Projects we've shipped."
        description="We build detailed, well-made websites for clients who care about quality."
        actionLabel="View More Projects"
        actionHref="/portfolio"
      />
      <div className="grid gap-6 md:grid-cols-3" ref={containerRef}>
        {featuredProjects.map((work, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={work.title}
              className={`group rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
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
              <p className="mt-3 text-sm text-emerald-800">{work.result}</p>
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
        title="What clients say."
        description="We work alongside your team and deliver on time."
        actionLabel="Contact Us"
        actionHref="/contact"
      />
      <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
        {testimonials.map((testimonial, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={testimonial.name}
              className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur transition ${
                isActive
                  ? "-translate-y-1 shadow-xl"
                  : "hover:-translate-y-1 hover:shadow-xl"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="h-6 w-6 text-stone-500" />
              <p className="mt-4 text-lg text-stone-900">
                &ldquo;{testimonial.quote}&rdquo;
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
      <div className="rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-10 text-center shadow-lg shadow-emerald-900/10 backdrop-blur md:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
          Ready to build
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-950 md:text-4xl">
          Let us build your next high-performing website.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-800 md:text-base">
          Tell us where you are today and where you want to go. We will reply
          with a clear scope and timeline.
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
            className="rounded-full border border-emerald-200/70 bg-linear-to-r from-white/85 to-emerald-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-stone-800 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
          >
            View Portfolio
          </a>
        </div>
        <div
          className="mx-auto mt-8 grid max-w-3xl gap-4 text-left md:grid-cols-2"
          ref={containerRef}
        >
          <div
            className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
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
            className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
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
              <FaInstagram className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Latest work
              </span>
            </div>
            <a
              href="https://www.instagram.com/workload_hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base font-semibold text-stone-950 hover:text-emerald-800"
            >
              @workload_hq
            </a>
          </div>
          <div
            className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
              activeIndex === 2
                ? "-translate-y-1 shadow-md"
                : "hover:-translate-y-1 hover:shadow-md"
            }`}
            onClick={() => setActiveIndex(2)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              TikTok
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <FaTiktok className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Follow us
              </span>
            </div>
            <a
              href="https://www.tiktok.com/@workload_hq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base font-semibold text-stone-950 hover:text-emerald-800"
            >
              @workload_hq
            </a>
          </div>
          <div
            className={`rounded-3xl border border-emerald-200/60 bg-linear-to-br from-white/85 to-emerald-50/70 p-6 shadow-sm shadow-emerald-900/10 backdrop-blur transition ${
              activeIndex === 3
                ? "-translate-y-1 shadow-md"
                : "hover:-translate-y-1 hover:shadow-md"
            }`}
            onClick={() => setActiveIndex(3)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              WhatsApp
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <FaWhatsapp className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Quick chat
              </span>
            </div>
            <a
              href="https://wa.me/2347044811328"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base font-semibold text-stone-950 hover:text-emerald-800"
            >
              +234 704 481 1328
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
