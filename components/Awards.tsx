const awards = [
  { name: "Award / Organization Name", href: "#", year: "2024" },
  { name: "Award / Organization Name", href: "#", year: "2024" },
  { name: "Award / Organization Name", href: "#", year: "2023" },
  { name: "Award / Organization Name", href: "#", year: "2023" },
  { name: "Award / Organization Name", href: "#", year: "2023" },
  { name: "Award / Organization Name", href: "#", year: "2022" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {awards.map((award, i) => (
            <a
              key={i}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#ddd6fe] p-5 hover:border-[#c4b5fd] hover:shadow-md hover:shadow-purple-100 transition-all duration-200 bg-[#f8f5ff]"
            >
              {/* Logo placeholder */}
              <div
                className="w-full aspect-[3/2] rounded-xl flex items-center justify-center border border-[#ddd6fe] bg-white group-hover:border-[#c4b5fd] transition-colors"
              >
                <span className="text-xs text-[#c4b5fd] font-medium text-center px-2 leading-snug">
                  Logo Here
                </span>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-[#1e1b2e] leading-snug group-hover:text-[#7c3aed] transition-colors">
                  {award.name}
                </p>
                <p className="text-xs text-[#a89bc9] mt-0.5">{award.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
