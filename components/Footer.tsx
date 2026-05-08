import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Let's Talk" },
];

export default function Footer() {
  return (
    <footer className="bg-emerald-950">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <div className="flex flex-col gap-10 border-t border-emerald-800 pt-8 md:flex-row md:justify-between">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                WorkLoad HQ
              </p>
              <p className="mt-3 max-w-sm text-sm text-emerald-200">
                Websites, apps, and brand identities. Built properly.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-emerald-200">
              <a
                href="mailto:workloadhq@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                workloadhq@gmail.com
              </a>
              <a
                href="https://www.instagram.com/workload_hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaInstagram className="h-4 w-4 text-emerald-400" />
                @workload_hq
              </a>
              <a
                href="https://www.tiktok.com/@workload_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaTiktok className="h-4 w-4 text-emerald-400" />
                @workload_hq
              </a>
              <a
                href="https://wa.me/2347044811328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaWhatsapp className="h-4 w-4 text-emerald-400" />
                WhatsApp
              </a>
              <span className="flex items-center gap-2 text-emerald-200">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Nigeria - Remote
              </span>
            </div>
          </div>

          {/* Right column — Navigate */}
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-emerald-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-emerald-400">
          &copy; 2026 WorkLoad HQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
