import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Let's talk" },
];

const socialLinks = [
  {
    href: "mailto:workloadhq@gmail.com",
    label: "workloadhq@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    href: "https://wa.me/2347044811328",
    label: "WhatsApp",
    icon: FaWhatsapp,
    external: true,
  },
  {
    href: "https://www.instagram.com/workload_hq/",
    label: "@workload_hq",
    icon: FaInstagram,
    external: true,
  },
  {
    href: "https://www.tiktok.com/@workload_hq",
    label: "@workload_hq",
    icon: FaTiktok,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/logo-light.svg"
              alt="WorkLoad HQ"
              width={120}
              height={60}
              className="h-11 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Websites, apps, and brand identities. Built properly. Based in
              Nigeria, working worldwide.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/40">
              <MapPin className="h-4 w-4 text-emerald-500" />
              Nigeria &middot; Remote
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <social.icon className="h-4 w-4 text-emerald-500" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; 2026 WorkLoad HQ. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built properly, of course.
          </p>
        </div>
      </div>
    </footer>
  );
}
