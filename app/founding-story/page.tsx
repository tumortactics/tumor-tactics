import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founding Story | Tumor Tactics",
  description:
    "Born from loss. Built with purpose. The story behind Tumor Tactics — and the two students who built what they once desperately needed.",
};

export default function FoundingStoryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-24" style={{ background: "#1e1b2e" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#c4b5fd] text-xs font-bold uppercase tracking-widest mb-6">Our Story</p>
            <h1
              className="text-5xl sm:text-6xl font-black text-white mb-8 leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Kindness of Being Seen
            </h1>
          </div>
        </section>

        {/* Story body */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-[#374151] leading-relaxed text-lg" style={{ lineHeight: 1.85 }}>

              {/* Image floated right — text wraps around it */}
              <div className="float-right ml-10 mb-6 rounded-2xl overflow-hidden border border-[#b4a4f0] shadow-xl" style={{ width: 300 }}>
                <Image
                  src="/assets/daniel-grandmother.jpg"
                  alt="Daniel and his grandmother"
                  width={300}
                  height={380}
                  className="object-cover w-full"
                  priority
                />
              </div>

              <p className="mt-0">
                She taught him mahjong before he could properly shuffle a deck. He would sit across from her at the table, tiles clicking, the two of them laughing in a way that did not need a shared language to work. She was the person who picked him up from school, cooked for him, let him climb into her lap when he was tired. She was his person.
              </p>
              <p>
                When Daniel was nine, his grandma was diagnosed with stage 3 pancreatic cancer.
              </p>
              <p>
                What followed were eight months of hospital visits he did not fully understand. He watched his grandmother get weaker even though the treatments were supposed to be making her better. He watched her lose her hair. He watched her exhaust herself just crossing a room. The medicine that was supposed to help her seemed to be hurting her, and nobody explained why.
              </p>
              <p>
                Some of the doctors stopped. A few of them sat down next to a nine-year-old in the waiting room and explained, gently and simply, what was happening inside his grandmother&apos;s body. Not perfectly. Not in a way that made everything okay. But in a way that made it a little less terrifying. That mattered more than Daniel knew how to say.
              </p>
              <p>
                Six months after her diagnosis, his grandmother was gone.
              </p>
              <p>
                What brought him back, slowly, was card games. The same ones they used to play together. There is something about holding cards in your hands and sitting across from someone. It was the closest thing he had to still feeling her near.
              </p>
              <p>
                Years passed. Daniel was fifteen when cancer came back into his family, this time his grandfather. In the doctor&apos;s office that day, Daniel&apos;s seven-year-old sister sat with the same look on her face that he remembered from his own childhood: she was trying to understand something impossible, and no one was giving her the words.
              </p>
              <p>
                So Daniel became the one who gave them. He read the medical reports. He translated the complicated language into something a seven-year-old could hold onto. He gave her what he had once desperately needed — not a perfect answer, but something steady.
              </p>
              <p>
                From that moment, Tumor Tactics started to become real.
              </p>
              <p>
                Zachary had grown up on strategy card games like Pokemon and Yu-Gi-Oh, the kind that made learning tactics feel like play. When his great-aunt went through cancer treatment, he ran into the same wall Daniel had. There was no way for a kid to actually understand what was happening. No resource that met you where you were. He wanted to build one.
              </p>
              <p>
                Together, they asked a simple question: what if a card game could give kids the explanation they never had? Not a version of cancer simplified into something comfortable, but the real biology: the tumor stages, the treatment tradeoffs, the side effects and why they happen, all of it translated into something you would actually want to pick up and play.
              </p>
              <p>
                Tumor Tactics is their answer to that question. Every card is grounded in real oncology. Every mechanic reflects something true about how cancer behaves and how doctors fight it. The game does not pretend cancer is easy. It just makes cancer understandable, at the age when kids are already living alongside it.
              </p>

              <div className="clear-both" />
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-10 px-8 sm:px-14" style={{ background: "#1e1b2e" }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch gap-10 sm:gap-14">
            {/* Left — team photo */}
            <div className="relative sm:w-2/5 flex-shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: 420, border: "3px solid white" }}>
              <Image
                src="/assets/team.jpg"
                alt="The Tumor Tactics team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>

            {/* Right — quote */}
            <div className="flex items-center py-6 sm:w-3/5">
              <blockquote>
                <p
                  className="text-3xl sm:text-4xl font-black text-white leading-snug mb-8"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  &ldquo;We wanted to give kids the explanation we never had — through something they&apos;d actually want to pick up and play.&rdquo;
                </p>
                <footer className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                  Daniel Zhang &amp; Zachary Tou, Co-Founders
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA row */}
        <section className="py-16 bg-white border-t border-[#b4a4f0]">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px shadow-md"
              style={{ background: "#1e1b2e" }}
            >
              Meet the Team
            </Link>
            <Link
              href="/how-to-play"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-[#7c3aed] border border-[#c4b5fd] bg-white hover:bg-[#ede9fe] transition-[background-color,transform] active:translate-y-px"
            >
              See the Game
            </Link>
          </div>
          <p className="text-xs text-[#9ca3af] italic text-center mt-8 px-6">
            This story was featured in Matt&apos;s Kindness Ripples On and The Smile Project in 2026.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
