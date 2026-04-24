"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const CARDS_COUNT = 29;
const cards = Array.from({ length: CARDS_COUNT }, (_, i) => `/assets/CARDS/${i + 1}.png`);

const rulebook = [
  { src: "/assets/Rulebook_1.png", label: "Page 1" },
  { src: "/assets/Rulebook_2.png", label: "Page 2" },
];

function RulebookStack() {
  const [lightboxPage, setLightboxPage] = useState<number | null>(null);
  const [cardHovered, setCardHovered] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Move focus into modal when it opens; restore on close
  useEffect(() => {
    if (lightboxPage !== null) {
      closeRef.current?.focus();
    }
  }, [lightboxPage]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxPage !== null) {
        setLightboxPage(null);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxPage]);

  const openPage = useCallback((page: number, trigger: HTMLButtonElement | null) => {
    if (trigger) triggerRef.current = trigger as HTMLButtonElement;
    setLightboxPage(page);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-6 w-full" style={{ maxWidth: 364 }}>
        <div className="relative w-full" style={{ minHeight: 504 }}>
          {/* Back card (page 2) — peeking behind */}
          <button
            onClick={(e) => openPage(1, e.currentTarget)}
            className="absolute inset-x-0 top-0 rounded-xl overflow-hidden border-2 border-[#b4a4f0] shadow-lg cursor-pointer"
            style={{
              transform: "rotate(-4deg) translate(10px, 8px)",
              zIndex: 1,
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            aria-label="Open rulebook page 2"
          >
            <Image
              src={rulebook[1].src}
              alt="Rulebook page 2"
              width={364}
              height={504}
              className="w-full h-auto"
              loading="lazy"
            />
          </button>

          {/* Front card (page 1) */}
          <button
            onClick={(e) => openPage(0, e.currentTarget)}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
            className="relative w-full rounded-xl overflow-hidden border-2 border-[#c4b5fd] shadow-xl cursor-pointer"
            style={{
              transform: cardHovered ? "rotate(0deg) translateY(-6px)" : "rotate(1.5deg)",
              zIndex: 2,
              boxShadow: cardHovered ? "0 24px 48px rgba(124,58,237,0.2)" : undefined,
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            aria-label="Open rulebook page 1"
          >
            <Image
              src={rulebook[0].src}
              alt="Rulebook page 1"
              width={364}
              height={504}
              className="w-full h-auto"
              priority
            />
          </button>
        </div>

        <a
          href="/assets/Rulebook.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 shadow-md"
          style={{ background: "#7c3aed" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Rulebook
        </a>
      </div>

      {/* Lightbox — role=dialog with focus trap */}
      {lightboxPage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Rulebook ${rulebook[lightboxPage].label}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,5,30,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => { setLightboxPage(null); triggerRef.current?.focus(); }}
        >
          <button
            ref={closeRef}
            onClick={() => { setLightboxPage(null); triggerRef.current?.focus(); }}
            className="fixed top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-[background-color] border border-white/25 z-10"
            aria-label="Close rulebook viewer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-2xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-[#c4b5fd]/30 shadow-2xl w-full">
              <Image
                src={rulebook[lightboxPage].src}
                alt={rulebook[lightboxPage].label}
                width={672}
                height={930}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLightboxPage((p) => (p! - 1 + rulebook.length) % rulebook.length)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-[background-color] border border-white/20"
                aria-label="Previous page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white/60 text-sm font-medium">
                {lightboxPage + 1} / {rulebook.length}
              </span>
              <button
                onClick={() => setLightboxPage((p) => (p! + 1) % rulebook.length)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-[background-color] border border-white/20"
                aria-label="Next page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CardsGallery() {
  const [lightboxCard, setLightboxCard] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (lightboxCard !== null) {
      closeRef.current?.focus();
    }
  }, [lightboxCard]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxCard !== null) {
        const idx = lightboxCard;
        setLightboxCard(null);
        triggerRefs.current[idx]?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxCard]);

  return (
    <>
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {cards.map((src, i) => (
          <button
            key={i}
            ref={(el) => { triggerRefs.current[i] = el; }}
            onClick={() => setLightboxCard(i)}
            className="relative rounded-xl border-2 border-[#c4b5fd] hover:border-[#7c3aed] hover:scale-110 transition-[border-color,transform] duration-200 overflow-hidden flex-shrink-0"
            style={{ width: 120, height: 165 }}
            aria-label={`View card ${i + 1}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Card ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <a
          href="/assets/FINAL%20Double-Sided%20Print%20Version.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
          style={{ background: "#7c3aed" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Cards
        </a>
      </div>

      {/* Card lightbox — role=dialog with focus management */}
      {lightboxCard !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Card ${lightboxCard + 1} of ${CARDS_COUNT}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,5,30,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => { setLightboxCard(null); triggerRefs.current[lightboxCard]?.focus(); }}
        >
          <div
            className="relative flex flex-col items-center gap-4"
            style={{ maxWidth: 360, width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#c4b5fd]/30 shadow-2xl w-full aspect-[2/2.75]">
              <Image
                src={cards[lightboxCard]}
                alt={`Card ${lightboxCard + 1}`}
                fill
                className="object-cover"
                sizes="360px"
                priority
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLightboxCard((c) => (c! - 1 + CARDS_COUNT) % CARDS_COUNT)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-[background-color] border border-white/20"
                aria-label="Previous card"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white/60 text-sm font-medium">
                {lightboxCard + 1} / {CARDS_COUNT}
              </span>
              <button
                onClick={() => setLightboxCard((c) => (c! + 1) % CARDS_COUNT)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-[background-color] border border-white/20"
                aria-label="Next card"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <button
              ref={closeRef}
              onClick={() => { setLightboxCard(null); triggerRefs.current[lightboxCard]?.focus(); }}
              className="absolute top-2 right-2 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-[background-color]"
              aria-label="Close card viewer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function TheGame() {
  return (
    <div className="bg-[#ede9fe]">
      {/* Compact header — ~220px, cards start immediately below */}
      <section className="py-10 sm:py-12" style={{ background: "#1e1b2e" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-white/75 text-xs font-bold uppercase tracking-widest mb-3">
                Educational Card Game
              </p>
              <h1
                className="text-4xl sm:text-5xl font-black text-white leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                Where Biology<br />
                <span style={{ color: "#c4b5fd" }}>Meets Strategy</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {["2–4 Players", "Ages 8+", "45–60 min"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-3 py-1.5 text-white/80 uppercase tracking-widest"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(196,181,253,0.25)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop notice */}
      <div style={{ background: "#2a1a5e", borderBottom: "1px solid #4a2fa0" }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-white/90 text-sm text-center leading-relaxed">
            <span className="font-bold text-[#c4b5fd]">Our online shop is coming soon.</span>{" "}
            Physical card sets and complete game kits are not yet available for direct purchase.
            For bulk orders, educator inquiries, or classroom partnership requests,
            please reach out directly at{" "}
            <span className="font-semibold text-white">playtumortactics@gmail.com</span>{" "}
            — we&rsquo;re happy to help.
          </p>
        </div>
      </div>

      {/* Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
                The Card Deck
              </h2>
              <p className="text-[#3d2f6b] text-sm mt-2 max-w-sm">
                Each card represents a biological mechanism, treatment option, or game event rooted in real oncology.
              </p>
            </div>
            <p className="text-xs font-medium text-[#3d2f6b] shrink-0">Click any card to enlarge</p>
          </div>
          <CardsGallery />
        </div>
      </section>

      {/* Rulebook */}
      <section className="py-20 bg-[#ede9fe] border-b border-[#b4a4f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
              Learn to Play
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RulebookStack />

            <div>
              <h3 className="text-2xl font-black text-[#1e1b2e] mb-4" style={{ letterSpacing: "-0.02em" }}>
                Everything you need<br />to get started
              </h3>
              <div className="space-y-4 text-[#3d2f6b] text-sm leading-relaxed">
                <p>
                  The Tumor Tactics rulebook walks players through setup, core mechanics, card types,
                  and win conditions in a clear, illustrated format designed for classroom use.
                </p>
                <p>
                  No prior biology background required. The rulebook introduces concepts progressively,
                  so students learn cancer biology naturally through play.
                </p>
                <p>
                  Includes educator tips, discussion questions, and suggestions for connecting gameplay
                  to curriculum standards for life science and health education.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "2 Pages", sub: "Quick setup and clear rules" },
                    { label: "Classroom-Ready", sub: "Aligned to science standards" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-[#b4a4f0] p-4 bg-white">
                      <div className="text-sm font-bold text-[#7c3aed] mb-0.5">{item.label}</div>
                      <div className="text-xs text-[#3d2f6b]">{item.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-[#b4a4f0] p-4 bg-white">
                  <div className="text-sm font-bold text-[#7c3aed] mb-0.5">Free PDF</div>
                  <div className="text-xs text-[#3d2f6b]">Download and print instantly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
