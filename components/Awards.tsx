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
    src: "/assets/awards/serious-play-2026.png",
    alt: "2026 International Serious Play Awards K12 Tabletop Winner badge",
    href: "https://seriousplayconf.com/awards-2026/",
    descriptor: "2026 International Serious Play Award",
  },
  {
    src: "/assets/awards/carson'sscholarfund.png",
    alt: "Carson's Scholar Fund",
    href: "https://carsonscholars.org/scholarshowcase2026/",
    descriptor: "Carson Scholar",
  },
  {
    src: "/assets/awards/ideation.png",
    alt: "IdeAction Pitch Competition",
    href: "https://img1.wsimg.com/blobby/go/b5123333-6230-4d94-a84d-8111e500bb03/downloads/60eab6b6-7948-4b99-97f6-3685329d48f2/Nov_25-Apr_26%20Cycle%20LVF%20Press%20Release.pdf",
    descriptor: "IdeAction Pitch Award",
  },
  {
    src: "/assets/awards/rensselaer.png",
    alt: "Rensselaer",
    descriptor: "RPI Medal Recipient",
  },
  {
    src: "/assets/awards/thecontributionproject.png",
    alt: "The Contribution Project",
    descriptor: "Contribution Project Grant",
  },
  {
    src: "/assets/awards/youthcentral.png",
    alt: "Youth Central",
    descriptor: "Youth Central Award",
  },
  {
    src: "/assets/awards/mkro.png",
    alt: "Matt's Kindness Ripples On",
    href: "https://mattskindnessrippleson.com/uncategorized/the-kindness-of-being-seen/",
    descriptor: "Matt Kurtz Kindness Grant",
  },
  {
    src: "/assets/awards/youthleadershipsummit.png",
    alt: "Youth Leadership Summit",
    descriptor: "Youth Leadership Summit Gold Impact Award",
  },
  {
    src: "/assets/acsb.jpg",
    alt: "ASCB COMPASS Outreach Grant",
    href: "https://www.ascb.org/society-news/teaching-cancer-biology-through-a-card-game-how-tumor-tactics-brought-oncology-to-san-diegos-k-8-classrooms/",
    descriptor: "ASCB COMPASS Outreach Grant",
  },
  {
    src: "/assets/ECGBL.jpg",
    alt: "ECGBL 14th Educational Games Competition",
    descriptor: "ECGBL 14th Educational Games Finalist",
  },
  {
    src: "/assets/IMG_5023.png",
    alt: "Young Planet Leader",
    descriptor: "September 2026 Young Planet Leader",
  },
  {
    src: "/assets/IMG_3305.png",
    alt: "Community Champion of the Month",
    href: "https://sd38.senate.ca.gov/community-champion/daniel-zhang",
    descriptor: "Community Champion of the Month (August 2025)",
  },
];

function AwardItem({ award, staticLayout = false, duplicate = false }: { award: Award; staticLayout?: boolean; duplicate?: boolean }) {
  const inner = (
    <div className={`flex flex-col items-center gap-4 ${staticLayout ? "w-full" : "w-[200px] shrink-0"}`}>
      <div
        className={`flex w-full items-center justify-center ${staticLayout ? "h-36 sm:h-40" : "h-[110px]"}`}
      >
        <Image
          src={award.src}
          alt={award.alt}
          width={180}
          height={110}
          className={`${staticLayout ? "h-36 w-full max-w-[200px] sm:h-40" : "h-[110px] w-[180px]"} object-contain`}
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
        aria-label={award.descriptor}
        tabIndex={duplicate ? -1 : undefined}
        className="block shrink-0 rounded-sm transition-opacity hover:opacity-80"
      >
        {inner}
      </a>
    );
  }
  return <div className="flex-shrink-0" aria-label={award.alt}>{inner}</div>;
}

export default function Awards({ variant = "carousel" }: { variant?: "carousel" | "static" }) {
  const staticLayout = variant === "static";
  return (
    <section className="py-24 bg-white border-t border-[#b4a4f0]" aria-labelledby="awards-heading">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2
            id="awards-heading"
            className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Awards &amp; Recognition
          </h2>
          <Link
            href={staticLayout ? "/how-to-play" : "/impact-and-recognition#awards-heading"}
            className="text-sm font-semibold text-[#7c3aed] underline underline-offset-2 hover:text-[#5b21b6] transition-colors shrink-0"
          >
            {staticLayout ? "Learn about the game →" : "Explore our recognition →"}
          </Link>
        </div>
      </div>

      {staticLayout ? (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-6 sm:grid-cols-3 lg:grid-cols-4">
          {awards.map((award) => (
            <div key={award.src} className="min-w-0 border-t border-[#ddd6fe] pt-6">
              <AwardItem award={award} staticLayout />
            </div>
          ))}
        </div>
      ) : (
          <div className="awards-carousel overflow-hidden">
            <div className="awards-track flex animate-marquee" style={{ width: "max-content" }}>
              <div className="flex">
                {awards.map((award) => (
                  <div key={award.src} className="px-8 mx-2"><AwardItem award={award} /></div>
                ))}
              </div>
              <div className="awards-duplicate flex" aria-hidden="true">
                {awards.map((award) => (
                  <div key={award.src} className="px-8 mx-2"><AwardItem award={award} duplicate /></div>
                ))}
              </div>
            </div>
          </div>
      )}
    </section>
  );
}
