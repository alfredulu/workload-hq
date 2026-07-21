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
  heading = "Questions, answered.",
  description = "How we work, what things cost, and what we need from you to get started.",
  ctaLabel = "Get a quote",
  ctaHref = "/contact",
  id = "faq",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id={id} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-stone-600 md:text-base">
              {description}
            </p>
          </div>
          <a
            href={ctaHref}
            className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-soft active:scale-95"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="mt-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-black/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-base font-medium text-stone-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-stone-600">
                      {faq.answer}
                    </p>
                    {faq.list ? (
                      <ul className="mt-3 space-y-2 pl-5 text-sm leading-relaxed text-stone-600">
                        {faq.list.map((item) => (
                          <li key={item} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
