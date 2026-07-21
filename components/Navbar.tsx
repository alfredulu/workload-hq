"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menuRef.current) return;
      if (open && !menuRef.current.contains(event.target as Node)) {
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div ref={menuRef} className="mx-auto max-w-5xl">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled || open
              ? "border-white/10 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-white/5 bg-ink/40 backdrop-blur-md"
          }`}
        >
          <Link href="/" aria-label="WorkLoad HQ home" className="flex items-center">
            <Image
              src="/images/logo-light.svg"
              alt="WorkLoad HQ"
              width={96}
              height={48}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-white/10 font-medium text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-white px-4.5 py-2 text-sm font-medium text-ink transition hover:bg-emerald-50 active:scale-95"
            >
              Let&apos;s talk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="mt-2 rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-xl shadow-black/30 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 font-medium text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-base font-medium text-ink transition active:scale-[0.98]"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
