"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="group pointer-events-none fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
      <a
        href="https://wa.me/2347044811328"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition-all duration-200 hover:scale-105 hover:bg-emerald-600"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
