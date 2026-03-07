import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-10 py-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-black tracking-tighter">
          WORKLOAD HQ
        </Link>
        <div className="space-x-8 font-medium text-sm uppercase tracking-widest text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/services" className="hover:text-black transition-colors">
            Services
          </Link>
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
