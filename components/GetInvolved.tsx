const options = [
  {
    title: "Partner With Us",
    description:
      "Organizations and institutions can collaborate with Tumor Tactics to bring cancer education to more classrooms. We welcome partnerships with schools, hospitals, nonprofits, and research institutions.",
    cta: "Become a Partner",
    href: "#contact",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Bring the Game to Your School",
    description:
      "Educators can request a Tumor Tactics classroom kit for their science curriculum. We provide game materials, educator guides, and lesson plans aligned with science standards for grades 6–12.",
    cta: "Request a Kit",
    href: "#contact",
    color: "violet",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
      </svg>
    ),
  },
  {
    title: "Donate to Support Expansion",
    description:
      "Your contribution directly funds game kit production, educator training, and outreach programs that bring Tumor Tactics to underserved communities and schools with limited resources.",
    cta: "Support Our Mission",
    href: "#support",
    color: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { iconText: string; iconBg: string; btn: string }> = {
  blue: {
    iconText: "text-blue-400",
    iconBg: "bg-blue-950/60",
    btn: "bg-blue-600 hover:bg-blue-700",
  },
  violet: {
    iconText: "text-violet-400",
    iconBg: "bg-violet-950/60",
    btn: "bg-violet-600 hover:bg-violet-700",
  },
  emerald: {
    iconText: "text-emerald-400",
    iconBg: "bg-emerald-950/60",
    btn: "bg-emerald-600 hover:bg-emerald-700",
  },
};

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            There are many ways to support Tumor Tactics and our mission to make
            cancer education accessible, engaging, and impactful for students
            everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {options.map((opt) => {
            const c = colorMap[opt.color];
            return (
              <div
                key={opt.title}
                className="bg-slate-800 rounded-2xl p-7 shadow-sm border border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className={`inline-flex p-3 rounded-xl ${c.iconBg} ${c.iconText} mb-5 self-start`}>
                  {opt.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-3">
                  {opt.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">
                  {opt.description}
                </p>
                <a
                  href={opt.href}
                  className={`inline-flex items-center justify-center px-5 py-2.5 ${c.btn} text-white text-sm font-semibold rounded-full transition-colors`}
                >
                  {opt.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
