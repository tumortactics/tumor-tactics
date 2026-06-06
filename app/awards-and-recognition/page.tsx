import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";

export const metadata: Metadata = {
  title: "Awards and Recognition | Tumor Tactics",
  description:
    "Tumor Tactics has been recognized by educators, scientists, and youth organizations for making cancer biology accessible. Awards, conferences, and press.",
};

const conferences = [
  {
    event: "ECGBL 14th Educational Games Competition",
    detail: "Finalist · TU Darmstadt, Germany · September 30 – October 2, 2026",
  },
  {
    event: "UN Science Summit",
    detail: "Speaker · New York, NY · September 8, 2026",
  },
  {
    event: "INBC 2026",
    detail: "Oral Presenter · Boston, MA · October 2026",
  },
  {
    event: "International Serious Play Awards 2026",
    detail: "K12 Tabletop Student Entry · Results announced August 2026",
  },
];

const press = [
  {
    title: "\"The Kindness of Being Seen\"",
    source: "Matt's Kindness Ripples On, May 2026",
    href: null, // Daniel to provide URL
  },
  {
    title: "\"Service Spotlight: Tumor Tactics\"",
    source: "The Smile Project, May 2026",
    href: null, // Daniel to provide URL
  },
];

export default function AwardsAndRecognitionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-24" style={{ background: "#F8F7FF" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-6">The Organization</p>
            <h1
              className="text-5xl sm:text-6xl font-black text-[#1e1b2e] mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Awards and Recognition
            </h1>
            <p className="text-lg text-[#374151] leading-relaxed max-w-2xl" style={{ lineHeight: 1.7 }}>
              Tumor Tactics has been recognized by educators, scientists, and youth organizations for its commitment to making cancer biology accessible. Every recognition listed here reflects what the people behind this game already knew: that kids deserve real science at the age when they are already living alongside it.
            </p>
          </div>
        </section>

        {/* Awards grid — reuses the same component as the homepage */}
        <Awards />

        {/* Conferences and Presentations */}
        <section className="py-20 bg-[#ede9fe] border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Conferences &amp; Presentations</p>
            <h2
              className="text-3xl font-bold text-[#1e1b2e] mb-10"
              style={{ letterSpacing: "-0.03em" }}
            >
              Where We&apos;ve Presented
            </h2>
            <div className="space-y-4">
              {conferences.map((c) => (
                <div
                  key={c.event}
                  className="rounded-xl border border-[#b4a4f0] bg-white px-6 py-5"
                >
                  <p className="text-sm font-bold text-[#1e1b2e] mb-1">{c.event}</p>
                  <p className="text-xs text-[#6b5f8e]">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="py-20 bg-white border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest mb-4">Press</p>
            <h2
              className="text-3xl font-bold text-[#1e1b2e] mb-10"
              style={{ letterSpacing: "-0.03em" }}
            >
              Featured In
            </h2>
            <div className="space-y-4">
              {press.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#b4a4f0] px-6 py-5 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-bold text-[#1e1b2e] mb-0.5">{item.title}</p>
                    <p className="text-xs text-[#6b5f8e]">{item.source}</p>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#7c3aed] underline underline-offset-2 hover:text-[#5b21b6] transition-colors shrink-0"
                    >
                      Read →
                    </a>
                  ) : (
                    <span className="text-xs text-[#9ca3af] italic shrink-0">URL coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
