const milestones = [
  {
    label: "Founded",
    detail: "By a team of student researchers and educators",
  },
  {
    label: "Developed",
    detail: "In collaboration with teachers and cancer awareness organizations",
  },
  {
    label: "Launched",
    detail: "As a classroom pilot across multiple partner schools",
  },
  {
    label: "Expanding",
    detail: "Growing to reach hundreds of students across the country",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
              Education Born from
              <br />
              <span className="text-blue-400">Curiosity and Purpose</span>
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Tumor Tactics began with a simple observation: cancer is one of
                the most prevalent and complex diseases in the world, yet most
                students encounter it only through dense textbooks or difficult
                personal experiences. We believed there had to be a better way
                to teach it.
              </p>
              <p>
                A team of student researchers and educators came together to
                bridge the gap between scientific rigor and accessible learning.
                Working closely with biology teachers and health educators, we
                set out to design an experience that would not only cover cancer
                biology — from tumor growth and immune response to treatment
                decision-making — but would make students genuinely engaged with
                the material.
              </p>
              <p>
                The result was Tumor Tactics: a strategy-based card game that
                simulates the biological complexity of cancer in an interactive,
                classroom-friendly format. Since our founding, we have partnered
                with schools, science educators, and cancer awareness
                organizations to bring this resource to students nationwide. We
                are proud of how far we have come — and energized by how much
                further we intend to go.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-slate-800 to-blue-950/60 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-5">
                {milestones.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1.5 w-6 h-6 rounded-full bg-slate-700 border border-blue-700 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-400">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <blockquote className="text-slate-300 text-sm italic leading-relaxed">
                  &ldquo;We wanted students to feel the complexity and stakes of
                  cancer biology — not just read about it.&rdquo;
                </blockquote>
                <p className="text-xs text-slate-500 mt-3 font-medium">
                  — Tumor Tactics Founding Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
