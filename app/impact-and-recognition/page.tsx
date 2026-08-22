import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Awards from "@/components/Awards";

export const metadata: Metadata = {
  title: "Impact & Recognition | Tumor Tactics",
  description:
    "Explore Tumor Tactics' educational impact, awards, grants, conference presentations, and media recognition for making cancer biology accessible.",
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
    href: "https://kindovermatter.com/matt-kurtz-kindness-grant-winner-announcement-19/",
  },
  {
    title: "\"Service Spotlight: Tumor Tactics\"",
    source: "The Smile Project, May 2026",
    href: "https://www.the-smile-project.com/single-post/service-spotlight-tumor-tactics",
  },
];

export default function ImpactAndRecognitionPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F8F7FF] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">The Organization</p>
            <h1
              className="mb-6 text-5xl font-black leading-tight text-[#1e1b2e] sm:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Impact &amp; Recognition
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#374151]" style={{ lineHeight: 1.7 }}>
              This page brings together the awards, grants, conference invitations, and media features Tumor Tactics has received so far.
            </p>
          </div>
        </section>

        <Impact />
        <Awards />

        <section className="border-t border-[#b4a4f0] bg-[#ede9fe] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">Conferences &amp; Presentations</p>
            <h2 className="mb-10 text-3xl font-bold text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
              Conference Schedule
            </h2>
            <div className="space-y-4">
              {conferences.map((conference) => (
                <div key={conference.event} className="rounded-xl border border-[#b4a4f0] bg-white px-6 py-5">
                  <p className="mb-1 text-sm font-bold text-[#1e1b2e]">{conference.event}</p>
                  <p className="text-xs text-[#6b5f8e]">{conference.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#b4a4f0] bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">Media &amp; Features</p>
            <h2 className="mb-10 text-3xl font-bold text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
              Featured In
            </h2>
            <div className="space-y-4">
              {press.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#b4a4f0] px-6 py-5"
                >
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-[#1e1b2e]">{item.title}</p>
                    <p className="text-xs text-[#6b5f8e]">{item.source}</p>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-semibold text-[#7c3aed] underline underline-offset-2 transition-colors hover:text-[#5b21b6]"
                  >
                    Read →
                  </a>
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
