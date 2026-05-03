import { Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-emerald-800 pt-8 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              WorkLoad HQ
            </p>
            <p className="mt-3 max-w-sm text-sm text-emerald-200">
              We build fast, high-performing websites for businesses that want
              results.
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
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              Nigeria - Remote
            </span>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          &copy; 2026 WorkLoad HQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
