import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Awards from "@/components/Awards";
import PressSection from "@/components/PressSection";
import PageJourney from "@/components/PageJourney";

export const metadata: Metadata = {
  title: "Impact & Recognition | Tumor Tactics",
  description:
    "Explore Tumor Tactics' educational impact, awards, grants, conference presentations, and media recognition for making cancer biology accessible.",
};

const conferences = [
  {
    event: "UN Science Summit",
    detail: "Virtual session · September 26, 2026 · 10 AM–12 PM PDT",
  },
  {
    event: "ECGBL 14th Educational Games Competition",
    detail: "Finalist · TU Darmstadt, Germany · September 30 – October 2, 2026",
  },
  {
    event: "INBC 2026",
    detail: "Oral Presenter · Boston, MA · October 2026",
  },
];

export default function ImpactAndRecognitionPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F8F7FF] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">
              The Organization
            </p>
            <h1
              className="mb-6 text-5xl font-black leading-tight text-[#1e1b2e] sm:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Impact &amp; Recognition
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#374151]">
              Follow the classrooms reached, recognition earned, and conversations Tumor Tactics is helping create around accessible cancer education.
            </p>
          </div>
        </section>

        <Impact />
        <Awards variant="static" />
        <PressSection variant="archive" />

        <section className="border-t border-[#b4a4f0] bg-[#ede9fe] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">
              Conferences &amp; presentations
            </p>
            <h2 className="mb-10 text-3xl font-bold text-[#1e1b2e]" style={{ letterSpacing: "-0.03em" }}>
              Conference schedule
            </h2>
            <div className="border-y border-[#b4a4f0]">
              {conferences.map((conference, index) => (
                <div
                  key={conference.event}
                  className="grid gap-2 border-b border-[#b4a4f0] py-5 last:border-b-0 sm:grid-cols-[44px_1fr_1.2fr] sm:items-baseline"
                >
                  <span className="text-sm font-black text-[#9b87da]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-bold text-[#1e1b2e]">{conference.event}</p>
                  <p className="text-xs leading-relaxed text-[#6b5f8e]">{conference.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PageJourney page="impact" />
      </main>
      <Footer />
    </>
  );
}
