const stats = [
  {
    number: "10+",
    label: "Schools Impacted",
    description: "Partner schools and classrooms across the country",
    color: "blue",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
      </svg>
    ),
  },
  {
    number: "$4,000+",
    label: "Raised for Cancer Education",
    description: "Funding game kits, outreach, and educator resources",
    color: "violet",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "Hundreds",
    label: "Students Reached",
    description: "Young learners engaged in hands-on cancer education",
    color: "emerald",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "Growing",
    label: "National Outreach",
    description: "Expanding to new regions, schools, and communities",
    color: "orange",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-950/60", icon: "text-blue-400" },
  violet: { bg: "bg-violet-950/60", icon: "text-violet-400" },
  emerald: { bg: "bg-emerald-950/60", icon: "text-emerald-400" },
  orange: { bg: "bg-orange-950/60", icon: "text-orange-400" },
};

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Measurable Change in Classrooms
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            From individual classrooms to national outreach, Tumor Tactics is
            making cancer education accessible and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const colors = colorMap[stat.color];
            return (
              <div
                key={stat.label}
                className="bg-slate-800 rounded-2xl p-7 shadow-sm border border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <div className={`inline-flex p-2.5 rounded-xl ${colors.bg} ${colors.icon} mb-5`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1.5">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
