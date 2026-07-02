"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menuRef.current) return;
      const target = event.target as Node;
      if (open && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-emerald-200/60 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 shadow-md"
          : "bg-linear-to-r from-white/70 via-emerald-50/60 to-white/70 backdrop-blur-xl shadow-lg"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="WorkLoad HQ home"
          className="flex items-center"
        >
          <img
            src="/images/logo.svg"
            alt="WorkLoad HQ"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.3em] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "font-semibold text-emerald-950 border-b-2 border-emerald-600 pb-0.5"
                    : "text-emerald-700 hover:text-emerald-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-emerald-950 px-6 py-2 text-white shadow-sm transition-all hover:bg-emerald-900 active:scale-95"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="relative md:hidden" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-full border border-emerald-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-800 shadow-sm"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
            {open ? (
              <div
                id="mobile-menu"
                className="absolute right-0 mt-3 w-48 rounded-3xl border border-emerald-200/70 bg-white/90 p-4 shadow-lg backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.3em]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`transition-colors ${
                        isActive(link.href)
                          ? "font-semibold text-emerald-950 border-b-2 border-emerald-600 pb-0.5 w-fit"
                          : "text-emerald-700 hover:text-emerald-950"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="rounded-full bg-emerald-950 px-4 py-2 text-center text-white shadow-sm transition-all hover:bg-emerald-900 active:scale-95"
                    onClick={() => setOpen(false)}
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
