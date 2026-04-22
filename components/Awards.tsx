const awards = [
  { src: "/assets/awards/carson'sscholarfund.png", alt: "Carson's Scholar Fund", href: "https://carsonscholars.org/" },
  { src: "/assets/awards/ideation.png", alt: "Ideaction Pitch Competition", href: "https://leadershipinnovationlab.org/ideaction-competition" },
  { src: "/assets/awards/rensselaer.png", alt: "Rensselaer", href: "https://financialaid.rpi.edu/types-aid/scholarships/rensselaer-medal" },
  { src: "/assets/awards/thecontributionproject.png", alt: "The Contribution Project", href: "https://contributionproject.org/" },
  { src: "/assets/awards/youthcentral.png", alt: "Youth Central", href: "https://www.youthcentral.com/" },
  { src: "/assets/awards/youthleadershipsummit.png", alt: "Youth Leadership Summit", href: "https://youthsummitusa.com/" },
];

// Duplicate for seamless looping
const repeated = [...awards, ...awards];

export default function Awards() {
  return (
    <section className="py-24 bg-white border-t border-[#ddd6fe]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-[#7c3aed]">
            Recognition
          </p>
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
              className="flex items-center justify-center rounded-xl px-8 mx-4 transition-all duration-300 hover:scale-110 flex-shrink-0"
              style={{ height: 140 }}
              aria-label={award.alt}
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-full w-auto object-contain max-w-[220px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
