import {
  Globe2,
  Instagram,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";

export default function Contact() {
  return (
    <main className="min-h-screen pb-24 pt-28">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-stone-950 md:text-6xl">
          Let us build a calm,
          <span className="block text-stone-600">
            conversion-led experience.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-emerald-800 md:text-base">
          We respond swiftly within a few hours or minutes and can share a
          tailored scope as soon as we understand your goals.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-4xl gap-6 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/70 bg-white/80 text-emerald-800">
              <MessageSquare className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Send Us A Message
            </p>
          </div>
          <p className="mt-3 text-sm text-emerald-800">
            Drop in the brief details we ask for below so we can get back with a
            personalized plan.
          </p>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="mt-2 hidden"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
                placeholder="you@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
                placeholder="+234"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
                placeholder="Website design"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="rounded-2xl border border-emerald-200/70 bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
              placeholder="Tell us about your project, goals, and timeline."
            />
          </div>
          <button
            type="submit"
            className="mt-6 rounded-full bg-emerald-950 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-emerald-900 active:scale-95"
          >
            Submit
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Contact Info
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Globe2 className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Remote-first
              </span>
            </div>
            <p className="mt-4 text-sm text-emerald-800">
              Based in Nigeria, with a wordwide presence, we operate remotely
              and serve clients across Nigeria and internationally.
            </p>
            <p className="mt-4 text-sm text-emerald-800">
              Trusted by clients worldwide, we deliver excellence regardless of
              location.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Email Us At
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Mail className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Quick replies
              </span>
            </div>
            <a
              href="mailto:workloadhq@gmail.com"
              className="mt-3 block text-lg font-semibold text-stone-950 hover:text-emerald-800"
            >
              workloadhq@gmail.com
            </a>
          </div>
          <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Instagram
            </p>
            <div className="mt-4 flex items-center gap-3 text-emerald-800">
              <Instagram className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
                Recent work
              </span>
            </div>
            <a
              href="https://www.instagram.com/workload_hq/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-lg font-semibold text-stone-950 hover:text-emerald-800"
            >
              @workload_hq
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-6">
        <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 text-sm text-emerald-800 shadow-sm shadow-emerald-900/10 backdrop-blur">
          <div className="flex items-center gap-3 text-emerald-800">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
              Quick start
            </span>
          </div>
          <p className="mt-3">
            Prefer a quick start? Send us your brand name, service list, and any
            reference links. We will reply with a first concept within 48 hours.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} ctaLabel="Book a Call" ctaHref="/contact" />
    </main>
  );
}
