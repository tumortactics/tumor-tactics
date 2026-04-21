"use client";

import { useState } from "react";

const CARDS_COUNT = 29;
const cards = Array.from({ length: CARDS_COUNT }, (_, i) => `/assets/CARDS/${i + 1}.png`);

const rulebook = [
  { src: "/assets/Rulebook_1.png", label: "Page 1" },
  { src: "/assets/Rulebook_2.png", label: "Page 2" },
];

function RulebookStack() {
  const [lightboxPage, setLightboxPage] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        {/* Stacked cards */}
        <div className="relative" style={{ width: 260, height: 360 }}>
          {/* Back card (page 2) */}
          <button
            onClick={() => setLightboxPage(1)}
            className="absolute inset-0 rounded-xl overflow-hidden border-2 border-[#ddd6fe] shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
            style={{
              transform: "rotate(-4deg) translate(10px, 8px)",
              zIndex: 1,
            }}
            aria-label="Open rulebook page 2"
          >
            <img
              src={rulebook[1].src}
              alt="Rulebook page 2"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Front card (page 1) */}
          <button
            onClick={() => setLightboxPage(0)}
            className="absolute inset-0 rounded-xl overflow-hidden border-2 border-[#c4b5fd] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            style={{
              transform: "rotate(1.5deg)",
              zIndex: 2,
            }}
            aria-label="Open rulebook page 1"
          >
            <img
              src={rulebook[0].src}
              alt="Rulebook page 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end p-3 opacity-0 hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(to top, rgba(124,58,237,0.7) 0%, transparent 60%)" }}>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Click to view</span>
            </div>
          </button>
        </div>

        {/* Download button */}
        <a
          href="/assets/Rulebook.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
          style={{ background: "#7c3aed", boxShadow: "0 4px 16px rgba(124,58,237,0.35)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Rulebook
        </a>
      </div>

      {/* Lightbox */}
      {lightboxPage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,5,30,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxPage(null)}
        >
          <div
            className="relative max-w-2xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-[#c4b5fd]/30 shadow-2xl w-full">
              <img
                src={rulebook[lightboxPage].src}
                alt={rulebook[lightboxPage].label}
                className="w-full h-auto"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLightboxPage((p) => (p! - 1 + rulebook.length) % rulebook.length)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20"
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
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="Next page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <button
              onClick={() => setLightboxPage(null)}
              className="absolute top-2 right-2 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              aria-label="Close"
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

function CardsGallery() {
  const [lightboxCard, setLightboxCard] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-2">
        {cards.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxCard(i)}
            className="rounded-xl overflow-hidden border-2 border-[#c4b5fd] hover:border-[#7c3aed] transition-all duration-200 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 group aspect-[2/3] bg-[#ede9fe] shadow-sm"
            aria-label={`View card ${i + 1}`}
          >
            <img
              src={src}
              alt={`Card ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
          style={{ background: "#7c3aed", boxShadow: "0 4px 16px rgba(124,58,237,0.35)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Cards
        </a>
      </div>

      {/* Card lightbox */}
      {lightboxCard !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,5,30,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxCard(null)}
        >
          <div
            className="relative flex flex-col items-center gap-4"
            style={{ maxWidth: 360, width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-[#c4b5fd]/30 shadow-2xl w-full">
              <img
                src={cards[lightboxCard]}
                alt={`Card ${lightboxCard + 1}`}
                className="w-full h-auto"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLightboxCard((c) => (c! - 1 + CARDS_COUNT) % CARDS_COUNT)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20"
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
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="Next card"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <button
              onClick={() => setLightboxCard(null)}
              className="absolute top-2 right-2 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              aria-label="Close"
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

const features = [
  {
    icon: "🧬",
    title: "Real Biology, Real Stakes",
    desc: "Every card and mechanic is grounded in oncology research — tumor growth, immune evasion, metastasis, and treatment response.",
  },
  {
    icon: "♟️",
    title: "Strategic Decision-Making",
    desc: "Allocate resources, adapt to evolving threats, and outmaneuver opponents in a game that rewards critical thinking.",
  },
  {
    icon: "🏫",
    title: "Built for the Classroom",
    desc: "Educator guides, discussion prompts, and standards alignment for grades 6–12. Drop-in ready, no prior knowledge needed.",
  },
  {
    icon: "🤝",
    title: "Collaborative Play",
    desc: "Can be played cooperatively or competitively. Teams work together to understand the complexity of cancer biology.",
  },
];

export default function TheGame() {
  return (
    <div className="bg-[#f8f5ff]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 text-center" style={{
        background: "linear-gradient(135deg, #1e1b2e 0%, #3b1f6e 50%, #2d1b69 100%)"
      }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #a855f7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%)"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest"
            style={{ background: "rgba(124,58,237,0.4)", border: "1px solid rgba(196,181,253,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4b5fd] inline-block" />
            Educational Card Game
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Where Biology<br />
            <span className="text-[#c4b5fd]">Meets Strategy</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Tumor Tactics is a science-based card game where players navigate the biology
            of cancer — making treatment decisions, managing immune responses, and outthinking
            tumor mechanics in real time. Designed for classrooms, driven by real oncology.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["2–4 Players", "Ages 12+", "45–60 min", "Grades 6–12"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-4 py-2 rounded-full text-white/80 uppercase tracking-wide"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(196,181,253,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white border-b border-[#ddd6fe]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7c3aed]">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
              Science-Driven Gameplay
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#ddd6fe] p-6 bg-[#f8f5ff] hover:border-[#c4b5fd] hover:shadow-md hover:shadow-purple-100 transition-all duration-200">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-bold text-[#1e1b2e] mb-2">{f.title}</h3>
                <p className="text-xs text-[#6b5f8e] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rulebook */}
      <section className="py-20 bg-[#f8f5ff] border-b border-[#ddd6fe]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7c3aed]">Rulebook</p>
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
              <div className="space-y-4 text-[#6b5f8e] text-sm leading-relaxed">
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

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "2 Pages", sub: "Quick setup and clear rules" },
                  { label: "Illustrated", sub: "Visual guides for every mechanic" },
                  { label: "Classroom-Ready", sub: "Aligned to science standards" },
                  { label: "Free PDF", sub: "Download and print instantly" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#ddd6fe] p-4 bg-white">
                    <div className="text-sm font-bold text-[#7c3aed] mb-0.5">{item.label}</div>
                    <div className="text-xs text-[#6b5f8e]">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7c3aed]">Card Deck</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b2e] mb-3" style={{ letterSpacing: "-0.03em" }}>
              All Cards
            </h2>
            <p className="text-[#6b5f8e] text-sm max-w-md mx-auto">
              Click any card to view it full size. Each card represents a biological mechanism,
              treatment option, or game event rooted in real oncology.
            </p>
          </div>

          <CardsGallery />
        </div>
      </section>
    </div>
  );
}
