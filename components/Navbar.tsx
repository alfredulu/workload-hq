"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menuRef.current) {
        return;
      }

      const target = event.target as Node;
      if (open && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-emerald-200/60 bg-gradient-to-r from-white/70 via-emerald-50/60 to-white/70 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="WorkLoad HQ"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-800 md:flex">
          <Link href="/" className="hover:text-emerald-950 transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-emerald-950 transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/services" className="hover:text-emerald-950 transition-colors">
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-950 px-6 py-2 text-white shadow-sm transition-all hover:bg-emerald-900 active:scale-95"
          >
            Let's Talk
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
              <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.3em] text-emerald-800">
                <Link
                  href="/"
                  className="hover:text-emerald-950 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  className="hover:text-emerald-950 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/services"
                  className="hover:text-emerald-950 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-emerald-950 px-4 py-2 text-center text-white shadow-sm transition-all hover:bg-emerald-900 active:scale-95"
                  onClick={() => setOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
