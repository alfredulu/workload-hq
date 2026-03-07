"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faqs";

type FAQSectionProps = {
  faqs: FAQItem[];
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  id?: string;
};

export default function FAQSection({
  faqs,
  heading = "Clear answers for every website question",
  description = "Bookmark this section when you want to understand the process, finances, or what we’ll need from your team to launch fast.",
  ctaLabel = "Get Quote",
  ctaHref = "/contact",
  id = "faq",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white/85 to-emerald-50/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-950 md:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-emerald-800 md:text-base">
              {description}
            </p>
          </div>
          <a
            href={ctaHref}
            className="flex items-center justify-center gap-2 rounded-full border border-emerald-200/70 bg-white/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 shadow-sm transition hover:border-emerald-300 active:scale-95"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-emerald-100/80 bg-white/70 p-4 text-sm text-emerald-800 shadow-sm shadow-emerald-900/10 backdrop-blur"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 text-left text-sm font-semibold text-stone-950"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => handleToggle(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={`faq-${index}`}
                  className={`mt-4 text-sm text-emerald-800 transition-all ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{faq.answer}</p>
                  {faq.list ? (
                    <ul className="mt-4 space-y-2 pl-4 text-sm text-emerald-800">
                      {faq.list.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
