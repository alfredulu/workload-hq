import type { ReactNode } from "react";

type LegalSection = {
  heading: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-ink">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div
          className="glow-emerald absolute -top-24 left-1/2 h-[300px] w-[600px] -translate-x-1/2"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col px-6 pb-16 pt-36 md:pt-44">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/50">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-pretty leading-relaxed text-stone-600">{intro}</p>
          {sections.map((section, index) => (
            <div key={section.heading} className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-stone-950">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-stone-600 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.children}
              </div>
            </div>
          ))}
          <p className="mt-12 border-t border-black/5 pt-6 text-sm leading-relaxed text-stone-500">
            Questions about this page? Email us at{" "}
            <a
              href="mailto:workloadhq@gmail.com"
              className="font-medium text-emerald-700 hover:text-emerald-900"
            >
              workloadhq@gmail.com
            </a>{" "}
            and we will get back to you within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
