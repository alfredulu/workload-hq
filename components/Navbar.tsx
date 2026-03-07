import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]">
          WORKLOAD HQ
        </Link>

        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.3em] text-gray-600 md:flex">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/#services" className="hover:text-black transition-colors">
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-2 text-white shadow-sm transition-all hover:bg-gray-800"
          >
            Let's Talk
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-white/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-700 shadow-sm">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-48 rounded-3xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-xl">
            <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-black transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#services"
                className="hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-black px-4 py-2 text-center text-white shadow-sm transition-all hover:bg-gray-800"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
