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

const stats: Stat[] = [
  {
    value: "120+",
    label: "Premium launches delivered",
    icon: Target,
  },
  { value: "3.2x", label: "Average conversion uplift", icon: Sparkles },
  { value: "14 days", label: "Typical design sprint", icon: Clock },
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
    description:
      "We engineer a fast, accessible site with premium polish.",
    icon: Zap,
  },
  {
    title: "Refine",
    description:
      "We optimize, measure, and evolve the experience post-launch.",
    icon: CheckCircle2,
  },
];

const featuredWork = [
  {
    title: "Salon Appointment Flow",
    category: "Beauty & Wellness",
    desktopImage: "/images/featured-salon-desktop.jpg",
    phoneImage: "/images/featured-salon-phone.jpg",
    imageAlt: "Salon appointment website preview",
  },
  {
    title: "SME Booking Dashboard",
    category: "Local Services",
    desktopImage: "/images/featured-booking-desktop.jpg",
    phoneImage: "/images/featured-booking-phone.jpg",
    imageAlt: "SME booking dashboard preview",
  },
  {
    title: "Retail Landing Page",
    category: "Retail & Commerce",
    desktopImage: "/images/featured-retail-desktop.jpg",
    phoneImage: "/images/featured-retail-phone.jpg",
    imageAlt: "Retail landing page preview",
  },
];

const testimonials = [
  {
    quote:
      "WorkLoad HQ elevated our brand with a site that feels premium and performs.",
    name: "Ariana Lopez",
    role: "Chief Marketing Officer, Lumen",
  },
  {
    quote:
      "Every decision felt intentional. The final experience is effortlessly elegant.",
    name: "Elias Carter",
    role: "Founder, Auralis",
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
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-8 md:pb-28 md:pt-16">
      <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-slate-200/70 bg-gradient-to-r from-white/80 to-slate-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm backdrop-blur">
          Premium Digital Agency
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          We design and build
          <span className="block text-slate-500">expensive minimalist</span>
          websites for modern brands.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 md:text-xl">
          WorkLoad HQ is a digital agency focused on crafting refined, mobile-
          first experiences that convert attention into revenue.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-slate-900/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-900 active:scale-95"
          >
            Start a Project
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-slate-200/70 bg-gradient-to-r from-white/80 to-slate-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
          >
            View Our Work
          </a>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 via-white/70 to-slate-50/70 p-8 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            <Clock className="h-4 w-4" />
            Now booking
          </div>
          <p className="mt-4 text-2xl font-semibold text-slate-900">
            Fast turnarounds
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Most one-page builds ship in 2-3 days once we have your content.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 via-white/75 to-slate-50/70 p-8 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            <Target className="h-4 w-4" />
            Our focus
          </div>
          <p className="mt-4 text-2xl font-semibold text-slate-900">
            Conversion-led design
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Strategy, UX, and engineering working together to grow your business.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.value}
          className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/90 to-slate-50/70 p-6 shadow-sm shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-md active:scale-[0.99]"
        >
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <stat.icon className="h-5 w-5 text-slate-500" />
          </div>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Services"
        title="Designed to feel effortless."
        description="From focused landing pages to full multi-page websites, we scale the build to your goals and budget."
        actionLabel="About Us"
        actionHref="/#process"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 via-white/75 to-slate-50/70 p-8 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white/90 to-slate-50/80 text-slate-600 shadow-sm shadow-slate-900/10">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Process"
        title="A calm, controlled delivery."
        description="Our process is quiet and precise. Every phase has a clear output and measurable impact."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="flex gap-5 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-6 shadow-sm shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-md active:scale-[0.99]"
          >
            <div className="flex flex-col items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white/90 to-slate-50/80 text-slate-600 shadow-sm shadow-slate-900/10">
                <step.icon className="h-4 w-4" />
              </div>
              0{index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Selected Work"
        title="A signature of restraint."
        description="We build quietly luxurious experiences for brands that value detail."
        actionLabel="View More Projects"
        actionHref="/portfolio"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredWork.map((work, index) => (
          <div
            key={work.title}
            className="group rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-6 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-slate-50/70">
              <img
                src={work.desktopImage}
                alt={work.imageAlt}
                className="h-full w-full object-cover"
              />
              <img
                src={work.phoneImage}
                alt=""
                className="absolute bottom-3 right-3 h-24 w-12 rounded-xl border border-white/80 object-cover shadow-lg shadow-slate-900/20"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <Sparkles className="h-4 w-4" />
              <span>{work.category}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {work.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Minimal, conversion-led storytelling with a premium feel.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by discerning teams."
        description="We operate as an extension of your brand. Quiet, reliable, and sharp."
        actionLabel="Contact Us"
        actionHref="/contact"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-8 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
          >
            <Quote className="h-6 w-6 text-slate-400" />
            <p className="mt-4 text-lg text-slate-800">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-slate-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-10 text-center shadow-lg shadow-slate-900/10 backdrop-blur md:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Ready to elevate
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
          Let us craft your next digital flagship.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
          Tell us where you are today and where you want to go. We will respond
          with a tailored scope and timeline.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-slate-900/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-900 active:scale-95"
          >
            Book a Call
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-slate-200/70 bg-gradient-to-r from-white/85 to-slate-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm backdrop-blur transition hover:bg-white active:scale-95"
          >
            View Portfolio
          </a>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-6 shadow-sm shadow-slate-900/10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Email
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <Mail className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Fast response
              </span>
            </div>
            <a
              href="mailto:workloadhq@gmail.com"
              className="mt-3 block text-base font-semibold text-slate-900 hover:text-slate-600"
            >
              workloadhq@gmail.com
            </a>
          </div>
          <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/85 to-slate-50/70 p-6 shadow-sm shadow-slate-900/10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Instagram
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <Instagram className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Latest work
              </span>
            </div>
            <a
              href="https://www.instagram.com/workload_hq/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-base font-semibold text-slate-900 hover:text-slate-600"
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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          {description}
        </p>
      </div>
      {actionLabel && actionHref ? (
        <a
          href={actionHref}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-800"
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}
