"use client";

import { Globe2, Instagram, Mail, MessageSquare, Sparkles } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";
import { FormEvent, useEffect, useMemo, useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message?: string;
  }>({ type: null });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const inputBase =
    "rounded-2xl bg-white/80 px-4 py-3 text-sm text-stone-950 shadow-sm focus:outline-none focus:ring-2 transition";

  const inputClass = (hasError?: boolean) =>
    `${inputBase} ${
      hasError
        ? "border border-rose-500 focus:ring-rose-200"
        : "border border-emerald-200/70 focus:ring-emerald-900/10"
    }`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const fieldValues = {
      name: (formData.get("name") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      phone: (formData.get("phone") ?? "").toString().trim(),
      subject: (formData.get("subject") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    const newErrors: Record<string, string> = {};

    if (!fieldValues.name) newErrors.name = "Please enter your name";
    if (!fieldValues.email) {
      newErrors.email = "Please enter an email address";
    } else if (!emailRegex.test(fieldValues.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!fieldValues.subject) newErrors.subject = "Tell us what you need";
    if (!fieldValues.message) newErrors.message = "Let us know your project";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setFormStatus({
        type: "error",
        message: "There are some fields that need your attention.",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setFormStatus({ type: null });

    // This is your secret submission link
    const googleURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeI2sV1B6zeJCQmZhKYCsbivxGPiuZxCwjCRUD_EfiC1-yH9Q/formResponse";

    const data = new URLSearchParams();
    data.append("entry.1352442608", fieldValues.name);
    data.append("entry.447160304", fieldValues.email);
    data.append("entry.1701260939", fieldValues.phone);
    data.append("entry.915533908", fieldValues.subject);
    data.append("entry.1077008706", fieldValues.message);

    try {
      await fetch(googleURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setFormStatus({
        type: "success",
        message: "Success! Your message has been sent to WorkLoad HQ.",
      });
      setShowSuccessOverlay(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setFormStatus({
        type: "error",
        message:
          "Something went wrong. Please email us at workloadhq@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!showSuccessOverlay) return;
    const timer = window.setTimeout(() => {
      setShowSuccessOverlay(false);
      setFormStatus({ type: null });
    }, 3500);
    return () => window.clearTimeout(timer);
  }, [showSuccessOverlay]);

  const statusPillClass =
    formStatus.type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-rose-200 bg-rose-50 text-rose-600";

  const confettiColors = [
    "#bef264",
    "#fcd34d",
    "#f472b6",
    "#a855f7",
    "#38bdf8",
  ];
  const confettiPieces = Array.from({ length: 18 }, (_, index) => index);

  return (
    <main className="min-h-screen pb-24 pt-28">
      {showSuccessOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-6">
          <div className="absolute inset-0 overflow-hidden">
            {confettiPieces.map((piece) => (
              <span
                key={piece}
                className="absolute h-2 w-2 rounded-full opacity-80"
                style={{
                  left: `${((piece * 7) % 90) + 5}%`,
                  backgroundColor:
                    confettiColors[piece % confettiColors.length],
                  animation: `confettiDrop 1.8s ease-out forwards`,
                  animationDelay: `${(piece % 7) * 0.12}s`,
                }}
              />
            ))}
          </div>
          <div className="relative w-full max-w-xl rounded-3xl border border-white/40 bg-white/95 p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
              Success
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Message sent
            </h2>
            <p className="mt-2 text-sm text-slate-600">{formStatus.message}</p>
            <button
              type="button"
              onClick={() => {
                setShowSuccessOverlay(false);
                setFormStatus({ type: null });
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 transition hover:bg-emerald-50"
            >
              Back to form
            </button>
          </div>
          <style jsx>{`
            @keyframes confettiDrop {
              0% {
                opacity: 1;
                transform: translateY(-20px) rotate(0deg);
              }
              100% {
                opacity: 0;
                transform: translateY(180px) rotate(360deg);
              }
            }
          `}</style>
        </div>
      )}
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
        <p className="mt-2 max-w-2xl text-sm text-emerald-800 md:text-base">
          Tell us about your needs, challenges, and timeline so the right lead
          can reach out with suited options.
        </p>
        {formStatus.type && !showSuccessOverlay && (
          <div
            className={`mt-6 flex items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] ${statusPillClass}`}
            aria-live="polite"
          >
            {formStatus.message}
          </div>
        )}
      </section>

      <section className="mx-auto mt-12 grid max-w-4xl gap-6 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur"
        >
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
                className={inputClass(Boolean(errors.name))}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-2 text-xs text-rose-500">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                className={inputClass(Boolean(errors.email))}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-xs text-rose-500">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className={inputClass()}
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
                className={inputClass(Boolean(errors.subject))}
                placeholder="Website design"
              />
              {errors.subject && (
                <p className="mt-2 text-xs text-rose-500">{errors.subject}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              className={`${inputBase} ${
                errors.message
                  ? "border border-rose-500 focus:ring-rose-200"
                  : "border border-emerald-200/70 focus:ring-emerald-900/10"
              }`}
              placeholder="Tell us about your project, goals, and timeline."
            />
            {errors.message && (
              <p className="mt-2 text-xs text-rose-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 rounded-full bg-emerald-950 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-emerald-900 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
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
                location is never a problem
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
