const stats = [
  { number: "10+", label: "Schools Impacted", description: "Partner schools across the country" },
  { number: "$4k+", label: "Raised", description: "Funding kits, outreach & educator resources" },
  { number: "100s", label: "Students Reached", description: "Young learners in hands-on cancer education" },
  { number: "Growing", label: "National Outreach", description: "Expanding to new regions and communities" },
];

export default function Impact() {
  return (
    <section id="impact" className="border-y border-[#b4a4f0] bg-[#1e1b2e] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#c4b5fd]">Our Impact</p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Cancer education that reaches beyond the deck.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-[#1e1b2e] p-8">
              <div
                className="mb-2 text-4xl font-black text-[#c4b5fd] sm:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                {stat.number}
              </div>
              <div className="mb-1 text-sm font-bold text-white">{stat.label}</div>
              <div className="text-xs leading-relaxed text-white/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
