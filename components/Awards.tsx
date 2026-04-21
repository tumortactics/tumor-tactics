const awards = [
  { src: "/assets/awards/carson'sscholarfund.png", alt: "Carson's Scholar Fund", href: "https://carsonscholars.org/" },
  { src: "/assets/awards/ideation.png", alt: "Ideaction Pitch Competition", href: "https://leadershipinnovationlab.org/ideaction-competition" },
  { src: "/assets/awards/rensselaer.png", alt: "Rensselaer", href: "https://financialaid.rpi.edu/types-aid/scholarships/rensselaer-medal" },
  { src: "/assets/awards/thecontributionproject.png", alt: "The Contribution Project", href: "https://contributionproject.org/" },
  { src: "/assets/awards/youthcentral.png", alt: "Youth Central", href: "https://www.youthcentral.com/" },
  { src: "/assets/awards/youthleadershipsummit.png", alt: "Youth Leadership Summit", href: "https://youthsummitusa.com/" },
];

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

        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((award) => (
            <a
              key={award.alt}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl p-4 transition-all duration-300 hover:scale-110"
              style={{ height: 80 }}
              aria-label={award.alt}
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-full w-auto object-contain max-w-[160px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
