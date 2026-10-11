import Image from "next/image";
import Link from "next/link";

const quickFacts = [
  { value: "2–4", label: "players" },
  { value: "Ages 8+", label: "built for students" },
  { value: "45–60", label: "minutes per game" },
  { value: "No prep", label: "biology taught through play" },
];

const featuredCards = [
  { src: "/assets/CARDS/4.png", alt: "CT Scan tactic card" },
  { src: "/assets/CARDS/19.png", alt: "Pot of Funding utility card" },
  { src: "/assets/CARDS/22.png", alt: "Skin Cancer card" },
  { src: "/assets/CARDS/29.png", alt: "Working Overtime event card" },
];

export default function GameSnapshot() {
  return (
    <section className="border-t border-[#b4a4f0] bg-[#f8f5ff] py-20 sm:py-24" aria-labelledby="game-overview-heading">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aed]">
            Inside the game
          </p>
          <h2
            id="game-overview-heading"
            className="max-w-xl text-4xl font-black leading-[1.02] text-[#1e1b2e] sm:text-5xl"
            style={{ letterSpacing: "-0.035em" }}
          >
            Real oncology becomes a strategy students can hold in their hands.
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-7 text-[#3d2f6b]">
            Players act as doctors, choose treatments, manage side effects, and adapt as tumors change. Every mechanic points back to something real about cancer biology, while the table stays collaborative and active.
          </p>

          <dl className="mt-9 grid grid-cols-2 border-y border-[#b4a4f0]">
            {quickFacts.map((fact) => (
              <div key={fact.value} className="border-b border-[#d9d0f5] py-4 odd:pr-4 even:pl-4 [&:nth-last-child(-n+2)]:border-b-0">
                <dt className="text-lg font-black text-[#1e1b2e]">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-[#6b5f8e]">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/how-to-play"
              className="bg-[#1e1b2e] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#332c46]"
            >
              Learn How to Play
            </Link>
            <Link
              href="/shop"
              className="border border-[#7c3aed] px-6 py-3 text-sm font-bold text-[#6d28d9] transition-colors hover:bg-[#ede9fe]"
            >
              Preorder the Kit
            </Link>
          </div>
          <Link
            href="/game"
            className="mt-5 inline-flex text-sm font-semibold text-[#7c3aed] underline underline-offset-4 transition-colors hover:text-[#5b21b6]"
          >
            Or download the free print-and-play deck →
          </Link>
        </div>

        <figure>
          <div className="grid gap-3 sm:gap-4">
            <div className="relative aspect-[3/2] overflow-hidden border border-[#b4a4f0] bg-[#fdfcff]">
              <Image
                src="/assets/Boxsleeve.png"
                alt="Tumor Tactics box sleeve artwork"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {featuredCards.map((card) => (
                <div key={card.src} className="relative aspect-[3/4] overflow-hidden border border-[#b4a4f0] bg-[#fdfcff]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 13vw"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </figure>
      </div>
    </section>
  );
}
