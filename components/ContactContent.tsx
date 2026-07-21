"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Globe2, Mail, Sparkles } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";

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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "workloadhq@gmail.com",
    href: "mailto:workloadhq@gmail.com",
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+234 704 481 1328",
    href: "https://wa.me/2347044811328",
    external: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@workload_hq",
    href: "https://www.instagram.com/workload_hq/",
    external: true,
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    value: "@workload_hq",
    href: "https://www.tiktok.com/@workload_hq",
    external: true,
  },
];

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message?: string;
  }>({ type: null });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const inputBase =
    "w-full rounded-xl bg-white px-4 py-3 text-sm text-stone-950 placeholder:text-stone-400 transition focus:outline-none focus:ring-2";

  const inputClass = (hasError?: boolean) =>
    `${inputBase} ${
      hasError
        ? "border border-rose-400 focus:ring-rose-200"
        : "border border-black/10 focus:border-emerald-500 focus:ring-emerald-100"
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
    if (!fieldValues.message) newErrors.message = "Tell us about your project";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setFormStatus({
        type: "error",
        message: "A few fields need your attention.",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setFormStatus({ type: null });

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
        message: "Your message is on its way to WorkLoad HQ.",
      });
      setShowSuccessOverlay(true);
      (e.target as HTMLFormElement).reset();
    } catch {
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

  return (
    <main className="min-h-screen">
      {showSuccessOverlay && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/90 px-6 backdrop-blur-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-950">
              Message sent
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {formStatus.message} We’ll reply within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowSuccessOverlay(false);
                setFormStatus({ type: null });
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:bg-ink-soft active:scale-95"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}

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
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl"
          >
            Let’s build something together.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/60"
          >
            Tell us what you need. We’ll come back with a clear plan and a
            price within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* Form + contact info */}
      <section id="contact-form" className="bg-mist px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm md:p-9"
          >
            <h2 className="text-xl font-semibold tracking-tight text-stone-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Share what you need built, what you already have, or the problem
              you’re trying to fix.
            </p>

            {formStatus.type === "error" && !showSuccessOverlay ? (
              <div
                className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            ) : null}

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-stone-800"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className={`mt-1.5 ${inputClass(Boolean(errors.name))}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-stone-800"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className={`mt-1.5 ${inputClass(Boolean(errors.email))}`}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-medium text-stone-800"
                >
                  Phone{" "}
                  <span className="font-normal text-stone-400">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  className={`mt-1.5 ${inputClass()}`}
                  placeholder="+234"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-stone-800"
                >
                  What do you need?
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className={`mt-1.5 ${inputClass(Boolean(errors.subject))}`}
                  placeholder="Website, app, logo…"
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-stone-800"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className={`mt-1.5 ${inputClass(Boolean(errors.message))}`}
                placeholder="Tell us about your project, goals, and timeline."
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-rose-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 w-full rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition hover:bg-ink-soft active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </motion.form>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-5"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-stone-950">
                Other ways to reach us
              </h3>
              <ul className="mt-4 divide-y divide-black/5">
                {contactChannels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-100">
                        <channel.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-stone-400">
                          {channel.label}
                        </span>
                        <span className="text-sm font-medium text-stone-900 transition-colors group-hover:text-emerald-700">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-emerald-600" />
                <h3 className="text-sm font-semibold text-stone-950">
                  Location is never a problem
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Based in Nigeria, working worldwide. We operate remotely and
                serve clients across Nigeria and internationally.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-emerald-600/15 bg-emerald-50 p-7"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <h3 className="text-sm font-semibold text-stone-950">
                  Prefer a quick start?
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Send us your brand name, service list, and any reference links.
                We’ll reply with a first concept within 48 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FAQSection faqs={faqs} ctaLabel="Book a call" ctaHref="#contact-form" />
    </main>
  );
}
