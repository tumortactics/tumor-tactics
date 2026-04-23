import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Tumor Tactics",
  description:
    "Tumor Tactics was founded by three juniors from Canyon Crest Academy in San Diego. Learn our story, meet the team, and explore our mission.",
};

const teamMembers = [
  {
    id: "photo-daniel",
    initials: "DZ",
    name: "Daniel Zhang",
    role: "Co-Founder & CEO",
    school: "Junior, Canyon Crest Academy, San Diego CA",
    bio: "Daniel has conducted cancer research at UC Davis Cancer Center, Boston University, and Cambridge University. His grandmother's death from pancreatic cancer and his grandfather's bladder cancer diagnosis are the personal fuel behind Tumor Tactics.",
  },
  {
    id: "photo-zachary",
    initials: "ZT",
    name: "Zachary Tou",
    role: "Co-Founder & COO",
    school: "Junior, Canyon Crest Academy, San Diego CA",
    bio: "[Placeholder — update with Zachary's bio and background.]",
  },
  {
    id: "photo-ayan",
    initials: "AP",
    name: "Ayan Pendharkar",
    role: "Co-Founder & CTO",
    school: "Junior, Canyon Crest Academy, San Diego CA",
    bio: "[Placeholder — update with Ayan's bio and background.]",
  },
];

const galleryPhotos = [
  { src: "/assets/IMG_3707.jpg", alt: "Students playing Tumor Tactics in classroom" },
  { src: "/assets/IMG_8204.jpg", alt: "Students engaged in Tumor Tactics gameplay" },
  { src: "/assets/IMG_8209.jpg", alt: "Game discussion session" },
  { src: "/assets/homepage/658048246_2850481231967445_7689248314367044663_n.jpg", alt: "Students receiving Tumor Tactics kits" },
  { src: "/assets/homepage/IMG_3343.jpg", alt: "Tumor Tactics game components" },
  { src: "/assets/homepage/IMG_3344.jpg", alt: "Workshop session" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-24" style={{ background: "#F8F7FF" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="eyebrow mb-6">About Us</div>
            <h1
              className="text-5xl sm:text-6xl font-black text-[#1e1b2e] mb-6 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              A team of student researchers who&apos;ve lived close to cancer.
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed" style={{ lineHeight: 1.7 }}>
              Tumor Tactics was founded by three juniors at Canyon Crest Academy in San Diego, California — each with a personal or research connection to oncology and a shared belief that cancer education shouldn&apos;t wait until college.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="eyebrow mb-4">Our Story</div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-10 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Born from loss. Built with purpose.
            </h2>

            <div className="space-y-6 text-[#374151] leading-relaxed text-lg" style={{ lineHeight: 1.8 }}>
              <p>
                When Daniel was nine years old, his grandmother — the person who raised him while his parents worked, the one who played card games with him at the kitchen table for hours — died of pancreatic cancer. Nobody explained it to him. He knew she was sick, then he knew she was gone. The words the doctors used were a foreign language no one translated for a nine-year-old.
              </p>
              <p>
                Years later, when his grandfather was diagnosed with bladder cancer during junior year, Daniel was old enough to sit in the oncology waiting room and actually read the pathology reports. He understood what those words meant by then, because he was already conducting cancer research — at UC Davis Cancer Center analyzing 1,450+ patient samples, at Cambridge studying bladder cancer multi-omics, and at Boston University studying redox signaling. He kept thinking about the distance between those two experiences: one where he was completely in the dark, one where the science gave him something to hold onto.
              </p>
              <p>
                The question that followed was simple and uncomfortable: how many kids are still stuck in the first version of that experience? Sitting in a waiting room with no vocabulary for what&apos;s happening to someone they love?
              </p>
              <p>
                Tumor Tactics grew out of that question. The game mechanics were built around real oncology decisions — players act as doctors managing Lung, Colon, and Skin tumor cases, choosing between chemotherapy, immunotherapy, surgery, and targeted therapy, navigating drug resistance events and side effect tradeoffs, racing to achieve remission before the tumor progresses. The science is real. The decisions mirror what oncologists actually weigh. And it all fits in a deck of cards.
              </p>
              <p>
                We tested our first prototype at Deer Canyon Elementary in San Diego. We&apos;ve assembled 100 decks. We&apos;re targeting 500 distributed by end of summer. We&apos;re just getting started.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24" style={{ background: "#F8F7FF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="eyebrow mb-4">The Team</div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-12 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meet the people behind the game.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center border border-[#ddd6fe] p-8 bg-white">
                  {/* Photo placeholder */}
                  <div
                    id={member.id}
                    className="mb-6 flex-shrink-0 flex items-end justify-center overflow-hidden bg-[#f8f5ff]"
                    style={{ width: 96, height: 120, border: "1px solid #ddd6fe" }}
                    aria-label={`Photo placeholder for ${member.name}`}
                  >
                    <svg viewBox="0 0 96 80" width="96" height="80" fill="none" aria-hidden="true">
                      <circle cx="48" cy="20" r="20" fill="#ddd6fe" />
                      <path d="M0 80c0-26.51 21.49-48 48-48s48 21.49 48 48" fill="#ddd6fe" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1b2e] mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#6B21E8" }}>{member.role}</p>
                  <p className="text-xs text-[#6b5f8e] mb-5">{member.school}</p>
                  <p className="text-sm text-[#374151] leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEAMLabs connection */}
        <section className="py-16" style={{ background: "#F5F3FF" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#374151] leading-relaxed text-lg" style={{ lineHeight: 1.8 }}>
              Tumor Tactics is a project of STEAMLabs International, a 501(c)(3) nonprofit organization co-founded by Daniel Zhang that has run STEAM education events across 11 cities in 7 states, reaching 1,000+ students. Our tax-exempt status means every kit purchase is part of a mission — not a margin.
            </p>
            <div className="mt-6">
              <a
                href="https://steamlabsintl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: "#6B21E8" }}
              >
                Visit STEAMLabs International →
              </a>
            </div>
          </div>
        </section>

        {/* Awards */}
        <Awards />

        {/* Photo grid: Tumor Tactics in Action */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="eyebrow mb-4">In The Field</div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] mb-12 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tumor Tactics in Action
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden aspect-square"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
