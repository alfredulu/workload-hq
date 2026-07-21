"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MaintenancePage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink px-6 py-16">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="glow-emerald absolute left-1/2 top-0 h-[400px] w-[640px] -translate-x-1/2"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex max-w-xl flex-col items-center text-center"
      >
        <Image
          src="/images/logo-light.svg"
          alt="WorkLoad HQ"
          width={140}
          height={70}
          priority
          className="h-14 w-auto"
        />

        <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Maintenance in progress
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          We’re polishing our craft.
        </h1>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/60">
          The site is getting an upgrade. We’re making improvements to deliver
          an even better experience — we’ll be back shortly.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:workloadhq@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
          >
            Email us
          </a>
          <a
            href="https://wa.me/2347044811328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
