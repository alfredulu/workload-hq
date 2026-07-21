"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { X } from "lucide-react";

type ProjectMediaProps = {
  desktopImage: StaticImageData;
  phoneImage?: StaticImageData;
  alt: string;
  domain?: string;
};

export default function ProjectMedia({
  desktopImage,
  phoneImage,
  alt,
  domain,
}: ProjectMediaProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
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

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
        className="group/media relative block w-full overflow-hidden rounded-xl border border-black/10 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-md"
        aria-label={`Open preview of ${alt}`}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-stone-50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          {domain ? (
            <span className="ml-2 hidden truncate rounded-md bg-white px-2.5 py-0.5 text-[10px] text-stone-400 ring-1 ring-black/5 sm:block">
              {domain}
            </span>
          ) : null}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={desktopImage}
            alt={alt}
            placeholder="blur"
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          />
          {phoneImage ? (
            <Image
              src={phoneImage}
              alt={`${alt} on mobile`}
              placeholder="blur"
              width={96}
              height={200}
              className="absolute bottom-3 right-3 w-16 rounded-lg border border-white/60 object-cover shadow-lg shadow-black/25 sm:w-20"
              sizes="96px"
            />
          ) : null}
        </div>
      </button>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-lg sm:p-8"
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Preview of ${alt}`}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className={`flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 md:flex-row ${
                  phoneImage ? "" : "md:justify-center"
                }`}
              >
                <Image
                  src={desktopImage}
                  alt={alt}
                  placeholder="blur"
                  className={`max-h-[60vh] w-auto rounded-xl object-contain shadow-2xl md:max-h-[85vh] ${
                    phoneImage ? "md:w-2/3" : "md:max-w-4xl"
                  }`}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  onClick={(event) => event.stopPropagation()}
                />
                {phoneImage ? (
                  <Image
                    src={phoneImage}
                    alt={`${alt} on mobile`}
                    placeholder="blur"
                    className="max-h-[30vh] w-auto rounded-xl object-contain shadow-2xl md:max-h-[70vh]"
                    sizes="(max-width: 768px) 40vw, 20vw"
                    onClick={(event) => event.stopPropagation()}
                  />
                ) : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
