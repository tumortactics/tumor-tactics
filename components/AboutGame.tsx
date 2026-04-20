const features = [
  {
    title: "Strategy-Based Gameplay",
    description:
      "Players make decisions that mirror real biological processes — allocating treatment resources, managing immune responses, and adapting to evolving tumor behavior.",
  },
  {
    title: "Real Biological Mechanisms",
    description:
      "Grounded in current oncology research, it covers tumor growth, metastasis, immune evasion, and evidence-based treatment strategies.",
  },
  {
    title: "Classroom-Friendly Format",
    description:
      "Designed with educators in mind, it includes lesson guides, discussion prompts, and alignment with middle and high school science standards.",
  },
  {
    title: "Accessible to All Learners",
    description:
      "No prior biology background is needed. Concepts are introduced progressively through play, making complex science approachable.",
  },
];

const pillars = [
  { label: "Scientific Literacy", color: "bg-blue-900/50 text-blue-300" },
  { label: "Critical Thinking", color: "bg-violet-900/50 text-violet-300" },
  { label: "Cancer Awareness", color: "bg-emerald-900/50 text-emerald-300" },
  { label: "Collaborative Learning", color: "bg-orange-900/50 text-orange-300" },
];

export default function AboutGame() {
  return (
    <section id="game" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About the Game
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Where Biology Meets Strategy
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Interactive learning builds scientific literacy in ways that passive
            instruction cannot. Tumor Tactics gives students an experiential
            understanding of cancer — its mechanisms, its complexity, and the
            science working to fight it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {pillars.map((p) => (
            <span
              key={p.label}
              className={`text-sm font-medium px-4 py-1.5 rounded-full ${p.color}`}
            >
              {p.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-slate-800 rounded-2xl p-7 border border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500 self-stretch min-h-[3.5rem]" />
                <div>
                  <h3 className="text-base font-semibold text-slate-100 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-800 rounded-2xl border border-slate-700 shadow-sm p-8 text-center">
          <p className="text-sm font-semibold text-slate-100 mb-2">
            Supporting Cancer Awareness Initiatives
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Tumor Tactics is more than a classroom tool. It serves as a
            conversation starter that connects students to broader cancer
            awareness efforts, supporting organizations working to advance
            research, early detection, and patient support.
          </p>
        </div>
      </div>
    </section>
  );
}
