import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Play | Tumor Tactics",
  description:
    "Learn how to play Tumor Tactics — the strategy card game where every player is a doctor. 2–4 players · Ages 8+ · 45–60 minutes.",
};

const setupSteps = [
  "Separate all Cancer Cards from the rest of the deck.",
  "Deal each player one Lung, one Colon, and one Skin cancer card. Place these face-up in front of you. These are your starting tumors.",
  "Place 6 HP tokens on each tumor.",
  "Separate all Event Cards.",
  "Combine all Tactic and Utility cards into one shuffled deck.",
  "Each player draws 7 cards. This is your starting hand.",
  "Shuffle (number of players + 6) random Cancer cards into the deck, then shuffle in all Event cards. This is the final draw pile.",
  "Choose a starting player at random. Play proceeds clockwise.",
];

const cardTypes = [
  {
    label: "Cancer Cards",
    color: "#ef4444",
    borderColor: "#fca5a5",
    cardImg: "/assets/CARDS/1.png",
    body: "Cancer cards represent your patients' tumors: Lung, Colon, and Skin. Each tumor starts at Stage 1 with 6 HP. If you draw a Cancer card for a tumor you still have active, that tumor advances one stage and gains 1 HP. If you draw a Cancer card for a tumor you have already cured, that cancer comes back as a new Stage 1 tumor with 4 HP. Higher stages are harder to treat.",
  },
  {
    label: "Tactic Cards",
    color: "#16a34a",
    borderColor: "#86efac",
    cardImg: "/assets/CARDS/5.png",
    body: "Tactic cards represent treatments and cancer-fighting actions. Most are most effective against one specific cancer type (Lung, Colon, or Skin), but some work on all types. When you play a Tactic card, you may need to roll a die depending on that tumor's stage. Stage 1 is always a success. Stages 2 through 4 require progressively higher rolls. If you succeed, deal the damage and discard the card. If you fail, deal no damage, discard the card, and the tumor heals 1 HP.",
  },
  {
    label: "Utility Cards",
    color: "#2563eb",
    borderColor: "#93c5fd",
    cardImg: "/assets/CARDS/15.png",
    body: "Utility cards let you take tactical actions: peek at upcoming cards, disrupt opponents, or trigger special effects. You may play only one Utility card per turn unless a card says otherwise.",
  },
  {
    label: "Event Cards",
    color: "#d97706",
    borderColor: "#fcd34d",
    cardImg: "/assets/CARDS/25.png",
    body: "Event cards must be played immediately when drawn. They create a board-wide effect that affects all players and lasts until every player has taken one turn. Only one event can be active at a time. If you draw a second event while one is still active, wait until the first event ends, then play the second.",
  },
];

export default function HowToPlayPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-24 text-center" style={{ background: "#1e1b2e" }}>
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[#c4b5fd] text-xs font-bold uppercase tracking-widest mb-4">The Game</p>
            <h1
              className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              How to Play
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Tumor Tactics is a strategy card game where every player is a doctor. The science is real. The decisions are yours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              {["2–4 players", "Ages 8+", "45–60 minutes", "No biology background needed"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 text-white/75 uppercase tracking-widest"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(196,181,253,0.25)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 — Objective */}
        <section className="py-20 bg-white border-b border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Objective</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Be the first doctor to cure all three of your patients&rsquo; tumors.
            </h2>
            <p className="text-[#374151] text-base leading-relaxed max-w-2xl">
              Each player starts with three tumors: Lung, Colon, and Skin. Each tumor begins at Stage 1 with 6 HP. Cure all three at the same time to win.
            </p>
          </div>
        </section>

        {/* Section 2 — Setup */}
        <section className="py-20 bg-[#ede9fe]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Setup</p>
            <h2
              className="text-3xl font-bold text-[#1e1b2e] mb-10"
              style={{ letterSpacing: "-0.03em" }}
            >
              Before you play
            </h2>
            <ol className="space-y-4">
              {setupSteps.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#7c3aed" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[#374151] text-sm leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 3 — Turn Order */}
        <section className="py-20 bg-white border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Turn Order</p>
            <h2
              className="text-3xl font-bold text-[#1e1b2e] mb-10"
              style={{ letterSpacing: "-0.03em" }}
            >
              Each turn, in order
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#86efac" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#16a34a" }}>
                  Phase 1 — Tactic
                </p>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Play up to one Tactic card. You may skip this phase.
                </p>
              </div>
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#93c5fd" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#2563eb" }}>
                  Phase 2 — Utility
                </p>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Play up to one Utility card. You may skip this phase.
                </p>
              </div>
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#b4a4f0" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#7c3aed]">
                  Phase 3 — Draw
                </p>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Draw one card. You must always draw. Your turn ends.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#6b5f8e] italic text-center">
              You can skip phases 1 or 2, but you must always draw a card to end your turn.
            </p>
          </div>
        </section>

        {/* Section 4 — Card Types */}
        <section className="py-20 bg-[#ede9fe] border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Card Types</p>
            <h2
              className="text-3xl font-bold text-[#1e1b2e] mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              What&rsquo;s in the deck
            </h2>
            <div className="space-y-8">
              {cardTypes.map((ct) => (
                <div
                  key={ct.label}
                  className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-start rounded-2xl bg-white border p-6"
                  style={{ borderColor: ct.borderColor }}
                >
                  <div
                    className="relative rounded-xl overflow-hidden border-2 flex-shrink-0"
                    style={{ width: 100, height: 138, borderColor: ct.color }}
                  >
                    <Image
                      src={ct.cardImg}
                      alt={`${ct.label} example`}
                      fill
                      className="object-cover"
                      sizes="100px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: ct.color }}
                    >
                      {ct.label}
                    </p>
                    <p className="text-[#374151] text-sm leading-relaxed">{ct.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Win Condition */}
        <section className="py-20 bg-white border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Win Condition</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#1e1b2e] mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Cure all three tumors at the same time.
            </h2>
            <p className="text-[#374151] text-base leading-relaxed max-w-2xl">
              When a tumor reaches 0 HP, move it to your personal Cured pile. You win the moment all three tumors (Lung, Colon, Skin) are in your Cured pile simultaneously. Watch out for Cancer Metastasis events and relapse Cancer cards that can bring cured tumors back.
            </p>
          </div>
        </section>

        {/* Section 6 — CTAs */}
        <section className="py-20 bg-[#ede9fe] border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/assets/Rulebook.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px shadow-md"
              style={{ background: "#1e1b2e" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download free rulebook PDF
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px shadow-md"
              style={{ background: "#7c3aed" }}
            >
              Get the full kit — $19.99
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
