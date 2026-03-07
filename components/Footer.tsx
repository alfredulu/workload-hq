export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/40 pt-8 md:flex-row">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-600">
            WorkLoad HQ
          </p>
          <p className="mt-3 max-w-sm text-sm text-emerald-800">
            We partner with ambitious teams to deliver minimalist, high-performing
            digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-emerald-800">
          <span>workloadhq@gmail.com</span>
          <span>@workload_hq</span>
          <span>Nigeria · Remote</span>
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
        (c) 2026 WorkLoad HQ. All rights reserved.
      </p>
    </footer>
  );
}




