const stats = [
  { number: "10+", label: "Schools Impacted", description: "Partner schools across the country" },
  { number: "$4k+", label: "Raised", description: "Funding kits, outreach & educator resources" },
  { number: "100s", label: "Students Reached", description: "Young learners in hands-on cancer education" },
  { number: "Growing", label: "National Outreach", description: "Expanding to new regions and communities" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-8 flex flex-col">
              <div
                className="text-4xl sm:text-5xl font-black mb-2"
                style={{ color: "#93d12e", letterSpacing: "-0.03em" }}
              >
                {stat.number}
              </div>
              <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
              <div className="text-white/70 text-xs leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
