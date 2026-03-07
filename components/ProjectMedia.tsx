"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProjectMediaProps = {
  desktopImage: string;
  phoneImage: string;
  alt: string;
  variant?: "short" | "tall";
};

export default function ProjectMedia({
  desktopImage,
  phoneImage,
  alt,
  variant = "short",
}: ProjectMediaProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.closest("[data-project-modal]")) {
        return;
      }
      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", onClick);
    }

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
        className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-emerald-50/70 text-left ${
          variant === "tall" ? "h-56" : "h-40"
        }`}
        aria-label="Open project preview"
      >
        <img
          src={desktopImage}
          alt={alt}
          className="h-full w-full object-cover"
        />
        <img
          src={phoneImage}
          alt=""
          className={`absolute bottom-3 right-3 rounded-xl border border-white/80 object-cover shadow-lg shadow-emerald-900/20 ${
            variant === "tall" ? "h-28 w-14" : "h-24 w-12"
          }`}
        />
      </button>

      {open && mounted
        ? createPortal(
            <div className="fixed inset-0 z-[999] bg-stone-900/70 backdrop-blur-xl">
              <div
                className="relative flex h-full w-full items-center justify-center"
                data-project-modal
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 border border-white/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-700 transition hover:bg-white"
                >
                  Close
                </button>
                <div className="flex h-[92vh] w-[96vw] max-w-[1600px] flex-col gap-4">
                  <img
                    src={desktopImage}
                    alt={alt}
                    className="h-[70%] w-full object-contain"
                  />
                  <img
                    src={phoneImage}
                    alt=""
                    className="h-[30%] w-full object-contain md:w-2/3"
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
