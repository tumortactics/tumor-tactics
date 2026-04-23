"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { image: "/assets/IMG_3707.jpg", caption: "Tumor Tactics classroom session" },
  { image: "/assets/IMG_8204.jpg", caption: "Students engaging with the game" },
  { image: "/assets/IMG_8209.jpg", caption: "Game materials and components" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section id="gallery" className="py-24 bg-[#ede9fe]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7c3aed]">
              Gallery
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tumor Tactics<br />in Action
            </h2>
          </div>
          <p className="text-[#3d2f6b] text-sm max-w-xs leading-relaxed">
            From classroom pilots to community events — see the impact in schools across the country.
          </p>
        </div>

        {/* Slideshow — aspect-ratio with max-height for mobile sanity */}
        <div
          className="relative rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-md shadow-purple-100 w-full"
          style={{ aspectRatio: "16/9", maxHeight: 520 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[#1e1b2e]/60" />
            </div>
          ))}

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-white/90 hover:bg-white text-[#1e1b2e] flex items-center justify-center transition-[background-color,border-color] border border-[#b4a4f0] hover:border-[#c4b5fd] shadow-sm"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-white/90 hover:bg-white text-[#1e1b2e] flex items-center justify-center transition-[background-color,border-color] border border-[#b4a4f0] hover:border-[#c4b5fd] shadow-sm"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators — padded for 44px touch target */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="p-3 flex items-center justify-center"
                aria-label={`Go to image ${i + 1}`}
              >
                <span
                  className="block h-2 rounded-full transition-[width,background-color] duration-300"
                  style={{
                    width: i === current ? "28px" : "8px",
                    background: i === current ? "#7c3aed" : "rgba(255,255,255,0.5)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative flex-1 h-20 rounded-xl overflow-hidden border-2 transition-[border-color,opacity] duration-200"
              style={{
                borderColor: i === current ? "#7c3aed" : "#b4a4f0",
                opacity: i === current ? 1 : 0.5,
              }}
              aria-label={`Go to: ${slide.caption}`}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                className="object-cover"
                sizes="200px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
