import Image from "next/image";
import Link from "next/link";

type Award = {
  src: string;
  alt: string;
  href?: string;
  descriptor: string;
};

const awards: Award[] = [
  {
    src: "/assets/awards/carson'sscholarfund.png",
    alt: "Carson's Scholar Fund",
    href: "https://carsonscholars.org/",
    descriptor: "Carson Scholar",
  },
  {
    src: "/assets/awards/ideation.png",
    alt: "IdeAction Pitch Competition",
    href: "https://leadershipinnovationlab.org/ideaction-competition",
    descriptor: "IdeAction Pitch Award",
  },
  {
    src: "/assets/awards/rensselaer.png",
    alt: "Rensselaer",
    href: "https://financialaid.rpi.edu/types-aid/scholarships/rensselaer-medal",
    descriptor: "RPI Medal Recipient",
  },
  {
    src: "/assets/awards/thecontributionproject.png",
    alt: "The Contribution Project",
    href: "https://contributionproject.org/",
    descriptor: "Contribution Project Grant",
  },
  {
    src: "/assets/awards/youthcentral.png",
    alt: "Youth Central",
    href: "https://www.youthcentral.com/",
    descriptor: "Youth Central Award",
  },
  {
    src: "/assets/awards/mkro.png",
    alt: "Matt's Kindness Ripples On",
    href: "https://mattskindnessrippleson.com/",
    descriptor: "Matt Kurtz Kindness Grant",
  },
  {
    src: "/assets/awards/youthleadershipsummit.png",
    alt: "Youth Leadership Summit",
    href: "https://youthsummitusa.com/",
    descriptor: "Youth Leadership Summit Gold Impact Award",
  },
  {
    src: "/assets/acsb.jpg",
    alt: "ASCB COMPASS Outreach Grant",
    descriptor: "ASCB COMPASS Outreach Grant",
  },
  {
    src: "/assets/ECGBL.jpg",
    alt: "ECGBL 14th Educational Games Competition",
    descriptor: "ECGBL 14th Educational Games Finalist",
  },
];

// Duplicate for seamless looping
const repeated = [...awards, ...awards];

function AwardItem({ award }: { award: Award }) {
  const inner = (
    <div className="flex flex-col items-center gap-2.5 flex-shrink-0" style={{ width: 200 }}>
      <div
        className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ height: 110, width: 200 }}
      >
        <Image
          src={award.src}
          alt={award.alt}
          width={180}
          height={110}
          className="h-full w-auto object-contain max-w-[180px]"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-[#6b5f8e] text-center leading-snug">{award.descriptor}</p>
    </div>
  );

  if (award.href) {
    return (
      <a
        href={award.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={award.alt}
        className="flex-shrink-0"
      >
        {inner}
      </a>
    );
  }
  return <div className="flex-shrink-0" aria-label={award.alt}>{inner}</div>;
}

export default function Awards() {
  return (
    <section className="py-24 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Awards and Recognitions
          </h2>
          <Link
            href="/how-to-play"
            className="text-sm font-semibold text-[#7c3aed] underline underline-offset-2 hover:text-[#5b21b6] transition-colors shrink-0"
          >
            Learn about the game →
          </Link>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-0 animate-marquee" style={{ width: "max-content" }}>
          {repeated.map((award, i) => (
            <div key={i} className="px-8 mx-2">
              <AwardItem award={award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
