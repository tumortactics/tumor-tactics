import Image from "next/image";

const awards = [
  { src: "/assets/awards/carson'sscholarfund.png", alt: "Carson's Scholar Fund", href: "https://carsonscholars.org/" },
  { src: "/assets/awards/ideation.png", alt: "Ideaction Pitch Competition", href: "https://leadershipinnovationlab.org/ideaction-competition" },
  { src: "/assets/awards/rensselaer.png", alt: "Rensselaer", href: "https://financialaid.rpi.edu/types-aid/scholarships/rensselaer-medal" },
  { src: "/assets/awards/thecontributionproject.png", alt: "The Contribution Project", href: "https://contributionproject.org/" },
  { src: "/assets/awards/youthcentral.png", alt: "Youth Central", href: "https://www.youthcentral.com/" },
  { src: "/assets/awards/mkro.png", alt: "Matt's Kindess Ripples On", href: "https://mattskindnessrippleson.com/" },
  { src: "/assets/awards/youthleadershipsummit.png", alt: "Youth Leadership Summit", href: "https://youthsummitusa.com/" },
];

// Duplicate for seamless looping
const repeated = [...awards, ...awards];

export default function Awards() {
  return (
    <section className="py-24 bg-white border-t border-[#b4a4f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1e1b2e] leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Awards &amp; Honors
          </h2>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {repeated.map((award, i) => (
            <a
              key={i}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl px-8 mx-4 transition-transform duration-300 hover:scale-110 flex-shrink-0"
              style={{ height: 140, width: 220 }}
              aria-label={award.alt}
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={200}
                height={120}
                className="h-full w-auto object-contain max-w-[200px]"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
