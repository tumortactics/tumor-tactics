"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/assets/Boxsleeve.png", alt: "Tumor Tactics Box" },
  { src: "/assets/IMG_3020.png", alt: "Tumor Tactics gameplay" },
  { src: "/assets/IMG_4900.png", alt: "Tumor Tactics cards" },
  { src: "/assets/IMG_5656.png", alt: "Tumor Tactics in action" },
  { src: "/assets/IMG_7650.png", alt: "Tumor Tactics workshop" },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(index);
      setAnimating(false);
      setDirection(null);
    }, 280);
  };

  const prev = () => go((active - 1 + images.length) % images.length, "right");
  const next = () => go((active + 1) % images.length, "left");

  const slideOut =
    direction === "left"
      ? "translate-x-[-60px] opacity-0"
      : direction === "right"
      ? "translate-x-[60px] opacity-0"
      : "";

  return (
    <div className="flex flex-col gap-4">
      {/* Main image + flanking buttons */}
      <div className="flex items-center gap-3">
        {/* Prev button — outside the image box */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="group shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-150 active:scale-90"
          style={{
            borderColor: "#7c3aed",
            color: "#7c3aed",
            background: "white",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#7c3aed";
            (e.currentTarget as HTMLButtonElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "white";
            (e.currentTarget as HTMLButtonElement).style.color = "#7c3aed";
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image viewport */}
        <div
          className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{ background: "#F5F3FF", minHeight: "380px" }}
        >
          <div
            className={`w-full h-full flex items-center justify-center transition-all duration-[280ms] ease-in-out ${
              animating ? slideOut : "translate-x-0 opacity-100"
            }`}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={480}
              height={480}
              className="w-full object-contain p-6"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>

        {/* Next button — outside the image box */}
        <button
          onClick={next}
          aria-label="Next image"
          className="group shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-150 active:scale-90"
          style={{
            borderColor: "#7c3aed",
            color: "#7c3aed",
            background: "white",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#7c3aed";
            (e.currentTarget as HTMLButtonElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "white";
            (e.currentTarget as HTMLButtonElement).style.color = "#7c3aed";
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 justify-center">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => go(i, i > active ? "left" : "right")}
            aria-label={img.alt}
            className="rounded-lg overflow-hidden shrink-0 transition-all duration-150 active:scale-90"
            style={{
              width: "60px",
              height: "60px",
              border: i === active ? "2px solid #7c3aed" : "2px solid transparent",
              background: "#F5F3FF",
              opacity: i === active ? 1 : 0.5,
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (i !== active) (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              if (i !== active) (e.currentTarget as HTMLButtonElement).style.opacity = "0.5";
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={60}
              height={60}
              className="w-full h-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
