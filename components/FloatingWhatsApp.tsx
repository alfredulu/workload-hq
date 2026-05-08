"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 group">
      {/* Tooltip */}
      <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-stone-950 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
        Chat with us
      </span>

      {/* Pulse ring */}
      <span className="absolute bottom-0 right-0 h-14 w-14 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

      {/* Button */}
      <a
        href="https://wa.me/2347044811328"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all duration-200"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
